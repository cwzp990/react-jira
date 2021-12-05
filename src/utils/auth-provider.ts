import { User } from "../types/user";
import { post } from "./request";

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = async (body: any) => {
  const user: any = await post("/login", body);
  handleUserResponse(user);
};

export const register = async (body: any) => {
  const user: any = await post("/register", body);
  handleUserResponse(user);
};

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey);
};
