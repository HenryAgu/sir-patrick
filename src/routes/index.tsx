import { createFileRoute } from "@tanstack/react-router";
import "../index.css";
import HomeHero from "@/components/Home/homeHero";
import ChannelLink from "@/components/whatsappChannel";
import BlogPost from "@/components/Home/blogPost";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildMeta({
      title:
        "NYSC Updates, PCM Guides, Registration, Camp & Service Year Tips | Sir Patrick NYSC Blog",
      description:
        "Get the latest NYSC updates, registration guides, call-up letter information, camp requirements, deployment, relocation, PPA tips and real experiences from PCMs and ex-corps members.",
      path: "/",
    }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="min-h-screen mx-auto w-full container xl:px-30 px-3.5">
      <HomeHero />
      <ChannelLink />
      <BlogPost />
    </main>
  );
}
