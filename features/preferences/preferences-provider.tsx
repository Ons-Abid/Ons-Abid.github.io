"use client";

import { createContext, useCallback, useContext, useEffect, useState, useSyncExternalStore } from "react";

export type Locale = "fr" | "en";
export type Theme = "light" | "dark";

type Preferences = {
  locale: Locale;
  theme: Theme;
  setLocale: (locale: Locale) => void;
  toggleTheme: () => void;
};

const PreferencesContext = createContext<Preferences | null>(null);
const listeners = new Set<() => void>();
let fallbackLocale: Locale = "fr";
let fallbackTheme: Theme = "light";

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function readLocale(): Locale {
  if (typeof window === "undefined") return "fr";
  try {
    return localStorage.getItem("ons-portfolio-locale") === "en" ? "en" : "fr";
  } catch {
    return fallbackLocale;
  }
}

function readTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    return localStorage.getItem("ons-portfolio-theme") === "dark" ? "dark" : "light";
  } catch {
    return fallbackTheme;
  }
}

function getServerLocale(): Locale {
  return "fr";
}

function getServerTheme(): Theme {
  return "light";
}

function notifyPreferencesChanged() {
  listeners.forEach((listener) => listener());
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const storedLocale = useSyncExternalStore(subscribe, readLocale, getServerLocale);
  const storedTheme = useSyncExternalStore(subscribe, readTheme, getServerTheme);
  const [sessionLocale, setSessionLocale] = useState<Locale | null>(null);
  const [sessionTheme, setSessionTheme] = useState<Theme | null>(null);
  const locale = sessionLocale ?? storedLocale;
  const theme = sessionTheme ?? storedTheme;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [locale, theme]);

  const setLocale = useCallback((nextLocale: Locale) => {
    fallbackLocale = nextLocale;
    setSessionLocale(nextLocale);
    document.documentElement.lang = nextLocale;
    try {
      localStorage.setItem("ons-portfolio-locale", nextLocale);
    } catch {
      // Keep the selected language for this session.
    }
    notifyPreferencesChanged();
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    fallbackTheme = nextTheme;
    setSessionTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    try {
      localStorage.setItem("ons-portfolio-theme", nextTheme);
    } catch {
      // Keep the selected theme for this session.
    }
    notifyPreferencesChanged();
  }, [theme]);

  return (
    <PreferencesContext.Provider value={{ locale, theme, setLocale, toggleTheme }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const preferences = useContext(PreferencesContext);
  if (!preferences) throw new Error("usePreferences must be used within PreferencesProvider");
  return preferences;
}
