import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { I18nText } from "@/features/preferences/components/i18n-text";
import { education, experience } from "@/features/profile/data/profile";

export const metadata: Metadata = {
  title: "Parcours professionnel",
  description: "Formation, expériences et compétences d’Ons Abid.",
};

export default function ResumePage() {
  return (
    <div className="page-shell shell resume-page">
      <header className="resume-head">
        <div>
          <p className="eyebrow"><span className="section-number">03</span> <I18nText fr="PARCOURS PROFESSIONNEL" en="PROFESSIONAL EXPERIENCE" /></p>
          <h1><I18nText fr="Expérience &" en="Experience &" /> <em><I18nText fr="formation." en="education." /></em></h1>
          <p><I18nText fr="Ingénieure Full Stack & IA · Sfax, Tunisie" en="Full Stack & AI Engineer · Sfax, Tunisia" /></p>
        </div>
      </header>

      <section className="resume-block">
        <p className="eyebrow"><I18nText fr="EXPÉRIENCE" en="EXPERIENCE" /></p>
        <div className="resume-list">
          {experience.map((job) => (
            <article className="resume-row" key={job.id}>
              <time><I18nText fr={job.period.fr} en={job.period.en} /></time>
              <div><h2><I18nText fr={job.role.fr} en={job.role.en} /></h2><b><I18nText fr={job.organization.fr} en={job.organization.en} /></b><p><I18nText fr={job.description.fr} en={job.description.en} /></p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-block education-block">
        <p className="eyebrow"><I18nText fr="FORMATION" en="EDUCATION" /></p>
        <div className="resume-list">
          {education.map((item) => (
            <article className="resume-row" key={item.degree.fr}>
              <time><I18nText fr={item.period.fr} en={item.period.en} /></time>
              <div><h2><I18nText fr={item.degree.fr} en={item.degree.en} /></h2><b>{item.institution}</b></div>
            </article>
          ))}
        </div>
      </section>

      <p className="resume-footnote"><I18nText fr="Certifications : Cisco CCNA · Python. Engagement : IEEE IIT Student Branch." en="Certifications: Cisco CCNA · Python. Member: IEEE IIT Student Branch." /></p>
      <p className="resume-footnote"><I18nText fr="Langues : arabe, français, anglais." en="Languages: Arabic, French, English." /></p>
      <Link className="text-link resume-contact-link" href="/contact"><I18nText fr="Me contacter" en="Get in touch" /> <ArrowUpRight size={16} aria-hidden="true" /></Link>
    </div>
  );
}
