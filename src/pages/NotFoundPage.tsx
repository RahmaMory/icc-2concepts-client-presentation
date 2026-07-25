import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="page-shell inner-page empty-state">
      <p className="section-kicker">404</p>
      <h1>This page does not exist.</h1>
      <Link to="/" className="external-button">Return home</Link>
    </div>
  );
}
