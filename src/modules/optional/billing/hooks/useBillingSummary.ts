"use client";

import { useQuery } from "@tanstack/react-query";

import { billingService } from "@/modules/optional/billing/services/billing.service";

export function useBillingSummary() {
  const query = useQuery({
    queryKey: ["billing", "summary"],
    queryFn: billingService.summary
  });

  return {
    summary: query.data,
    isLoading: query.isLoading,
    isError: query.isError
  };
}
