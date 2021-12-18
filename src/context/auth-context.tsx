/* eslint-disable no-sequences */
import React, { useContext, useState, ReactNode, useEffect } from "react";
import * as auth from "../utils/auth-provider";
import { post } from "../utils/request";

interface AuthForm {
  username: string;
  password: string;
}

const AuthContext: any = React.createContext(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  const login = (form: AuthForm) =>
    auth.login(form).then((user: any) => setUser(user));

  const register = (form: AuthForm) =>
    auth.register(form).then((user: any) => setUser(user));

  const logout = () => auth.logout().then(() => setUser(null));

  // useEffect(() => {
  //   post('/me').then((resp: any) => {
  //     setUser(resp.user)
  //   })
  // }, [])

  return <AuthContext.Provider children={children} value={{user, login, register, logout}} />;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }

  return context as any;
};
