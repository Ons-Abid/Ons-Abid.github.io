import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectArt } from "@/features/projects/components/project-art";
import { getProject, projects } from "@/features/projects/data/projects";
import { localizeProject } from "@/features/projects/data/project-english";
import { I18nText } from "@/features/preferences/components/i18n-text";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.shortTitle,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const english = localizeProject(project, "en");

  return (
    <article className="case-study shell">
      <Link className="back-link" href="/projects"><ArrowLeft size={16} aria-hidden="true" /> <I18nText fr="Tous les projets" en="All projects" /></Link>
      <header className="case-heading">
        <p className="eyebrow"><span className="section-number">{project.number}</span> <I18nText fr={project.category.toUpperCase()} en={english.category.toUpperCase()} /></p>
        <h1><I18nText fr={project.title} en={english.title} /></h1>
        <p className="case-summary"><I18nText fr={project.summary} en={english.summary} /></p>
        <div className="case-context"><span><I18nText fr={project.organization} en={english.organization} /></span><i /> <span><I18nText fr={project.period} en={english.period} /></span></div>
      </header>

      <div className="case-visual"><ProjectArt variant={project.visual} /></div>

      <div className="case-body">
        <aside className="case-sidebar">
          <span className="micro-label"><I18nText fr="OUTILS" en="TOOLS" /></span>
          <div className="case-tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
          <Link className="text-link" href="/contact"><I18nText fr="Parler de ce projet" en="Discuss this project" /> <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </aside>
        <div className="case-main">
          <section className="case-section">
            <p className="eyebrow"><I18nText fr="CONTEXTE" en="CONTEXT" /></p>
            <p><I18nText fr={project.context} en={english.context} /></p>
          </section>
          <section className="case-section">
            <p className="eyebrow"><I18nText fr="PROBLÈME À RÉSOUDRE" en="CHALLENGE" /></p>
            <p><I18nText fr={project.challenge} en={english.challenge} /></p>
          </section>
          <section className="case-section">
            <p className="eyebrow"><I18nText fr="DÉMARCHE" en="APPROACH" /></p>
            <ol className="approach-list">
              {project.approach.map((step, index) => (
                <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p><I18nText fr={step} en={english.approach[index]} /></p></li>
              ))}
            </ol>
          </section>
          {project.metrics.length > 0 && (
            <section className="case-section">
              <p className="eyebrow"><I18nText fr="RÉSULTATS RAPPORTÉS" en="REPORTED RESULTS" /></p>
              <div className="case-metrics">
                {project.metrics.map((metric, index) => (
                  <div className="case-metric" key={metric.label}>
                    <b><I18nText fr={metric.value} en={english.metrics[index].value} /></b><span><I18nText fr={metric.label} en={english.metrics[index].label} /></span><small><I18nText fr={metric.note} en={english.metrics[index].note} /></small>
                  </div>
                ))}
              </div>
            </section>
          )}
          <section className="case-section">
            <p className="eyebrow"><I18nText fr="LIVRABLES & APPRENTISSAGES" en="OUTCOMES & LEARNINGS" /></p>
            <ul className="outcome-list">
              {project.outcomes.map((outcome, index) => <li key={outcome}><I18nText fr={outcome} en={english.outcomes[index]} /></li>)}
            </ul>
          </section>
        </div>
      </div>

      <div className="case-next">
        <span className="micro-label"><I18nText fr="CONTINUER" en="KEEP EXPLORING" /></span>
        <Link href="/projects"><I18nText fr="Explorer les autres projets" en="Explore more projects" /> <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
