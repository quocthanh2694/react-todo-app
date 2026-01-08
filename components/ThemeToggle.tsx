"use client";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="bg-card border border-border text-fg px-3 py-2 rounded-lg hover:opacity-90"
    >
      {theme === "dark" ? "☀" : "🌙"}
    </button>
  );
}
