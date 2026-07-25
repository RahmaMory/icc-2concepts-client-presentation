import { Link } from "react-router-dom";
import { client } from "../data/client";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    `Hello ICC, I reviewed the presentation for ${client.clientName} and I would like to discuss the project with your team.`
  );

  const whatsappUrl = `${client.social.whatsapp}?text=${whatsappMessage}`;

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a
          href={client.companyWebsite}
          target="_blank"
          rel="noreferrer"
          className="footer-brand"
        >
          <img src="/assets/brand/icc-logo.png" alt="ICC" />

          <div>
            <strong>Infinity Code Collaboration Studio</strong>
            <span>You Imagine. We Build.</span>
          </div>
        </a>

        <div className="social-links" aria-label="ICC social media">
          <a
            href={client.social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <SocialIcon name="instagram" />
          </a>

          <a
            href={client.social.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <SocialIcon name="facebook" />
          </a>

          <a
            href={client.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <SocialIcon name="linkedin" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Discuss ${client.clientName} project on WhatsApp`}
          >
            <SocialIcon name="whatsapp" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} ICC. All rights reserved.
        </span>

        <div>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}