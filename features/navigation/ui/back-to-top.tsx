"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { usePreferences } from "@/features/preferences/preferences-provider";

const VISIBILITY_THRESHOLD = 420;

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { locale } = usePreferences();
  const label = locale === "fr" ? "Retour en haut" : "Back to top";

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > VISIBILITY_THRESHOLD);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={isVisible ? "back-to-top is-visible" : "back-to-top"}
      aria-label={label}
      aria-hidden={!isVisible}
      title={label}
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
    >
      <ArrowUp size={20} strokeWidth={2.25} aria-hidden="true" />
    </button>
  );
}
