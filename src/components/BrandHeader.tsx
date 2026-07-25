import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { client } from "../data/client";

export default function BrandHeader() {
  return (
    <header className="brand-header">
      <Link to="/" className="brand-lockup" aria-label="Back to home">
        <img src="/assets/brand/icc-logo.png" alt="ICC logo" />
        <span>
          <strong>ICC</strong>
          <small>Client Experience</small>
        </span>
      </Link>

      <a
        className="company-link"
        href={client.companyWebsite}
        target="_blank"
        rel="noreferrer"
      >
        Visit ICC <ExternalLink size={15} />
      </a>
    </header>
  );
}
