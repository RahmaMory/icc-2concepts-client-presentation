import { ArrowLeft, ExternalLink, LoaderCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../data/client";
import type { LinkTarget } from "../types";

type ViewerMode = "proposal" | "demo" | "project";

export default function ViewerPage({ mode }: { mode: ViewerMode }) {
  const { projectId } = useParams();
  const [loaded, setLoaded] = useState(false);

  const target = useMemo<LinkTarget | undefined>(() => {
    if (mode === "proposal") return client.proposal;
    if (mode === "demo") return client.mainDemo;
    return client.related.find((project) => project.id === projectId);
  }, [mode, projectId]);

  const backTo = mode === "project" ? "/related" : "/";

  if (!target) {
    return (
      <div className="page-shell inner-page empty-state">
        <h1>Preview not found.</h1>
        <Link to="/related">Return to related experiences</Link>
      </div>
    );
  }

  return (
    <div className="viewer-page">
      <div className="viewer-toolbar">
        <Link to={backTo} className="back-link"><ArrowLeft size={18} /> Back</Link>
        <div className="viewer-title">
          <small>ICC VIEWER</small>
          <strong>{target.title}</strong>
        </div>
        <a href={target.url} target="_blank" rel="noreferrer" className="external-button">
          Open directly <ExternalLink size={17} />
        </a>
      </div>

      <div className="viewer-frame-wrap">
        {!loaded && (
          <div className="viewer-loader">
            <LoaderCircle className="spin" />
            <span>Loading preview…</span>
          </div>
        )}
        <iframe
          title={target.title}
          src={target.url}
          className={loaded ? "is-loaded" : ""}
          onLoad={() => setLoaded(true)}
          allow="fullscreen; clipboard-read; clipboard-write"
        />
      </div>

      <p className="iframe-note">
        Some external websites block embedded previews. Use “Open directly” only when the preview does not appear.
      </p>
    </div>
  );
}
