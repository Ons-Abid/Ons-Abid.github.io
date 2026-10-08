import type { Locale } from "@/features/preferences/preferences-provider";
import type {
  Project,
  ProjectContent,
  ProjectSlug,
} from "@/features/projects/data/projects";

const projectEnglish: Record<ProjectSlug, ProjectContent> = {
  "digital-twin": {
    title: "Digital Twin for an Instrumented Building",
    shortTitle: "Digital Twin & Energy",
    category: "AI · Data · Full Stack",
    period: "Feb — Jul 2026",
    organization: "I-Way · Final-year project",
    summary: "A monitoring platform connecting telemetry, incident detection, energy forecasting and document search.",
    context: "Final-year project at I-Way focused on an instrumented building and its operational data streams.",
    challenge: "Bring HTTP and MQTT streams together, make events actionable, track energy consumption and provide access to technical documentation from one platform.",
    approach: [
      "Designed a FastAPI service for HTTP/MQTT ingestion, using Docker and PostgreSQL/TimescaleDB to store time-series data and equipment states.",
      "Built a data-quality and event-grouping pipeline, followed by a LightGBM model for energy forecasting.",
      "Added a LangGraph RAG assistant with evaluation instrumentation in Langfuse, and a monitoring interface built with Next.js and React.",
    ],
    outcomes: [
      "Grouped 647 events into 23 actionable incidents in the pipeline.",
      "Evaluated energy forecasts on 470,857 readings; MASE of 0.842.",
      "Achieved 94% HitRate@1 for document retrieval in the RAG system.",
    ],
    metrics: [
      { value: "647 → 23", label: "Events", note: "grouped into incidents" },
      { value: "470,857", label: "Readings", note: "energy time series" },
      { value: "0.842", label: "MASE", note: "LightGBM forecast" },
      { value: "94%", label: "HitRate@1", note: "RAG retrieval" },
    ],
  },
  "edge-ai": {
    title: "Technical Contribution to an Edge AI Research Project",
    shortTitle: "Edge AI · IoT Anomaly Analysis",
    category: "Research · AI · IoT",
    period: "Jan — Jun 2025",
    organization: "IIT · collaboration with a research team in Toulouse, France",
    summary: "Technical contribution to an academic project on anomaly analysis in multivariate IoT time series.",
    context: "Academic project conducted under supervision at IIT, in collaboration with a research team in Toulouse, France.",
    challenge: "Explore anomaly detection, anomaly-type classification, and root cause analysis (RCA) in multivariate IoT time series.",
    approach: [
      "Technical contribution to exploring Edge AI approaches for anomaly analysis in multivariate IoT data.",
      "Work conducted under academic supervision with a research team in Toulouse, France.",
      "Exploration of a real-time Edge Computing architecture based on MQTT, FastAPI, Firebase, and Angular.",
    ],
    outcomes: [
      "The project scope covered anomaly detection, anomaly-type classification, and root cause analysis.",
      "The technical scope included a real-time Edge Computing architecture based on MQTT, FastAPI, Firebase, and Angular.",
    ],
    metrics: [],
  },
  plaqueguard: {
    title: "PlaqueGuard — Tunisian Licence Plate Recognition",
    shortTitle: "PlaqueGuard · Computer Vision",
    category: "Computer Vision · AI",
    period: "Academic project",
    organization: "IIT",
    summary: "A computer-vision pipeline to locate and read Tunisian licence plates, alongside a separate document-retrieval experiment.",
    context: "Academic project focused on Tunisian plate recognition. The results below reflect the model evaluation reported in the CV.",
    challenge: "Locate plates in an image and extract their text under real-world capture conditions.",
    approach: [
      "Used YOLOv11-L-seg to locate and segment licence plates.",
      "Explored LPRNet for sequence recognition and an RTL implementation as part of the project.",
      "Built a separate document prototype with FAISS and RAG, evaluated on its own question set.",
    ],
    outcomes: [
      "89% mAP@0.5 for plate detection and segmentation.",
      "84.5% F1 and measured throughput of 22 frames per second.",
      "88% HitRate for the related document-retrieval experiment.",
    ],
    metrics: [
      { value: "89%", label: "mAP@0.5", note: "plate detection" },
      { value: "84.5%", label: "F1", note: "recognition" },
      { value: "22 FPS", label: "Measured throughput", note: "inference" },
      { value: "88%", label: "HitRate", note: "document RAG" },
    ],
  },
  "school-dashboard": {
    title: "School Statistics Platform",
    shortTitle: "School Dashboards",
    category: "Full Stack",
    period: "Jul — Aug 2025",
    organization: "Prestacode · Internship",
    summary: "A business application for exploring school statistics and generating reports from education data.",
    context: "Full-stack internship at Prestacode during summer 2025.",
    challenge: "Organize school indicators to make them easier to review and export.",
    approach: [
      "Built Angular screens connected to Spring Boot services.",
      "Created dynamic queries with JPA Criteria API and SQL Server.",
      "Presented indicators in Chart.js dashboards and generated PDF reports.",
    ],
    outcomes: [
      "Delivered a platform for reviewing school statistics.",
      "Integrated dashboards and report exports into the workflow.",
    ],
    metrics: [],
  },
};

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "fr") return project;
  return { ...project, ...projectEnglish[project.slug] };
}
