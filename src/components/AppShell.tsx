import type { ReactNode } from "react";
import BrandHeader from "./BrandHeader";
import Footer from "./Footer";
import IntroSplash from "./IntroSplash";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <IntroSplash />
      <BrandHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
