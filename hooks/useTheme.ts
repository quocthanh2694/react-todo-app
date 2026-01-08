"use client";
import { themeStore } from "@/lib/themeStore";
import { useSyncExternalStore } from "react";

export function useTheme() {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot
  );

  const toggle = () => themeStore.set(theme === "dark" ? "light" : "dark");

  return { theme, toggle };
}
