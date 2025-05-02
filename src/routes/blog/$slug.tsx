import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();

  return (
    <main className="min-h-screen mx-auto container w-full xl:px-60 px-3.5">
        <div className=""></div>
      <h1>Blog Slug: {slug}</h1>
    </main>
  );
}
