import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { I18nText } from "@/features/preferences/components/i18n-text";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand-block">
          <Link className="brand footer-brand" href="/">
            <Image className="brand-photo" src="/ons-abid.jpg" alt="" width={36} height={36} />
            <span className="brand-name">ONS ABID<span className="brand-period">.</span></span>
          </Link>
          <p><I18nText fr="Ingénieure Full Stack & IA" en="Full Stack & AI Engineer" /><br /><I18nText fr="Sfax, Tunisie" en="Sfax, Tunisia" /></p>
        </div>
        <div className="footer-links">
          <span className="micro-label"><I18nText fr="EXPLORER" en="EXPLORE" /></span>
          <Link href="/projects"><I18nText fr="Projets" en="Projects" /></Link>
          <Link href="/about"><I18nText fr="À propos" en="About" /></Link>
          <Link href="/resume"><I18nText fr="Parcours" en="Experience" /></Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-links">
          <span className="micro-label"><I18nText fr="EN LIGNE" en="ONLINE" /></span>
          <a href="https://github.com/Ons-Abid" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
          <a href="https://www.linkedin.com/in/ons-abid/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
          <a href="mailto:abidons61@gmail.com">E-mail <ArrowUpRight size={14} /></a>
        </div>
        <a className="footer-contact" href="mailto:abidons61@gmail.com" aria-label="Écrire à Ons Abid · Write to Ons Abid">
          <span><I18nText fr="Une idée à construire ?" en="Something to build together?" /></span>
          <b><I18nText fr="Écrivez-moi" en="Get in touch" /> <ArrowUpRight size={17} /></b>
        </a>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Ons Abid</span>
        <span><I18nText fr="Conçu avec soin · Next.js" en="Made with care · Next.js" /></span>
        <a href="#top"><I18nText fr="Retour en haut ↑" en="Back to top ↑" /></a>
      </div>
    </footer>
  );
}
