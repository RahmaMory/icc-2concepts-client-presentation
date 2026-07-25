import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import LogoMarquee from "../components/LogoMarquee";
import { client } from "../data/client";

export default function RelatedPage() {
  return (
    <div className="page-shell inner-page related-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={16} />
        <span>Back to overview</span>
      </Link>

      <section className="inner-hero">
        <p className="section-kicker">
          Related to {client.industry}
        </p>

        <h1>Selected digital experiences worth exploring.</h1>

        <p>
          These examples are kept on their own page so the main proposal
          stays focused and easy to scan.
        </p>
      </section>

      {/* الشريط الأول فقط */}
      <div className="related-marquee-top">
        <LogoMarquee
          direction="left"
          label="Portfolio brands moving left"
        />
      </div>

      <section
        className="project-grid"
        aria-label="Related digital experiences"
      >
        {client.related.map((project, index) => (
          <Link
            key={project.id}
            to={`/view/project/${project.id}`}
            className="project-card"
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={`${project.title} website preview`}
              />

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="project-content">
              <p>{project.category}</p>

              <h2>{project.title}</h2>

              <span className="project-description">
                {project.description}
              </span>

              <div className="project-action">
                <span>View inside presentation</span>
                <ArrowUpRight size={18} />
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* الشريط الثاني فقط */}
      <div className="related-marquee-bottom">
        <LogoMarquee
          direction="right"
          label="Portfolio brands moving right"
        />
      </div>
    </div>
  );
}