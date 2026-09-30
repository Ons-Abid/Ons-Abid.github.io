import type { Metadata } from "next";
import { ProjectCard } from "@/features/projects/components/project-card";
import { projects } from "@/features/projects/data/projects";
import { I18nText } from "@/features/preferences/components/i18n-text";

export const metadata: Metadata = {
  title: "Projets",
  description: "Études de cas en IA appliquée, Edge AI, IoT et développement Full Stack par Ons Abid.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell shell">
      <header className="page-intro">
        <p className="eyebrow"><span className="section-number">01</span> <I18nText fr="SÉLECTION DE PROJETS" en="SELECTED PROJECTS" /></p>
        <h1><I18nText fr="Le travail," en="The work," /> <em><I18nText fr="avec son contexte." en="in its context." /></em></h1>
        <p>
          <I18nText fr="Des projets de recherche, de fin d’études et de stage. Chaque étude de cas présente le problème, la démarche et les résultats mesurés." en="Research, final-year and internship projects. Each case study explains the problem, approach and measured results." />
        </p>
      </header>
      <div className="project-grid listing-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index + 1} key={project.slug} />
        ))}
      </div>
      <p className="editorial-note"><I18nText fr="Les liens de dépôt ne sont ajoutés qu’aux projets dont le code public correspond exactement à l’étude présentée." en="Repository links are included only when the public code matches the project described." /></p>
    </div>
  );
}
