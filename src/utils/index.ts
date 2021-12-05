import { useState } from "react";

export const isVoid = (value: any) => (value === 0 ? false : !value);

export const cleanObject = (object?: { [key: string]: unknown }) => {
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useArray = <T>(initArray: T[]) => {
  const [value, setValue] = useState(initArray);

  const add = (item: T) => {
    setValue([...value, item]);
  };

  const clear = () => {
    setValue([]);
  };

  const remove = (index: number) => {
    const copy = [...value];
    copy.splice(index, 1);
    setValue(copy);
  };

  return {
    value,
    add,
    clear,
    remove,
  };
};
