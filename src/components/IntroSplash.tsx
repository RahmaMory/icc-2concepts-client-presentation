import { useEffect, useState } from "react";

export default function IntroSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 2300);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-splash" aria-hidden="true">
      <div className="intro-glow" />
      <div className="intro-logo-wrap">
        <img src="/assets/brand/icc-logo.png" alt="" className="intro-logo" />
        <div className="intro-copy">
          <span>ICC</span>
          <small>You Imagine. We Build.</small>
        </div>
      </div>
    </div>
  );
}
