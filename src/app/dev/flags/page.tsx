"use client";

import { useMemo, useState } from "react";

import {
  type FeatureFlagCategory,
  featureFlagDefinitions,
  type FeatureFlags,
  LOCAL_FEATURE_FLAGS_STORAGE_KEY,
  readLocalFeatureFlagOverrides,
  resolveClientFeatureFlags,
  writeLocalFeatureFlagOverrides
} from "@/lib/config/featureFlags";

const categoryOrder: FeatureFlagCategory[] = ["auth-modes", "optional-modules", "dev-features"];

export default function DevFlagsPage() {
  const isDev = process.env.NODE_ENV === "development";
  const [overrides, setOverrides] = useState<Partial<FeatureFlags>>(
    readLocalFeatureFlagOverrides()
  );

  const effectiveFlags = useMemo(() => resolveClientFeatureFlags(overrides), [overrides]);

  const grouped = useMemo(() => {
    return categoryOrder.map((category) => ({
      category,
      flags: featureFlagDefinitions.filter((item) => item.category === category)
    }));
  }, []);

  if (!isDev) {
    return (
      <main className="stack container">
        <h1 className="card-title">Dev Flags</h1>
      </main>
    );
  }

  return (
    <main className="stack container">
      <h1 className="card-title">Dev Flags</h1>
      <p className="card-subtitle">Stored in localStorage key: {LOCAL_FEATURE_FLAGS_STORAGE_KEY}</p>

      {grouped.map((group) => (
        <section key={group.category} className="card stack">
          <h2 className="card-title text-title-sm">{group.category}</h2>
          <div className="stack">
            {group.flags.map((flag) => {
              const checked = effectiveFlags[flag.key];
              return (
                <label key={flag.key} className="icon-inline icon-gap-sm">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(event) => {
                      const next = {
                        ...overrides,
                        [flag.key]: event.target.checked
                      };
                      setOverrides(next);
                      writeLocalFeatureFlagOverrides(next);
                    }}
                  />
                  <span>{flag.label}</span>
                </label>
              );
            })}
          </div>
        </section>
      ))}

      <button
        className="button"
        onClick={() => {
          const empty: Partial<FeatureFlags> = {};
          setOverrides(empty);
          writeLocalFeatureFlagOverrides(empty);
        }}
      >
        Reset Local Overrides
      </button>
    </main>
  );
}
