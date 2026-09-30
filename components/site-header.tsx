"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePreferences } from "@/features/preferences/preferences-provider";
import { LanguageThemeControls } from "@/features/preferences/components/language-theme-controls";

const links = [
  { href: "/projects", fr: "Projets", en: "Projects" },
  { href: "/about", fr: "À propos", en: "About" },
  { href: "/resume", fr: "Parcours", en: "Experience" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { locale } = usePreferences();

  return (
    <header className="site-header" id="top">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label={locale === "fr" ? "Ons Abid, accueil" : "Ons Abid, home"} onClick={() => setOpen(false)}>
          <Image className="brand-photo" src="/ons-abid.jpg" alt="" width={40} height={40} priority />
          <span className="brand-name">ONS ABID<span className="brand-period">.</span></span>
        </Link>
        <nav id="primary-navigation" className={open ? "main-nav is-open" : "main-nav"} aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}>
          {links.map((link) => (
            <Link
              aria-current={pathname === link.href || pathname.startsWith(link.href + "/") ? "page" : undefined}
              className="nav-link"
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              {locale === "fr" ? link.fr : link.en}
            </Link>
          ))}
          <Link className="nav-contact" href="/contact" onClick={() => setOpen(false)}>
            Contact <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        </nav>
        <LanguageThemeControls />
        <button
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? (locale === "fr" ? "Fermer le menu" : "Close menu") : (locale === "fr" ? "Ouvrir le menu" : "Open menu")}
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          type="button"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
