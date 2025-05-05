import Comments from "@/components/Blog/comments";
import TelegramChannel from "@/components/telegramChannel";
import WhatsappChannel from "@/components/whatsappChannel";
import { fetchBlogBySlug } from "@/lib/fetchBlog";
import { PortableText } from "@portabletext/react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { format, parseISO } from "date-fns";

export const Route = createFileRoute("/blog/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs", slug],
    queryFn: () => fetchBlogBySlug(slug),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-xl font-semibold text-red-500">
            Error loading blog post
          </p>
          <p className="text-base text-gray-500">Please try again later.</p>
        </div>
      </div>
    );
  }

  // For Portable Texts
  const components = {
    types: {
      image: ({
        value,
      }: {
        value: { asset?: { url?: string }; alt?: string };
      }) => (
        <img
          src={value.asset?.url ?? ""}
          alt={value.alt || "Image"}
          className="my-4 rounded-md w-[650px] h-[350px]"
        />
      ),
    },
  };

  return (
    <main>
      <div className="min-h-screen mx-auto container w-full lg:px-14 xl:px-30 2xl:px-60 py-10 lg:pb-20 px-3.5 font-roboto">
        {/* Header */}
        <section className="flex flex-col gap-y-3.5 lg:gap-y-5">
          <h1 className="font-semibold text-xl leading-7 lg:text-[39px] text-secondary-800 lg:leading-10">
            {blog?.title}
          </h1>
          <div className="flex items-center gap-x-7">
            <div className="flex items-center gap-x-2">
              <img
                src="/icons/avatar.svg"
                alt="avatar_icons"
                className="h-[25.82px] w-[25.82px] aspect-square"
              />
              <p className="text-secondary-400 text-[13px] lg:text-sm font-medium leading-6">
                {blog?.author?.name}
              </p>
            </div>
            <p className="text-secondary-400 text-[13px] lg:text-sm font-normal leading-6">
              {blog?.publishedAt
                ? format(parseISO(blog.publishedAt), "MMMM d, yyyy")
                : ""}
              /
              <span className="ml-2 text-brand-green-900 font-medium">
                32 comments
              </span>
            </p>
          </div>
          <img
            src="/images/blog.png"
            alt=""
            className="h-[210px] lg:h-[462px] w-full rounded-[12px]"
          />
        </section>
        {/* body */}
        <section className="flex flex-col gap-y-3.5 lg:gap-y-8 mt-8">
          <PortableText value={blog?.body ?? []} components={components} />
          <div className="lg:py-10 py-5">
            <WhatsappChannel />
          </div>
          <PortableText value={blog?.body ?? []} components={components} />
        </section>
        <section className="py-5 lg:py-10">
          <TelegramChannel />
        </section>
      </div>
      <Comments />
    </main>
  );
}
