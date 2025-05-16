import { useQuery } from "@tanstack/react-query";
import { format, parseISO } from "date-fns";
import { Skeleton } from "./ui/skeleton";
import { fetchNews } from "@/lib/fetchNews";

const LatestNews = () => {
  const {
    data: news,
    isLoading,
    error,
  } = useQuery({ queryKey: ["news"], queryFn: fetchNews });
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

  return (
    <div className="my-4 lg:my-8 flex flex-col w-full md:w-[70%]">
      {news?.slice(0, 3)?.map((item, index) => (
        <div
          key={index}
          className={`flex gap-x-2.5 lg:gap-x-10 w-fit py-2 lg:py-4 ${
            index !== news.length - 1 ? "border-b border-b-brand-gray-200" : ""
          }`}
        >
          <img
            src={item?.mainImage?.asset?.url ?? ""}
            alt="image"
            className="lg:w-[237px] lg:h-[145px] lg:aspect-[237/145] w-[108px] h-[85px] aspect-[108/85] object-cover lg:object-contain rounded-[12px]"
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
        </div>
      ))}
    </div>
  );
};

export default LatestNews;
