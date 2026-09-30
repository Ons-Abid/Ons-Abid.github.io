export type ProjectVisual = "building" | "edge" | "plate" | "school";
export type ProjectSlug = "digital-twin" | "edge-ai" | "plaqueguard" | "school-dashboard";

export type ProjectMetric = {
  value: string;
  label: string;
  note: string;
};

export type Project = {
  slug: ProjectSlug;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  period: string;
  organization: string;
  summary: string;
  visual: ProjectVisual;
  tags: string[];
  context: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  metrics: ProjectMetric[];
};

export type ProjectContent = Omit<
  Project,
  "slug" | "number" | "visual" | "tags"
>;

export const projects: Project[] = [
  {
    slug: "digital-twin",
    number: "01",
    title: "Jumeau numérique pour bâtiment instrumenté",
    shortTitle: "Jumeau numérique & énergie",
    category: "IA · Data · Full Stack",
    period: "Fév. — juil. 2026",
    organization: "I-Way · Projet de fin d’études",
    summary:
      "Une plateforme de supervision qui relie télémétrie, détection d’incidents, prévision énergétique et recherche documentaire.",
    visual: "building",
    tags: ["FastAPI", "MQTT", "TimescaleDB", "LightGBM", "LangGraph", "Next.js"],
    context:
      "Projet de fin d’études réalisé chez I-Way autour d’un bâtiment instrumenté et de ses flux de données opérationnels.",
    challenge:
      "Rassembler des flux HTTP et MQTT, rendre les événements exploitables, suivre la consommation énergétique et donner accès à la documentation technique depuis une même plateforme.",
    approach: [
      "Conception d’une API FastAPI pour l’ingestion HTTP/MQTT, avec Docker et stockage PostgreSQL/TimescaleDB pour les séries temporelles et les états des équipements.",
      "Mise en place d’un pipeline de qualité et de regroupement des événements, puis d’un modèle LightGBM pour la prévision énergétique.",
      "Ajout d’un assistant RAG avec LangGraph et instrumentation de l’évaluation avec Langfuse ; interface de supervision en Next.js et React.",
    ],
    outcomes: [
      "647 événements regroupés en 23 incidents exploitables dans le pipeline.",
      "Prévision énergétique évaluée sur 470 857 mesures ; MASE de 0,842.",
      "HitRate@1 de 94 % pour la récupération documentaire du système RAG.",
    ],
    metrics: [
      { value: "647 → 23", label: "Événements", note: "regroupés en incidents" },
      { value: "470 857", label: "Mesures", note: "séries énergétiques" },
      { value: "0,842", label: "MASE", note: "prévision LightGBM" },
      { value: "94 %", label: "HitRate@1", note: "récupération RAG" },
    ],
  },
  {
    slug: "edge-ai",
    number: "02",
    title: "Diagnostic multi-tâche pour l’IoT industriel",
    shortTitle: "CAT-MTL-TwoStep · Edge AI",
    category: "Recherche · IA · IoT",
    period: "Janv. — juin 2025",
    organization: "IIT · Équipe de recherche avec Toulouse",
    summary:
      "Un pipeline Edge AI pour détecter des anomalies, en caractériser le type et orienter l’analyse de leur cause racine.",
    visual: "edge",
    tags: ["PyTorch", "Causal TCN", "Self-Attention", "MQTT", "FastAPI", "Angular"],
    context:
      "Travail de recherche conduit à l’IIT avec une équipe de Toulouse. L’article associé a été soumis ; il n’est pas présenté ici comme publié.",
    challenge:
      "Concevoir une chaîne de diagnostic capable de traiter des séquences IoT et d’enchaîner détection, typage d’anomalie et analyse de cause racine.",
    approach: [
      "Développement de CAT-MTL-TwoStep, une architecture combinant TCN causal, mécanisme de self-attention et FusionGate.",
      "Préparation et évaluation sur un jeu de données IoT synthétique de 262 800 échantillons.",
      "Intégration d’un flux MQTT, d’une API FastAPI et d’une interface Angular pour explorer les résultats.",
    ],
    outcomes: [
      "F1 de 95,0 % pour la détection des anomalies.",
      "F1 de 95,7 % pour le typage des anomalies.",
      "Macro-F1 de 98,3 % pour la classification des causes racines.",
    ],
    metrics: [
      { value: "95,0 %", label: "F1 détection", note: "anomalies" },
      { value: "95,7 %", label: "F1 typage", note: "types d’anomalies" },
      { value: "98,3 %", label: "Macro-F1 RCA", note: "causes racines" },
      { value: "262 800", label: "Échantillons", note: "jeu IoT synthétique" },
    ],
  },
  {
    slug: "plaqueguard",
    number: "03",
    title: "PlaqueGuard — lecture de plaques tunisiennes",
    shortTitle: "PlaqueGuard · vision par ordinateur",
    category: "Computer Vision · IA",
    period: "Projet académique",
    organization: "IIT",
    summary:
      "Une chaîne de vision par ordinateur pour localiser et lire des plaques tunisiennes, avec une expérimentation complémentaire autour de la recherche documentaire.",
    visual: "plate",
    tags: ["YOLOv11-L-seg", "LPRNet", "PyTorch", "FAISS", "RAG"],
    context:
      "Projet académique orienté reconnaissance de plaques tunisiennes. Les résultats ci-dessous décrivent l’évaluation du modèle telle que rapportée dans le CV.",
    challenge:
      "Repérer des plaques dans une image puis extraire leur contenu dans des conditions réelles de prise de vue.",
    approach: [
      "Utilisation de YOLOv11-L-seg pour la localisation et la segmentation des plaques.",
      "Exploration de LPRNet pour la reconnaissance de séquences et d’une implémentation RTL dans le cadre du projet.",
      "Prototype documentaire distinct avec FAISS et RAG, évalué sur son propre jeu de questions.",
    ],
    outcomes: [
      "mAP@0.5 de 89 % pour la détection/segmentation des plaques.",
      "F1 de 84,5 % et traitement mesuré à 22 images par seconde.",
      "HitRate de 88 % pour l’expérimentation RAG documentaire associée au travail.",
    ],
    metrics: [
      { value: "89 %", label: "mAP@0.5", note: "détection plaques" },
      { value: "84,5 %", label: "F1", note: "reconnaissance" },
      { value: "22 FPS", label: "Débit mesuré", note: "inférence" },
      { value: "88 %", label: "HitRate", note: "RAG documentaire" },
    ],
  },
  {
    slug: "school-dashboard",
    number: "04",
    title: "Plateforme de statistiques scolaires",
    shortTitle: "Tableaux de bord scolaires",
    category: "Full Stack",
    period: "Juil. — août 2025",
    organization: "Prestacode · Stage",
    summary:
      "Une application métier pour consulter des statistiques scolaires et produire des rapports à partir des données.",
    visual: "school",
    tags: ["Angular", "Spring Boot", "SQL Server", "JPA", "Chart.js"],
    context:
      "Stage Full Stack réalisé chez Prestacode pendant l’été 2025.",
    challenge:
      "Structurer des indicateurs scolaires pour faciliter leur consultation et leur export.",
    approach: [
      "Développement d’écrans Angular connectés à des services Spring Boot.",
      "Construction de requêtes dynamiques avec JPA Criteria API et SQL Server.",
      "Mise en forme des indicateurs dans des tableaux de bord Chart.js et génération de rapports PDF.",
    ],
    outcomes: [
      "Une plateforme de consultation de statistiques scolaires.",
      "Des tableaux de bord et exports PDF intégrés au flux de travail.",
    ],
    metrics: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
