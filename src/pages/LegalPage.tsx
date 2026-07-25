import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const isPrivacy = type === "privacy";

  return (
    <div className="page-shell inner-page legal-page">
      <Link to="/" className="back-link"><ArrowLeft size={18} /> Back to overview</Link>
      <p className="section-kicker">ICC CLIENT EXPERIENCE</p>
<h1>
  {isPrivacy ? "Privacy & Data Protection" : "Terms of Presentation"}
</h1>      <div className="legal-copy">
      {isPrivacy ? (
  <>
    <p className="legal-intro">
      ICC collects, uses, protects, and manages information shared by
      clients, visitors, partners, and project stakeholders only as
      reasonably needed for communication and service delivery.
    </p>

    <h2>Information We May Collect</h2>

    <p>
      We may collect basic contact information, project requirements,
      business goals, communication records, approvals, proposal details,
      timelines, invoices, and technical information required to prepare
      or deliver a service.
    </p>

    <h2>How We Use Information</h2>

    <p>
      Information may be used to understand the client&apos;s needs,
      prepare proposals, quotations, timelines, and project scopes,
      communicate about progress and approvals, provide support, and
      improve service quality.
    </p>

    <h2>Data Protection Commitment</h2>

    <p>
      ICC handles client information, project files, and shared
      credentials with professional care. Access is limited to people
      involved in delivering or supporting the agreed service, and
      reasonable steps are taken to reduce unauthorized access, misuse,
      loss, alteration, or disclosure.
    </p>

    <p>
      ICC does not treat project data as a public asset and does not
      intentionally share it with unrelated parties unless required for
      service delivery, approved by the client, or required by an official
      obligation.
    </p>

    <h2>Project Records</h2>

    <p>
      ICC may retain reasonable project records for support, accounting,
      documentation, operational, and quality purposes.
    </p>

    <h2>Privacy Inquiries</h2>

    <p>
      Questions about privacy or project information may be sent to{" "}
      <a href="mailto:info@iocodecompany.com">
        info@iocodecompany.com
      </a>.
    </p>
  </>
)  : (
          <>
            <p>The concepts, prices, timelines, and scope shown here are subject to the final signed agreement.</p>
            <p>Third-party subscriptions, hosting, domains, paid integrations, content production, and photography are excluded unless explicitly listed.</p>
            <p>Embedded preview availability depends on the security settings of each external website.</p>
          </>
        )}
      </div>
    </div>
  );
}
