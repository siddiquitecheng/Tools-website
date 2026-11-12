"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Manual light/dark theme toggle (THEME FIX, 2026-11-12).
 *
 * The effective theme lives on <html data-theme="light|dark">. The
 * inline script in app/layout.tsx sets it before first paint from
 * localStorage ("aletool-theme") or, with no saved choice, from the
 * system prefers-color-scheme — so there is no flash of the wrong
 * theme and the correct sun/moon icon is visible from the first
 * frame (CSS hides the other icon; see .theme-toggle in globals.css).
 *
 * The button itself only flips the attribute and persists the
 * choice; all paint work is done by the [data-theme] token block
 * in globals.css, which covers every route (tool pages included).
 * It sits in the dark navbar, so it is styled for dark chrome in
 * both modes and does not touch the header's scroll hysteresis or
 * the mobile burger menu.
 */
const STORAGE_KEY = "aletool-theme";

export function ThemeToggle() {
  // Always start "light" so the server render matches hydration;
  // the real value is synced from <html> after mount.
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (current === "dark" || current === "light") setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private mode / blocked storage: the toggle still works for
      // this visit; the choice just is not remembered.
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      <Sun size={17} className="theme-icon theme-icon-sun" aria-hidden="true" />
      <Moon
        size={17}
        className="theme-icon theme-icon-moon"
        aria-hidden="true"
      />
    </button>
  );
}
