"use client";

import { ReactNode } from "react";

import { AuthProvider } from "@/providers/auth.provider";
import { QueryProvider } from "@/providers/query.provider";
import { ReduxProvider } from "@/providers/redux.provider";
import { ThemeProvider } from "@/providers/theme.provider";
import { ToastProvider } from "@/providers/toast.provider";

const reduxEnabled = process.env.NEXT_PUBLIC_ENABLE_REDUX === "true";

export function AppProviders({ children }: { children: ReactNode }): ReactNode {
  const content = (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>{children}</AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );

  return (
    <QueryProvider>
      {reduxEnabled ? <ReduxProvider>{content}</ReduxProvider> : content}
    </QueryProvider>
  );
}
