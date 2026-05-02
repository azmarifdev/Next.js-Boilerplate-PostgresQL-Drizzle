import type { FeatureFlag } from "@/lib/config/featureFlags";
import type { Permission } from "@/types/auth";

export interface FeatureDefinition {
  key: FeatureFlag;
  route: string;
  permission: Permission;
  navLabelKey: string;
  requiresRole?: "admin" | "user";
}

export const featureRegistry: FeatureDefinition[] = [
  {
    key: "ENABLE_ADMIN",
    route: "/users",
    permission: "users:read",
    navLabelKey: "usersNav",
    requiresRole: "admin"
  }
];

export function findFeatureByPath(pathname: string): FeatureDefinition | undefined {
  return featureRegistry.find(
    (feature) => pathname === feature.route || pathname.startsWith(`${feature.route}/`)
  );
}
