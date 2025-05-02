import { createFileRoute } from "@tanstack/react-router";
import "../index.css";
import HomeHero from "@/components/Home/homeHero";
import ChannelLink from "@/components/channelLink";
import BlogPost from "@/components/Home/blogPost";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="min-h-screen mx-auto w-full container xl:px-30 px-3.5">
      <head>
        <meta charSet="utf-8" />
        <title>Welcome To Sir Patrick Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </head>
      <HomeHero />
      <ChannelLink />
      <BlogPost/>
    </main>
  );
}
