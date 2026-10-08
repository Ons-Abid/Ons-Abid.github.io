import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { I18nText } from "@/features/preferences/components/i18n-text";
import { experience, skillGroups } from "@/features/profile/data/profile";

export const metadata: Metadata = {
  title: "À propos",
  description: "Parcours, approche et compétences d’Ons Abid, ingénieure Full Stack & IA à Sfax.",
};

export default function AboutPage() {
  return (
    <div className="page-shell shell">
      <header className="page-intro">
        <p className="eyebrow"><span className="section-number">02</span> <I18nText fr="À PROPOS" en="ABOUT" /></p>
        <h1><I18nText fr="Curieuse des systèmes," en="Curious about systems," /> <em><I18nText fr="attachée au concret." en="focused on practical outcomes." /></em></h1>
        <p>
          <I18nText fr="Je suis ingénieure en informatique, spécialisée en IA appliquée et développement Full Stack. J’aime faire le lien entre l’expérimentation technique et les usages réels." en="I am a software engineer focused on applied AI and full-stack development. I enjoy connecting technical experimentation with real-world use." />
        </p>
      </header>

      <section className="about-profile">
        <div className="about-photo" style={{ position: "relative" }}>
          <Image src="/ons-abid.jpg" alt="Ons Abid" fill sizes="(max-width: 760px) 88vw, 380px" className="portrait-image" />
        </div>
        <div className="about-bio">
          <p className="eyebrow">01 / <I18nText fr="PROFIL" en="PROFILE" /></p>
          <h2><I18nText fr="Des bases solides en logiciel," en="Strong software foundations," /> <em><I18nText fr="une curiosité pour l’IA." en="with a curiosity for AI." /></em></h2>
          <p>
            <I18nText fr="Mon parcours combine génie logiciel, systèmes de données et apprentissage automatique. J’ai travaillé sur des plateformes web, des flux IoT, des modèles de vision et des pipelines de diagnostic." en="My background combines software engineering, data systems and machine learning. I have worked on web platforms, IoT streams, computer-vision models and diagnostic pipelines." />
          </p>
          <p>
            <I18nText fr="Ce qui m’intéresse : construire des solutions utiles, expliquer comment elles fonctionnent et évaluer leurs limites avec des indicateurs compréhensibles." en="I am interested in building useful solutions, explaining how they work and evaluating their limits with clear metrics." />
          </p>
          <div className="location-chip"><MapPin size={15} aria-hidden="true" /> <I18nText fr="Sfax, Tunisie" en="Sfax, Tunisia" /></div>
          <Link className="text-link" href="/resume"><I18nText fr="Voir mon parcours" en="View my experience" /> <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">02 / <I18nText fr="EXPÉRIENCE" en="EXPERIENCE" /></p><h2><I18nText fr="Une expérience" en="A steadily growing" /> <em><I18nText fr="progressive." en="career." /></em></h2></div>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.id}>
              <span className="timeline-year"><I18nText fr={item.period.fr} en={item.period.en} /></span>
              <div><h3><I18nText fr={item.role.fr} en={item.role.en} /></h3><b><I18nText fr={item.organization.fr} en={item.organization.en} /></b><p><I18nText fr={item.description.fr} en={item.description.en} /></p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">03 / <I18nText fr="COMPÉTENCES" en="SKILLS" /></p><h2><I18nText fr="Une boîte à outils" en="A versatile" /> <em><I18nText fr="transversale." en="toolkit." /></em></h2></div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title.fr}>
              <span className="skill-index">0{index + 1}</span><h3><I18nText fr={group.title.fr} en={group.title.en} /></h3><p>{group.items}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-languages">
        <p className="eyebrow">04 / <I18nText fr="LANGUES" en="LANGUAGES" /></p>
        <div><span><I18nText fr="Arabe" en="Arabic" /> <small><I18nText fr="Langue maternelle" en="Native" /></small></span><span><I18nText fr="Français" en="French" /></span><span><I18nText fr="Anglais" en="English" /></span></div>
      </section>
    </div>
  );
}
