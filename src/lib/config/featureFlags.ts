import { appConfig } from "@/lib/config/app-config";

export type FeatureFlag =
  | "admin"
  | "ecommerce"
  | "billing"
  | "customAuth"
  | "demoAuth"
  | "insecureDevAuth"
  | "redux";

export type FeatureFlagCategory = "auth-modes" | "optional-modules" | "dev-features";

export interface FeatureFlagDefinition {
  key: FeatureFlag;
  label: string;
  category: FeatureFlagCategory;
}

export const featureFlagDefinitions: FeatureFlagDefinition[] = [
  { key: "customAuth", label: "Custom Auth Mode", category: "auth-modes" },
  { key: "ecommerce", label: "Optional Ecommerce Module", category: "optional-modules" },
  { key: "billing", label: "Optional Billing Module", category: "optional-modules" },
  { key: "admin", label: "Admin Module", category: "optional-modules" },
  { key: "demoAuth", label: "Demo Auth", category: "dev-features" },
  { key: "insecureDevAuth", label: "Insecure Dev Auth", category: "dev-features" },
  { key: "redux", label: "Redux State Mode", category: "dev-features" }
];

export type FeatureFlags = Record<FeatureFlag, boolean>;

export function getFeatureFlags(): FeatureFlags {
  return {
    admin: appConfig.features.admin,
    ecommerce: appConfig.features.ecommerce,
    billing: appConfig.features.billing,
    customAuth: appConfig.authProvider === "custom",
    demoAuth: process.env.ALLOW_DEMO_AUTH === "true",
    insecureDevAuth: process.env.ALLOW_INSECURE_DEV_AUTH === "true",
    redux: appConfig.stateMode === "redux"
  };
}

export function isFeatureEnabled(feature: FeatureFlag): boolean {
  return getFeatureFlags()[feature];
}

export function assertFeatureEnabled(feature: FeatureFlag): void {
  if (!isFeatureEnabled(feature)) {
    throw new Error(`Feature '${feature}' is disabled by configuration`);
  }
}

export const LOCAL_FEATURE_FLAGS_STORAGE_KEY = "dev.feature.flags";

export function readLocalFeatureFlagOverrides(): Partial<FeatureFlags> {
  if (typeof window === "undefined") {
    return {};
  }

  const raw = window.localStorage.getItem(LOCAL_FEATURE_FLAGS_STORAGE_KEY);
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw) as Partial<FeatureFlags>;
    return parsed ?? {};
  } catch {
    return {};
  }
}

export function writeLocalFeatureFlagOverrides(overrides: Partial<FeatureFlags>): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(LOCAL_FEATURE_FLAGS_STORAGE_KEY, JSON.stringify(overrides));
}

export function resolveClientFeatureFlags(overrides: Partial<FeatureFlags>): FeatureFlags {
  const server = getFeatureFlags();
  return {
    ...server,
    ...overrides
  };
}
