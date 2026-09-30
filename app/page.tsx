import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/features/projects/components/project-card";
import { projects } from "@/features/projects/data/projects";
import { I18nText } from "@/features/preferences/components/i18n-text";

const proofPoints = [
  { value: "94 %", labelFr: "HitRate@1 · système RAG", labelEn: "HitRate@1 · RAG system", href: "/projects/digital-twin" },
  { value: "95 %", labelFr: "F1 détection · Edge AI", labelEn: "Detection F1 · Edge AI", href: "/projects/edge-ai" },
  { value: "22 FPS", labelFr: "PlaqueGuard · vision", labelEn: "PlaqueGuard · computer vision", href: "/projects/plaqueguard" },
  { value: "470k+", labelFr: "mesures énergie analysées", labelEn: "energy readings analysed", href: "/projects/digital-twin" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> <I18nText fr="Ingénieure Full Stack & IA" en="Full Stack & AI Engineer" /> <span className="eyebrow-divider">·</span> <I18nText fr="Sfax, Tunisie" en="Sfax, Tunisia" /></p>
          <h1><I18nText fr="Des systèmes intelligents," en="Intelligent systems," /> <em><I18nText fr="construits pour le réel." en="built for the real world." /></em></h1>
          <p className="hero-lede">
            <I18nText fr="Je relie données, modèles d’IA et applications web pour transformer des problèmes concrets en produits logiciels mesurables." en="I connect data, AI models and web applications to turn real-world problems into measurable software products." />
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/projects">
              <I18nText fr="Découvrir mes projets" en="Explore my projects" /> <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <Link className="button button-secondary" href="/contact">
              <I18nText fr="Me contacter" en="Get in touch" /> <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="micro-label"><I18nText fr="DOMAINES" en="FOCUS" /></span>
            <span><I18nText fr="IA appliquée" en="Applied AI" /></span><i /> <span>Data & IoT</span><i /> <span>Full Stack</span>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-index">01 <span>—</span> <I18nText fr="PROFIL" en="PROFILE" /></div>
          <div className="portrait-frame" style={{ position: "relative" }}>
            <Image
              src="/ons-abid.jpg"
              alt="Portrait professionnel d’Ons Abid"
              fill
              priority
              sizes="(max-width: 760px) 82vw, 420px"
              className="portrait-image"
            />
            <div className="portrait-corner" aria-hidden="true">OA</div>
          </div>
          <div className="portrait-caption">
            <span>Ons Abid</span>
            <span><I18nText fr="Ingénieure logiciel · IA" en="Software Engineer · AI" /></span>
          </div>
          <div className="portrait-side-note"><I18nText fr="DU PROTOTYPE AU PRODUIT" en="FROM PROTOTYPE TO PRODUCT" /> <ArrowDownRight size={15} aria-hidden="true" /></div>
        </div>
      </section>

      <section className="proof-band" aria-label="Résultats de projets · Project results">
        <div className="shell proof-grid">
          {proofPoints.map((item) => (
            <Link className="proof-item" href={item.href} key={item.value}>
              <span className="proof-value">{item.value}</span>
              <span className="proof-label"><I18nText fr={item.labelFr} en={item.labelEn} /></span>
              <ArrowUpRight aria-hidden="true" className="proof-arrow" size={16} />
            </Link>
          ))}
        </div>
        <p className="proof-note shell"><I18nText fr="Mesures rapportées dans les projets correspondants ; détails et contexte sur chaque étude de cas." en="Metrics reported in their respective projects; see each case study for details and context." /></p>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="section-number">01</span> <I18nText fr="TRAVAUX SÉLECTIONNÉS" en="SELECTED WORK" /></p>
            <h2><I18nText fr="Des projets," en="Projects," /> <em><I18nText fr="des résultats." en="with measurable results." /></em></h2>
          </div>
          <Link className="text-link" href="/projects"><I18nText fr="Tous les projets" en="All projects" /> <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="project-grid featured-grid">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard project={project} index={index + 1} key={project.slug} />
          ))}
        </div>
      </section>

      <section className="approach-band">
        <div className="shell approach-layout">
          <div>
            <p className="eyebrow"><span className="section-number">02</span> <I18nText fr="MA FAÇON DE TRAVAILLER" en="HOW I WORK" /></p>
            <h2><I18nText fr="Une ingénierie" en="Engineering" /> <em><I18nText fr="orientée usage." en="grounded in real use." /></em></h2>
          </div>
          <div className="approach-copy">
            <p>
              <I18nText fr="Je pars du besoin et des contraintes de terrain, puis je construis le système complet : collecte et qualité des données, modèles, API, interface et évaluation." en="I start with the user need and real-world constraints, then build the complete system: data collection and quality, models, APIs, interfaces and evaluation." />
            </p>
            <Link className="button button-dark" href="/about"><I18nText fr="En savoir plus" en="About me" /> <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="approach-steps">
            <div><span>01</span><b><I18nText fr="Comprendre" en="Understand" /></b><small><I18nText fr="Le contexte, les utilisateurs, les données." en="The context, users and data." /></small></div>
            <div><span>02</span><b><I18nText fr="Construire" en="Build" /></b><small><I18nText fr="Une architecture adaptée au problème." en="An architecture suited to the problem." /></small></div>
            <div><span>03</span><b><I18nText fr="Mesurer" en="Measure" /></b><small><I18nText fr="Des résultats vérifiables et expliqués." en="Results that can be checked and explained." /></small></div>
          </div>
        </div>
      </section>

      <section className="closing-cta shell">
        <p className="eyebrow"><span className="status-dot" /> <I18nText fr="DISPONIBLE POUR ÉCHANGER" en="OPEN TO OPPORTUNITIES" /></p>
        <div className="closing-layout">
          <h2><I18nText fr="Parlons d’un" en="Let’s discuss a" /> <em><I18nText fr="problème à résoudre." en="problem worth solving." /></em></h2>
          <Link className="button button-primary" href="/contact"><I18nText fr="Me contacter" en="Get in touch" /> <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
