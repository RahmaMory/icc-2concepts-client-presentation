#!/usr/bin/env python3
from __future__ import annotations

import re
import shutil
from pathlib import Path

ROOT = Path.cwd()
SRC = ROOT / "src"

if not (SRC / "pages" / "HomePage.tsx").exists() or not (SRC / "styles" / "global.css").exists():
    raise SystemExit(
        "Run this script from the project root (the folder containing package.json and src/)."
    )


def backup(path: Path) -> None:
    backup_path = path.with_name(path.name + ".before-dual-marquee")
    if path.exists() and not backup_path.exists():
        shutil.copy2(path, backup_path)


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    backup(path)
    path.write_text(content, encoding="utf-8")


brand_showcase = '''export type ShowcaseBrand = {
  id: string;
  name: string;
  category: string;
  mark: string;
  /** Add a real logo later, e.g. /assets/brands/2-concepts.svg */
  logo?: string;
};

// Temporary portfolio marks used by both moving strips.
// Add `logo` paths when the approved logo files arrive.
export const showcaseBrands: ShowcaseBrand[] = [
  { id: "2-concepts", name: "2 Concepts", category: "Architecture & Engineering", mark: "2C" },
  { id: "modubuild", name: "ModuBuild", category: "Construction & Interiors", mark: "MB" },
  { id: "cairo-medical", name: "Cairo Medical", category: "Healthcare Experience", mark: "CM" },
  { id: "masar", name: "MASAR", category: "Legal Technology", mark: "M" },
  { id: "ica", name: "IO Code Academy", category: "Education Platform", mark: "ICA" },
  { id: "jaguar-gym", name: "Jaguar GYM", category: "Fitness Management", mark: "JG" },
  { id: "icc", name: "IO Code Company", category: "Digital Solutions", mark: "ICC" },
];
'''

logo_marquee = '''import { showcaseBrands } from "../data/brandShowcase";

type LogoMarqueeProps = {
  compact?: boolean;
  direction?: "left" | "right";
  label?: string;
};

export default function LogoMarquee({
  compact = false,
  direction = "left",
  label = "Selected ICC portfolio brands",
}: LogoMarqueeProps) {
  const groups = [0, 1];

  return (
    <div
      className={`logo-marquee ${compact ? "is-compact" : ""} direction-${direction}`}
      aria-label={label}
    >
      <div className="logo-marquee-track">
        {groups.map((group) => (
          <div className="logo-marquee-group" key={group} aria-hidden={group === 1}>
            {showcaseBrands.map((brand) => (
              <div className="marquee-logo" key={`${group}-${brand.id}`}>
                <span className={`marquee-mark brand-${brand.id}`}>
                  {brand.logo ? <img src={brand.logo} alt="" /> : brand.mark}
                </span>
                <span className="marquee-copy">
                  <strong>{brand.name}</strong>
                  <small>{brand.category}</small>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
'''

experience_card = '''import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExperienceCard({
  index,
  title,
  description,
  meta,
  to,
  icon: Icon,
  children,
  topContent,
  bottomContent,
}: {
  index: string;
  title: string;
  description: string;
  meta: string;
  to: string;
  icon: LucideIcon;
  children?: ReactNode;
  topContent?: ReactNode;
  bottomContent?: ReactNode;
}) {
  const classNames = [
    "experience-card",
    topContent ? "has-top-content" : "",
    bottomContent ? "has-bottom-content" : "",
  ].filter(Boolean).join(" ");

  return (
    <Link to={to} className={classNames}>
      <div className="card-topline">
        <span>{index}</span>
        <Icon size={22} />
      </div>

      {topContent ? <div className="card-top-content">{topContent}</div> : null}

      <div className="card-body">
        <p className="card-meta">{meta}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>

      {bottomContent ? <div className="card-bottom-content">{bottomContent}</div> : null}

      <div className="card-action">
        <span>Open experience</span>
        <ArrowUpRight size={20} />
      </div>
    </Link>
  );
}
'''

related_page = '''import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import LogoMarquee from "../components/LogoMarquee";
import { client } from "../data/client";

export default function RelatedPage() {
  return (
    <div className="page-shell inner-page related-page">
      <Link to="/" className="back-link"><ArrowLeft size={18} /> Back to overview</Link>

      <section className="inner-hero">
        <p className="section-kicker">RELATED TO {client.industry.toUpperCase()}</p>
        <h1>Selected digital experiences worth exploring.</h1>
        <p>
          These examples are kept on their own page so the main proposal stays focused and easy to scan.
        </p>
      </section>

      <div className="related-marquee related-marquee-top">
        <LogoMarquee direction="left" label="Selected ICC portfolio brands" />
      </div>

      <section className="project-grid">
        {client.related.map((project, index) => (
          <Link to={`/view/project/${project.id}`} className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={`${project.title} preview`} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="project-content">
              <p>{project.category}</p>
              <h2>{project.title}</h2>
              <span className="project-description">{project.description}</span>
              <div className="project-action">View inside presentation <ArrowUpRight size={18} /></div>
            </div>
          </Link>
        ))}
      </section>

      <div className="related-marquee related-marquee-bottom">
        <LogoMarquee direction="right" label="Selected ICC portfolio brands moving in reverse" />
      </div>
    </div>
  );
}
'''

write(SRC / "data" / "brandShowcase.ts", brand_showcase)
write(SRC / "components" / "LogoMarquee.tsx", logo_marquee)
write(SRC / "components" / "ExperienceCard.tsx", experience_card)
write(SRC / "pages" / "RelatedPage.tsx", related_page)

# Update only card 03, leaving the user's hero/client edits untouched.
home_path = SRC / "pages" / "HomePage.tsx"
backup(home_path)
home = home_path.read_text(encoding="utf-8")
new_card = '''        <ExperienceCard
          index="03"
          icon={Layers3}
          meta={`${client.related.length} selected experiences`}
          title="Related Digital Experiences"
          description="Enter a separate React page to explore relevant work selected for this business category."
          to="/related"
          topContent={<LogoMarquee compact direction="left" label="Portfolio brands moving left" />}
          bottomContent={<LogoMarquee compact direction="right" label="Portfolio brands moving right" />}
        />'''

if "topContent={<LogoMarquee compact" not in home:
    pattern = re.compile(
        r'\s{8}<ExperienceCard\s+index="03"[\s\S]*?(?:</ExperienceCard>|/>)',
        re.MULTILINE,
    )
    updated, count = pattern.subn("\n" + new_card, home, count=1)
    if count != 1:
        raise SystemExit("Could not find the Related ExperienceCard in HomePage.tsx.")
    home_path.write_text(updated, encoding="utf-8")

css_path = SRC / "styles" / "global.css"
backup(css_path)
css = css_path.read_text(encoding="utf-8")

# Remove the old marquee CSS region while preserving everything else, including custom blue backgrounds.
old_region = re.compile(
    r'\.logo-marquee\s*\{[\s\S]*?(?=\n\.inner-page\s*\{)',
    re.MULTILINE,
)
css, count = old_region.subn("", css, count=1)
if count != 1 and "ICC DUAL MARQUEE UPDATE START" not in css:
    raise SystemExit("Could not locate the original marquee CSS block.")

# Remove a previous patch before adding the current one.
css = re.sub(
    r'\n?/\* === ICC DUAL MARQUEE UPDATE START === \*/[\s\S]*?/\* === ICC DUAL MARQUEE UPDATE END === \*/\n?',
    "\n",
    css,
)

css_patch = r'''

/* === ICC DUAL MARQUEE UPDATE START === */
.card-top-content,
.card-bottom-content { position: relative; z-index: 1; margin-inline: -24px; }
.card-top-content { margin-top: 24px; }
.card-bottom-content { margin-top: auto; margin-bottom: 22px; }
.experience-card.has-top-content .card-body { margin-top: 30px; }
.experience-card.has-bottom-content .card-action { margin-top: 0; }
.card-top-content .logo-marquee { transform: translateX(-7px); }
.card-bottom-content .logo-marquee { transform: translateX(7px); }

.logo-marquee {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 34px 0 52px;
  border-block: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.018);
  mask-image: linear-gradient(90deg, transparent, black 5%, black 95%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, black 5%, black 95%, transparent);
}
.logo-marquee::before,
.logo-marquee::after {
  content: "";
  position: absolute;
  inset-block: 0;
  z-index: 2;
  width: 46px;
  pointer-events: none;
}
.logo-marquee::before { left: 0; background: linear-gradient(90deg, rgba(5,7,13,.78), transparent); }
.logo-marquee::after { right: 0; background: linear-gradient(-90deg, rgba(5,7,13,.78), transparent); }
.logo-marquee.is-compact {
  margin: 0;
  border: 0;
  background: transparent;
  mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
}
.logo-marquee.is-compact::before,
.logo-marquee.is-compact::after { display: none; }
.logo-marquee-track {
  display: flex;
  width: max-content;
  gap: 12px;
  padding: 17px 0;
  will-change: transform;
  animation: marquee 30s linear infinite;
}
.logo-marquee.direction-right .logo-marquee-track { animation-direction: reverse; }
.logo-marquee.is-compact .logo-marquee-track { padding: 0; animation-duration: 22s; }
.logo-marquee-group { display: flex; flex-shrink: 0; gap: 12px; }
.marquee-logo {
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 215px;
  padding: 10px 13px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,.085);
  background: linear-gradient(135deg, rgba(255,255,255,.052), rgba(255,255,255,.022));
  box-shadow: inset 0 1px 0 rgba(255,255,255,.025);
}
.marquee-logo .marquee-mark {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: 38px;
  height: 38px;
  overflow: hidden;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(145deg, rgba(var(--accent-rgb), .27), rgba(var(--accent-rgb), .1));
  border: 1px solid rgba(var(--accent-rgb), .38);
  font: 800 10px/1 "Manrope";
  letter-spacing: -.02em;
}
.marquee-mark img { width: 100%; height: 100%; padding: 5px; object-fit: contain; }
.marquee-logo .marquee-copy { display: flex; min-width: 0; width: auto; height: auto; flex-direction: column; place-items: initial; gap: 4px; border: 0; border-radius: 0; color: inherit; background: none; font: inherit; }
.marquee-copy strong { overflow: hidden; color: #eef3ff; font: 700 12px/1.15 "Manrope"; white-space: nowrap; text-overflow: ellipsis; }
.marquee-copy small { overflow: hidden; color: #858b9a; font-size: 9px; font-weight: 600; letter-spacing: .035em; text-transform: uppercase; white-space: nowrap; text-overflow: ellipsis; }
.logo-marquee.is-compact .marquee-logo { min-width: 160px; padding: 8px 10px; border-radius: 12px; }
.logo-marquee.is-compact .marquee-mark { width: 31px; height: 31px; border-radius: 8px; font-size: 8px; }
.logo-marquee.is-compact .marquee-copy { gap: 2px; }
.logo-marquee.is-compact .marquee-copy strong { font-size: 10px; }
.logo-marquee.is-compact .marquee-copy small { display: none; }
.related-marquee-top { margin-top: 6px; }
.related-marquee-bottom { margin-top: 54px; }
.related-marquee-bottom .logo-marquee { margin-bottom: 0; }

@media (max-width: 650px) {
  .card-top-content,
  .card-bottom-content { margin-inline: -21px; }
  .logo-marquee-track { animation-duration: 34s; }
  .logo-marquee.is-compact .logo-marquee-track { animation-duration: 25s; }
  .marquee-logo { min-width: 190px; }
  .related-marquee-bottom { margin-top: 38px; }
}
/* === ICC DUAL MARQUEE UPDATE END === */
'''

css_path.write_text(css.rstrip() + css_patch + "\n", encoding="utf-8")

print("Dual marquee update applied successfully.")
print("Your original client data, blue colors, hero text, links, and privacy edits were not changed.")
print("Run: npm run build")
