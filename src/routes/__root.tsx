import * as React from "react";
import { createPortal } from "react-dom";
import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { buildMeta } from "@/lib/seo";

export const Route = createRootRoute({
  head: () => buildMeta({ title: "Sir Patrick NYSC Blog", path: "/" }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      {createPortal(<HeadContent />, document.head)}
      <ScrollToTop/>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
