"use client";

import { usePreferences } from "@/features/preferences/preferences-provider";

export function I18nText({ fr, en }: { fr: string; en: string }) {
  const { locale } = usePreferences();
  return locale === "en" ? en : fr;
}
