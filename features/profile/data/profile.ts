export type LocalizedText = {
  fr: string;
  en: string;
};

export type Experience = {
  id: string;
  period: LocalizedText;
  role: LocalizedText;
  organization: LocalizedText;
  description: LocalizedText;
};

export const experience: Experience[] = [
  {
    id: "i-way-2026",
    period: { fr: "Fév. — juil. 2026", en: "Feb — Jul 2026" },
    role: {
      fr: "Projet de fin d’études — Ingénieure Full Stack & IA",
      en: "Final-year project — Full Stack & AI Engineer",
    },
    organization: { fr: "I-Way", en: "I-Way" },
    description: {
      fr: "Jumeau numérique de bâtiment : ingestion HTTP/MQTT, PostgreSQL/TimescaleDB, détection et regroupement d’incidents, prévision LightGBM, assistant RAG avec LangGraph et interface Next.js/React.",
      en: "Building digital twin: HTTP/MQTT ingestion, PostgreSQL/TimescaleDB, incident detection and grouping, LightGBM forecasting, a LangGraph RAG assistant and a Next.js/React interface.",
    },
  },
  {
    id: "prestacode-2025",
    period: { fr: "Juil. — août 2025", en: "Jul — Aug 2025" },
    role: { fr: "Stagiaire Full Stack", en: "Full Stack Intern" },
    organization: { fr: "Prestacode", en: "Prestacode" },
    description: {
      fr: "Plateforme de statistiques scolaires avec Angular, Spring Boot et SQL Server ; requêtes dynamiques JPA Criteria API, tableaux de bord Chart.js et rapports PDF.",
      en: "School statistics platform using Angular, Spring Boot and SQL Server, with dynamic JPA Criteria API queries, Chart.js dashboards and PDF reports.",
    },
  },
  {
    id: "iit-research-2025",
    period: { fr: "Janv. — juin 2025", en: "Jan — Jun 2025" },
    role: {
      fr: "Recherche appliquée — Edge AI",
      en: "Applied research — Edge AI",
    },
    organization: {
      fr: "IIT · équipe de recherche avec Toulouse",
      en: "IIT · research team collaborating with Toulouse",
    },
    description: {
      fr: "Modèle multi-tâche de diagnostic IoT industriel avec PyTorch, TCN causal, self-attention et FusionGate, évalué sur des séquences synthétiques. Article soumis.",
      en: "Multi-task model for industrial IoT diagnostics using PyTorch, causal TCN, self-attention and FusionGate, evaluated on synthetic sequences. Paper submitted.",
    },
  },
  {
    id: "engineering-consulting-2024",
    period: { fr: "Juil. — août 2024", en: "Jul — Aug 2024" },
    role: {
      fr: "Stagiaire développement .NET",
      en: ".NET Development Intern",
    },
    organization: {
      fr: "Engineering & Consulting",
      en: "Engineering & Consulting",
    },
    description: {
      fr: "Application de gestion des tâches et interventions, rôles et authentification avec ASP.NET MVC et SQL Server.",
      en: "Task and intervention management application with roles and authentication, built using ASP.NET MVC and SQL Server.",
    },
  },
  {
    id: "steg-2023",
    period: { fr: "Fév. — mai 2023", en: "Feb — May 2023" },
    role: { fr: "Stage ingénieur", en: "Engineering Intern" },
    organization: { fr: "STEG", en: "STEG" },
    description: {
      fr: "Étude et simulation MATLAB/Simulink d’un générateur synchrone à aimants permanents pour une éolienne.",
      en: "Study and MATLAB/Simulink simulation of a permanent-magnet synchronous generator for a wind turbine.",
    },
  },
];

export const education = [
  {
    period: { fr: "2023 — 2026", en: "2023 — 2026" },
    degree: {
      fr: "Diplôme d’ingénieur en Informatique — Génie logiciel & Business Intelligence",
      en: "Engineering Degree in Computer Science — Software Engineering & Business Intelligence",
    },
    institution: "Institut International de Technologie (IIT), Sfax",
  },
  {
    period: { fr: "2023", en: "2023" },
    degree: {
      fr: "Licence en Électronique, Électrotechnique et Automatique",
      en: "Bachelor’s Degree in Electronics, Electrical Engineering and Automation",
    },
    institution: "ISGIS, Sfax",
  },
];

export const skillGroups = [
  {
    title: { fr: "IA & données", en: "AI & Data" },
    items:
      "Python, PyTorch, Transformers, YOLO, TCN, LightGBM, RAG, LangChain, LangGraph, FAISS, Langfuse",
  },
  {
    title: { fr: "Backend & systèmes", en: "Backend & Systems" },
    items:
      "FastAPI, Spring Boot, ASP.NET MVC / .NET, REST, JPA Criteria API, MQTT, Docker",
  },
  {
    title: { fr: "Frontend", en: "Frontend" },
    items: "Angular, React, Next.js, TypeScript, JavaScript, Chart.js, Three.js",
  },
  {
    title: { fr: "Données & outils", en: "Data & Tools" },
    items:
      "PostgreSQL, TimescaleDB, SQL Server, MySQL, Firebase, Git, CI/CD",
  },
];
