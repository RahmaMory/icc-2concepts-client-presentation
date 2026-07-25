import { FileText, Globe2, Layers3 } from "lucide-react";
import ExperienceCard from "../components/ExperienceCard";
import LogoMarquee from "../components/LogoMarquee";
import { client } from "../data/client";

export default function HomePage() {
  return (
    <div className="page-shell home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow"><span />{client.eyebrow}</div>
          <p className="client-label">Prepared for {client.clientName}</p>
          <h1>{client.headline}</h1>
          <p className="hero-intro">{client.intro}</p>
        </div>

        <div className="hero-proof">
          <div><strong>Custom</strong><span>Prepared for your business</span></div>
          <div><strong>Live</strong><span>Interactive website preview</span></div>
          <div><strong>Clear</strong><span>Price and delivery included</span></div>
        </div>
      </section>

      <section className="experience-grid" aria-label="Client experience options">
        <ExperienceCard
          index="01"
          icon={FileText}
          meta={`${client.proposal.price} · ${client.proposal.delivery}`}
          title={client.proposal.title}
          description={client.proposal.description}
          to="/view/proposal"
        >
          <div className="scope-chips">
            {client.proposal.scope.map((item) => <span key={item}>{item}</span>)}
          </div>
        </ExperienceCard>

        <ExperienceCard
          index="02"
          icon={Globe2}
          meta="Interactive live preview"
          title={client.mainDemo.title}
          description={client.mainDemo.description}
          to="/view/demo"
        >
          <div className="mini-preview">
            <img src={client.mainDemo.image} alt="Website preview" />
          </div>
        </ExperienceCard>

        <ExperienceCard
  index="03"
  icon={Layers3}
  meta={`${client.related.length} selected experiences`}
  title="Related Digital Experiences"
  description="Enter a separate React page to explore relevant work selected for this business category."
  to="/related"
  topContent={
    <div className="home-related-marquee-stack">
      <LogoMarquee
        compact
        direction="left"
        label="Portfolio brands moving left"
      />

      <LogoMarquee
        compact
        direction="right"
        label="Portfolio brands moving right"
      />
    </div>
  }
/>
      </section>
    </div>
  );
}
