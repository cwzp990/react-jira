import { useState, useEffect } from "react";
import { get } from "./request";

interface State<D> {
  error: Error | null;
  data: D;
  status: "idle" | "loading" | "error" | "success";
}

const defaultState: State<null> = {
  error: null,
  data: null,
  status: "idle",
};

export const useAsync = <D>(initState?: State<D>) => {
  const [state, setState] = useState({
    ...defaultState,
    ...initState,
  });

  const setData = (data: D) =>
    setState({
      error: null,
      data,
      status: "success",
    });

  const setError = (error: Error) =>
    setState({
      error,
      data: null,
      status: "error",
    });

  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error("请传入promise");
    }
    setState({ ...state, status: "loading" });
    promise
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((error) => {
        setError(error);
        return error;
      });
  };

  return {
    isIdle: state.status === "idle",
    isLoading: state.status === "loading",
    isSuccess: state.status === "success",
    isError: state.status === "error",
    setData,
    setError,
    run,
    ...state,
  };
};

export const useList = (param: any) => {
  const { run, ...result } = useAsync();

  useEffect(() => {
    run(get("/projects", param));
  }, [param]);

  return result;
};

export const useDocumentTitle = (title: string, keep: boolean = true) => {
  const oldTitle = document.title;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keep) {
        document.title = oldTitle;
      }
    };
  }, []);
};
