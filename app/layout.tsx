import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PreferencesProvider } from "@/features/preferences/preferences-provider";
import { I18nText } from "@/features/preferences/components/i18n-text";
import { BackToTop } from "@/features/navigation/ui/back-to-top";

export const metadata: Metadata = {
  title: {
    default: "Ons Abid — Full Stack & AI Engineer",
    template: "%s | Ons Abid — Full Stack & AI Engineer",
  },
  description:
    "Portfolio of Ons Abid, Full Stack & AI Engineer in Sfax, Tunisia. Applied AI, data systems, Edge AI and software engineering projects.",
  applicationName: "Ons Abid — Full Stack & AI Engineer",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ons Abid — Full Stack & AI Engineer",
    description:
      "IA appliquée, systèmes de données et développement logiciel, de l’expérimentation au produit.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <PreferencesProvider>
          <a className="skip-link" href="#main-content">
            <I18nText fr="Aller au contenu" en="Skip to content" />
          </a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <BackToTop />
        </PreferencesProvider>
      </body>
    </html>
  );
}
