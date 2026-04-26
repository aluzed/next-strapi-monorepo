"use client";
import type { ReactNode } from "react";
import { AuthProvider } from "@/contexts/AuthContext";

export const PageWrapperClient = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <AuthProvider>{children}</AuthProvider>;
};
