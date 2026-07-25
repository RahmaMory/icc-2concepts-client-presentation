import { Route, Routes, useLocation } from "react-router-dom";
import { client } from "./data/client";
import AppShell from "./components/AppShell";
import HomePage from "./pages/HomePage";
import RelatedPage from "./pages/RelatedPage";
import ViewerPage from "./pages/ViewerPage";
import LegalPage from "./pages/LegalPage";
import NotFoundPage from "./pages/NotFoundPage";

function RoutedApp() {
  const location = useLocation();

  return (
    <AppShell>
      <div className="route-stage" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/related" element={<RelatedPage />} />
          <Route path="/view/proposal" element={<ViewerPage mode="proposal" />} />
          <Route path="/view/demo" element={<ViewerPage mode="demo" />} />
          <Route path="/view/project/:projectId" element={<ViewerPage mode="project" />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </AppShell>
  );
}

export default function App() {
  return (
    <div
      className="app"
      style={
        {
          "--accent": client.accent,
          "--accent-rgb": client.accentRgb,
        } as React.CSSProperties
      }
    >
      <RoutedApp />
    </div>
  );
}
