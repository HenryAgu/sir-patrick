import { fetchBlog } from "@/lib/fetchBlog";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { format, parseISO } from "date-fns";
import { Skeleton } from "./ui/skeleton";

const LatestNews = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({ queryKey: ["blogs"], queryFn: fetchBlog });
  if (isLoading)
    return (
      <div className="my-4 lg:my-8 flex flex-col w-full md:w-[70%]">
        <div className="flex gap-x-2.5 lg:gap-x-10 w-fit py-2 lg:py-4">
          <Skeleton className="lg:w-[237px] lg:h-[145px] w-[108px] h-[85px]" />
          <div className="flex flex-col gap-y-[8.8px] lg:gap-y-[15px]">
            <Skeleton className="w-full lg:w-[172px] h-5" />
            <Skeleton className="w-full lg:w-[563px] h-[72px]" />
          </div>
        </div>
      </div>
    );
  if (error) return <div> An error occured </div>;

  return (
    <div className="my-4 lg:my-8 flex flex-col w-full md:w-[70%]">
      {blogs?.map((item, index) => (
        <Link
          to="/blog/$slug"
          params={{ slug: item.slug.current.replace("/", "") }}
          key={index}
          className={`flex gap-x-2.5 lg:gap-x-10 w-fit py-2 lg:py-4 ${
            index !== blogs.length - 1 ? "border-b border-b-brand-gray-200" : ""
          }`}
        >
          <img
            src={item?.mainImage?.asset?.url ?? ""}
            alt="image"
            className="lg:w-[237px] lg:h-[145px] lg:aspect-[237/145] w-[108px] h-[85px] aspect-[108/85] object-cover lg:object-contain"
          />
          <div className="flex flex-col gap-y-[8.8px] lg:gap-y-[15px]">
            <span className="text-[#39393999] text-[10px] lg:text-xl font-normal leading-[101%]">
              {item?.publishedAt
                ? format(parseISO(item.publishedAt), "MMMM d, yyyy")
                : ""}
            </span>
            <p className="capitalize line-clamp-2 text-[#393939] font-medium text-[13px] lg:text-[31px]">
              {item.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LatestNews;
