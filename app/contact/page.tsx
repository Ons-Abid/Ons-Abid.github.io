import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { I18nText } from "@/features/preferences/components/i18n-text";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacter Ons Abid pour des opportunités en IA appliquée et génie logiciel.",
};

export default function ContactPage() {
  return (
    <div className="page-shell shell contact-page">
      <header className="page-intro contact-intro">
        <p className="eyebrow"><span className="status-dot" /> <I18nText fr="CONTACT / OUVERTURE" en="CONTACT / OPEN TO OPPORTUNITIES" /></p>
        <h1><I18nText fr="Construisons quelque chose" en="Let’s build something" /> <em><I18nText fr="d’utile." en="useful." /></em></h1>
        <p>
          <I18nText fr="Pour une opportunité en IA, data ou développement logiciel, écrivez-moi. Je serai heureuse d’en apprendre davantage sur votre équipe et vos besoins." en="For opportunities in AI, data or software engineering, get in touch. I would be glad to learn more about your team and what you need." />
        </p>
      </header>
      <div className="contact-layout">
        <div className="contact-primary">
          <span className="micro-label"><I18nText fr="ÉCRIVEZ-MOI" en="EMAIL ME" /></span>
          <a className="contact-email" href="mailto:abidons61@gmail.com">abidons61@gmail.com <ArrowUpRight size={24} aria-hidden="true" /></a>
          <p><I18nText fr="Je réponds généralement par e-mail ou téléphone." en="I usually reply by email or phone." /></p>
          <a className="button button-primary" href="mailto:abidons61@gmail.com?subject=Prise%20de%20contact%20professionnelle">
            <Mail size={16} aria-hidden="true" /> <I18nText fr="Envoyer un e-mail" en="Send an email" />
          </a>
        </div>
        <div className="contact-details">
          <div className="contact-detail"><span className="contact-icon"><MapPin size={18} /></span><div><small><I18nText fr="LOCALISATION" en="LOCATION" /></small><b><I18nText fr="Sfax, Tunisie" en="Sfax, Tunisia" /></b></div></div>
          <a className="contact-detail" href="tel:+21623833680"><span className="contact-icon"><Phone size={18} /></span><div><small><I18nText fr="TÉLÉPHONE" en="PHONE" /></small><b>+216 23 833 680</b></div><ArrowUpRight size={15} /></a>
          <a className="contact-detail" href="https://www.linkedin.com/in/ons-abid/" target="_blank" rel="noreferrer"><span className="contact-icon contact-brand">in</span><div><small>LINKEDIN</small><b>ons-abid</b></div><ArrowUpRight size={15} /></a>
          <a className="contact-detail" href="https://github.com/Ons-Abid" target="_blank" rel="noreferrer"><span className="contact-icon contact-brand">GH</span><div><small>GITHUB</small><b>Ons-Abid</b></div><ArrowUpRight size={15} /></a>
        </div>
      </div>
    </div>
  );
}
