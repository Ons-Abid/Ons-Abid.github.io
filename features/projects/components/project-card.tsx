"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/features/projects/data/projects";
import { ProjectArt } from "@/features/projects/components/project-art";
import { localizeProject } from "@/features/projects/data/project-english";
import { usePreferences } from "@/features/preferences/preferences-provider";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { locale } = usePreferences();
  const content = localizeProject(project, locale);

  return (
    <article className="project-card">
      <Link className="project-card-link" href={`/projects/${project.slug}`} aria-label={locale === "fr" ? `Lire l’étude de cas : ${content.title}` : `Read case study: ${content.title}`}>
        <div className="project-card-art">
          <ProjectArt variant={project.visual} />
          <span className="project-index">{String(index).padStart(2, "0")}</span>
        </div>
        <div className="project-card-meta">
          <span>{content.category}</span><span>{content.period}</span>
        </div>
        <div className="project-card-title">
          <div><h3>{content.shortTitle}</h3><p>{content.summary}</p></div>
          <span className="round-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span>
        </div>
      </Link>
      <div className="tag-row">{project.tags.slice(0, 4).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
    </article>
  );
}
