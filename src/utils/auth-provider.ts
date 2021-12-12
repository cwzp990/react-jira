import { User } from "../types/user";
import { post } from "./request";

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = async (body: any) => {
  const resp: any = await post("/login", body);
  return handleUserResponse(resp);
};

export const register = async (body: any) => {
  const resp: any = await post("/register", body);
  return handleUserResponse(resp);
};

export const logout = async () => {
  return window.localStorage.removeItem(localStorageKey);
};
