"use client";
import { createContext, useState, type ReactNode } from "react";

export type AuthContextType = {
  userToken: string | null;
  setUserToken: (userToken: string | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
  userToken: null,
  setUserToken: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userToken, setUserToken] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem("token") || null;
  });

  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
};
