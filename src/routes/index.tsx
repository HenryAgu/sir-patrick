import { createFileRoute } from "@tanstack/react-router";
import "../index.css";
import HomeHero from "@/components/Home/homeHero";
import ChannelLink from "@/components/whatsappChannel";
import BlogPost from "@/components/Home/blogPost";
export const Route = createFileRoute("/")({
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
