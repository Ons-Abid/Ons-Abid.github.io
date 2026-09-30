"use client";

import { Moon, Sun } from "lucide-react";
import { usePreferences } from "@/features/preferences/preferences-provider";

export function LanguageThemeControls() {
  const { locale, setLocale, theme, toggleTheme } = usePreferences();
  const themeLabel = theme === "dark"
    ? (locale === "fr" ? "Activer le mode clair" : "Switch to light mode")
    : (locale === "fr" ? "Activer le mode sombre" : "Switch to dark mode");

  return (
    <div className="preference-controls" role="group" aria-label={locale === "fr" ? "Préférences d’affichage" : "Display preferences"}>
      <div className="language-switch" role="group" aria-label={locale === "fr" ? "Choisir la langue" : "Choose language"}>
        <button
          type="button"
          className={locale === "fr" ? "language-option is-active" : "language-option"}
          aria-label="Français"
          aria-pressed={locale === "fr"}
          onClick={() => setLocale("fr")}
        >
          <span className="language-flag" aria-hidden="true"><svg viewBox="0 0 60 30"><rect width="20" height="30" fill="#1b4f9c" /><rect x="20" width="20" height="30" fill="#fff" /><rect x="40" width="20" height="30" fill="#ed2939" /></svg></span><span>FR</span>
        </button>
        <button
          type="button"
          className={locale === "en" ? "language-option is-active" : "language-option"}
          aria-label="English"
          aria-pressed={locale === "en"}
          onClick={() => setLocale("en")}
        >
          <span className="language-flag" aria-hidden="true"><svg viewBox="0 0 60 30"><rect width="60" height="30" fill="#012169" /><path d="M0 0 60 30M60 0 0 30" stroke="#fff" strokeWidth="6" /><path d="M0 0 60 30M60 0 0 30" stroke="#c8102e" strokeWidth="2.5" /><path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" /><path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="5.5" /></svg></span><span>EN</span>
        </button>
      </div>
      <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
        {theme === "dark" ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
      </button>
    </div>
  );
}
