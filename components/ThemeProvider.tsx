"use client";

import { PropsWithChildren, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeProvider({ children }: PropsWithChildren) {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return <>{children}</>;
}
