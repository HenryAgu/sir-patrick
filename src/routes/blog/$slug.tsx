import Comments from "@/components/Blog/comments";
import TelegramChannel from "@/components/telegramChannel";
import { Skeleton } from "@/components/ui/skeleton";
import WhatsappChannel from "@/components/whatsappChannel";
import { fetchBlogBySlug } from "@/lib/fetchBlog";
import supabase from "@/lib/supabase-client";
import {
  PortableText,
  type PortableTextComponents,
  type PortableTextMarkComponent,
} from "@portabletext/react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { format, parseISO } from "date-fns";
import { toast } from "sonner";

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

  // Fetch Comments
  const fetchComments = async (): Promise<Comment[]> => {
    const { data, error } = await supabase
      .from("CommentList")
      .select("*")
      .eq("slug", slug);
    if (error) {
      toast.error("Failed to fetch comments");
      throw new Error(error.message);
    }
    return data;
  };

  const { data: commentList = [] }: UseQueryResult<Comment[]> = useQuery({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  const components: PortableTextComponents = {
    types: {
      image: ({ value }: { value?: any }) => {
        if (!value?.asset) return null;

        const imageUrl =
          value.asset.url ||
          `https://cdn.sanity.io/images/${import.meta.env.VITE_SANITY_PROJECT_ID}/${import.meta.env.VITE_SANITY_DATASET}/${value.asset._ref
            .replace("image-", "")
            .replace(/-([^-]*)$/, ".$1")}`;

        return (
          <div className="my-6 flex flex-col items-center">
            <img
              src={imageUrl}
              alt={value.alt || "Blog image"}
              className="rounded-lg max-w-full h-auto max-h-[500px] object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {value.caption && (
              <p className="text-center text-sm text-gray-500 mt-2">
                {value.caption}
              </p>
            )}
          </div>
        );
      },
    },
    block: {
      normal: ({ children }) => <p>{children}</p>,
      h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
      h3: ({ children }) => (
        <h3 className="text-xl font-semibold">{children}</h3>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-8 space-y-2">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-8 space-y-2">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      underline: ({ children }) => <u className="underline">{children}</u>,
      code: ({ children }) => (
        <code className="font-mono bg-gray-100 px-1 py-0.5 rounded text-sm">
          {children}
        </code>
      ),
      link: (({ value, children }) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <a
            href={value?.href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className="text-blue-600 hover:underline"
          >
            {children}
          </a>
        );
      }) as PortableTextMarkComponent,
    },
  };

  if (isLoading) {
    return (
      <section className="flex flex-col gap-y-3.5 lg:gap-y-5 min-h-screen mx-auto container w-full lg:px-14 xl:px-30 2xl:px-60 py-10 lg:pb-20 px-3.5">
        <Skeleton className="w-full lg:h-20 h-[37px]" />
        <Skeleton className="w-[269px] lg:w-[321px] h-4.5 lg:h-7" />
        <Skeleton className="w-full lg:h-[462px] h-[210px]" />
        <Skeleton className="w-full lg:h-[144px] h-[106px]" />
        <Skeleton className="w-full lg:h-[144px] h-[106px]" />
      </section>
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

  return (
    <main>
      <div className="min-h-screen mx-auto container w-full lg:px-14 xl:px-30 2xl:px-60 pt-10 lg:pb-20 px-3.5 font-roboto select-none">
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
                : ""}{" "}
              /
              <span className="ml-2 text-brand-green-900 font-medium">
                {commentList?.length}{" "}
                {commentList?.length > 1 ? "comments" : "comment"}
              </span>
            </p>
          </div>
          <img
            src={blog?.mainImage?.asset?.url ?? ""}
            loading="lazy"
            alt=""
            className="h-[210px] md:h-[350px] lg:h-[462px] w-full rounded-[12px]"
          />
        </section>
        {/* body */}
        <section className="flex flex-col gap-y-3.5 lg:gap-y-8 mt-8">
          <PortableText
            value={blog?.introduction ?? []}
            components={components}
          />
          <PortableText value={blog?.firstBody ?? []} components={components} />
          <div className="lg:py-10 py-5">
            <WhatsappChannel />
          </div>
          <PortableText
            value={blog?.secondBody ?? []}
            components={components}
          />
          <PortableText
            value={blog?.conclusion ?? []}
            components={components}
          />
        </section>
        <section className="py-5 lg:py-10">
          <TelegramChannel />
        </section>
      </div>
      <Comments slug={slug} />
    </main>
  );
}
