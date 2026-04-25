"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

import { authService } from "@/modules/auth/services/auth.service";
import { useToast } from "@/providers/toast.provider";

export function useAuth() {
  const queryClient = useQueryClient();
  const { notify } = useToast();
  const meQuery = useQuery({
    queryKey: ["auth", "me"],
    queryFn: authService.getMe,
    retry: false
  });

  const user = meQuery.data ?? null;
  const isLoading = meQuery.isLoading;
  const isAuthenticated = useMemo(() => Boolean(user), [user]);

  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: async () => {
      queryClient.setQueryData(["auth", "me"], null);
      await queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
      notify("success", "You have been logged out");
    },
    onError: (error) => {
      notify("error", error instanceof Error ? error.message : "Logout failed");
    }
  });

  return {
    user,
    isLoading,
    isAuthenticated,
    logout: async () => logoutMutation.mutateAsync(),
    isLoggingOut: logoutMutation.isPending
  };
}
