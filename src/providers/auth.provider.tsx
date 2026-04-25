"use client";

import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

import { authService } from "@/modules/auth/services/auth.service";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): ReactNode {
  useQuery({
    queryKey: ["auth", "me"],
    queryFn: authService.getMe,
    retry: false
  });

  return children;
}
