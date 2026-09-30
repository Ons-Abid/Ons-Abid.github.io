import type { ProjectVisual } from "@/features/projects/data/projects";
import Image from "next/image";

export function ProjectArt({ variant }: { variant: ProjectVisual }) {
  if (variant === "building") {
    return (
      <div className="project-art art-building" aria-hidden="true">
        <Image
          className="digital-twin-image"
          src="/digital-twin-building.webp"
          alt=""
          fill
          sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </div>
    );
  }

  if (variant === "edge") {
    return (
      <div className="project-art art-edge" aria-hidden="true">
        <div className="art-topline"><span>EDGE PIPELINE / 02</span><span>SEQUENCE MODEL</span></div>
        <div className="edge-flow">
          <div className="edge-source"><b>MQTT</b><span>sensor stream</span></div>
          <div className="edge-line"><i /><i /><i /></div>
          <div className="edge-model"><span>TCN</span><span>ATTN</span><span>FUSION</span></div>
          <div className="edge-line"><i /><i /><i /></div>
          <div className="edge-output"><b>95%</b><span>F1 DETECTION</span></div>
        </div>
        <div className="edge-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="art-bottomline"><span>INFERENCE FLOW</span><span>3 STAGES <b>↗</b></span></div>
      </div>
    );
  }

  if (variant === "plate") {
    return (
      <div className="project-art art-plate" aria-hidden="true">
        <div className="art-topline"><span>VISION SYSTEM / 03</span><span>FRAME 0018</span></div>
        <div className="camera-frame">
          <div className="road-horizon" />
          <div className="car-shape"><div className="car-window" /><div className="plate-box"><span>TN</span><b>*** 2487</b></div></div>
          <div className="scan-corner corner-tl" /><div className="scan-corner corner-tr" /><div className="scan-corner corner-bl" /><div className="scan-corner corner-br" />
          <div className="scan-label">PLATE DETECTED · 89%</div>
        </div>
        <div className="art-bottomline"><span>YOLOv11-L-SEG</span><span>22 FPS <b>↗</b></span></div>
      </div>
    );
  }

  return (
    <div className="project-art art-school" aria-hidden="true">
      <div className="art-topline"><span>EDUCATION DATA / 04</span><span>OVERVIEW</span></div>
      <div className="school-dashboard">
        <div className="dashboard-side"><span className="dash-logo">P.</span><i /><i /><i /><i /></div>
        <div className="dashboard-main">
          <div className="dash-title"><b>Statistiques</b><span>Année 2025—26</span></div>
          <div className="dash-metrics"><i /><i /><i /></div>
          <div className="dash-chart"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
        </div>
      </div>
      <div className="art-bottomline"><span>SPRING BOOT · ANGULAR</span><span>REPORTS <b>↗</b></span></div>
    </div>
  );
}
