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
      en: "Final-year project — Full-Stack & AI Engineer",
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
    role: { fr: "Stagiaire Full Stack", en: "Full-Stack Intern" },
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
      fr: "Contribution technique — recherche appliquée en Edge AI",
      en: "Technical contribution — applied Edge AI research",
    },
    organization: {
      fr: "IIT · collaboration avec une équipe de recherche à Toulouse, France",
      en: "IIT · collaboration with a research team in Toulouse, France",
    },
    description: {
      fr: "Contribution technique à un projet de recherche académique sur l’Edge AI et l’analyse d’anomalies dans des données IoT multivariées, menée sous supervision universitaire et en collaboration avec une équipe de recherche à Toulouse, en France. Le projet portait sur la détection d’anomalies, la classification de leur type et l’analyse des causes racines (RCA) dans des séries temporelles IoT multivariées. Le périmètre technique incluait une architecture Edge Computing en temps réel fondée sur MQTT, FastAPI, Firebase et Angular.",
      en: "Technical contribution to an academic research project on Edge AI and anomaly analysis in multivariate IoT data, conducted under academic supervision and in collaboration with a research team in Toulouse, France. The project focused on anomaly detection, anomaly-type classification, and root cause analysis (RCA) in multivariate IoT time series. Its technical scope included a real-time Edge Computing architecture based on MQTT, FastAPI, Firebase, and Angular.",
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
      fr: "Diplôme d’Ingénieur en Génie Logiciel et Informatique Décisionnelle",
      en: "Engineering Degree in Software Engineering and Information Systems",
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
