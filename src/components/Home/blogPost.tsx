import { useContext, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

import TelegramChannel from "../telegramChannel";
import { useQuery } from "@tanstack/react-query";
import { fetchBlog } from "@/lib/fetchBlog";
import { format, parseISO } from "date-fns";
import { Skeleton } from "../ui/skeleton";
import { SearchContext } from "@/contexts/SearchContext";

const BlogPost = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({ queryKey: ["blogs"], queryFn: fetchBlog });

  if (isLoading)
    return (
      <div className="my-0 lg:mt-5 lg:mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Skeleton className="h-[350px]" />
        <Skeleton className="h-[350px]" />
        <Skeleton className="h-[350px]" />
      </div>
    );

  if (error) {
    return (
      <div className="flex flex-col gap-y-3.5 lg:gap-y-5 items-center justify-center min-h-[60vh] text-center px-4 py-10">
        <h2 className="lg:text-7xl text-4xl font-bold text-black">Oops</h2>
        <p className="text-sm lg:text-base text-black max-w-md">
          Something went wrong while loading this blog posts. <br />
          Sir Patrick might be fine-tuning the wisdom — please try again later
          or check your internet connection.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2 bg-brand-green-900 cursor-pointer text-white text-sm lg:text-base rounded hover:bg-red-700 transition"
          >
            🔁 Reload Page
          </button>
        </div>
      </div>
    );
  }

  // search from context
  const { searchBlog } = useContext(SearchContext);

  // Calculate total pages based on postsPerPage (4)
  const totalPages = Math.ceil((blogs?.length || 0) / postsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const displayedPosts = blogs?.slice(startIndex, startIndex + postsPerPage);

  // filtered blog posts
  const filteredPosts = displayedPosts?.filter((item) => {
    return searchBlog.toLocaleLowerCase() === ""
      ? item
      : item?.title.toLocaleLowerCase().includes(searchBlog.toLocaleLowerCase());
  });

  return (
    <section className="lg:mb-20 mb-10 mt-10 lg:mt-20 md:px-10 lg:px-0">
      <p className="text-secondary-800 text-2xl font-bold font-roboto hidden lg:block">
        Blog Post
      </p>

      <div className="mt-0 lg:mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPosts?.map((post, index) => {
          return (
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug?.current }}
              className="flex flex-col gap-y-2 lg:gap-y-[14.75px] border border-secondary-100 transition-all duration-200 ease-in-out hover:border-brand-green-900 hover:shadow-custom-dark py-2.5 p-3.5 rounded-[12px]"
              key={index}
            >
              <img
                src={post?.mainImage?.asset?.url ?? ""}
                loading="lazy"
                alt={post.title}
                className="w-full h-[170px] lg:h-[221.3px] rounded-[6px] aspect-[332/170] lg:aspect-[332/221.3]"
              />
              <div className="flex flex-col gap-y-2.5">
                <div className="text-secondary-800 font-semibold text-base lg:text-[23.05px] leading-[25.82px] line-clamp-3">
                  {post.title}
                </div>
                <div className="flex items-center gap-x-[18.44px] lg:gap-x-5 lg:mt-2">
                  <Link to="/about" className="flex items-center gap-x-3">
                    <img
                      src="/icons/avatar.svg"
                      alt="avatar_icons"
                      className="h-[25.82px] w-[25.82px] aspect-square"
                    />
                    <p className="text-secondary-400 text-[13px] lg:text-sm font-medium leading-6">
                      {post?.author?.name}
                    </p>
                  </Link>
                  <p className="text-secondary-400 text-[13px] lg:text-sm font-normal leading-6">
                    {post?.publishedAt
                      ? format(parseISO(post.publishedAt), "MMMM d, yyyy")
                      : ""}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center my-10">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  const shouldShow =
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - currentPage) <= 1;

                  const isEllipsisLeft = page === currentPage - 2 && page > 2;
                  const isEllipsisRight =
                    page === currentPage + 2 && page < totalPages - 1;

                  if (isEllipsisLeft || isEllipsisRight) {
                    return (
                      <PaginationItem key={`ellipsis-${page}`}>
                        <span className="px-2 text-gray-400 select-none">
                          ...
                        </span>
                      </PaginationItem>
                    );
                  }

                  if (shouldShow) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          isActive={currentPage === page}
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                        >
                          {page < 10 ? `0${page}` : page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }

                  return null;
                }
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      <div className="py-0 lg:py-10">
        <TelegramChannel />
      </div>
    </section>
  );
};

export default BlogPost;
