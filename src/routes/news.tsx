import LatestNews from "@/components/latestNews";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/news")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="px-5 lg:px-30 py-10 mx-auto w-full container min-h-[80vh] lg:min-h-screen font-roboto">
      <h1 className="text-[#FF0505] font-medium text-xl lg:text-[31px] leading-6">
        Latest News
      </h1>
      <LatestNews />
    </main>
  );
}
