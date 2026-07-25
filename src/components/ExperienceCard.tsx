// import type { ReactNode } from "react";
// import type { LucideIcon } from "lucide-react";
// import { ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function ExperienceCard({
//   index,
//   title,
//   description,
//   meta,
//   to,
//   icon: Icon,
//   children,
//   topContent,
//   bottomContent,
// }: {
//   index: string;
//   title: string;
//   description: string;
//   meta: string;
//   to: string;
//   icon: LucideIcon;
//   children?: ReactNode;
//   topContent?: ReactNode;
//   bottomContent?: ReactNode;
// }) {
//   const classNames = [
//     "experience-card",
//     topContent ? "has-top-content" : "",
//     bottomContent ? "has-bottom-content" : "",
//   ]
//     .filter(Boolean)
//     .join(" ");

//   return (
//     <Link to={to} className={classNames}>
//       <div className="card-topline">
//         <span>{index}</span>
//         <Icon size={22} />
//       </div>

//       {topContent ? <div className="card-top-content">{topContent}</div> : null}

//       <div className="card-body">
//         <p className="card-meta">{meta}</p>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         {children}
//       </div>

//       {bottomContent ? <div className="card-bottom-content">{bottomContent}</div> : null}

//       <div className="card-action">
//         <span>Open experience</span>
//         <ArrowUpRight size={20} />
//       </div>
//     </Link>
//   );
// }

import type { ReactNode } from "react";
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
  external = false,
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
  external?: boolean;
}) {
  const classNames = [
    "experience-card",
    topContent ? "has-top-content" : "",
    bottomContent ? "has-bottom-content" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const cardContent = (
    <>
      <div className="card-topline">
        <span>{index}</span>
        <Icon size={22} />
      </div>

      {topContent ? (
        <div className="card-top-content">{topContent}</div>
      ) : null}

      <div className="card-body">
        <p className="card-meta">{meta}</p>
        <h2>{title}</h2>
        <p>{description}</p>

        {children}
      </div>

      {bottomContent ? (
        <div className="card-bottom-content">{bottomContent}</div>
      ) : null}

      <div className="card-action">
        <span>{external ? "Open presentation" : "Open experience"}</span>
        <ArrowUpRight size={20} />
      </div>
    </>
  );

  if (external) {
    return (
      <a
        href={to}
        className={classNames}
        target="_blank"
        rel="noreferrer"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={to} className={classNames}>
      {cardContent}
    </Link>
  );
}