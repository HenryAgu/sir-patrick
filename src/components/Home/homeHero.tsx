import { useQuery } from "@tanstack/react-query";
import SocialMenu from "../shared/socialMenu";
import { format, parseISO } from "date-fns";
import { Skeleton } from "../ui/skeleton";
import { Link } from "@tanstack/react-router";
import { fetchNews } from "@/lib/fetchNews";

const HomeHero = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({ queryKey: ["news"], queryFn: fetchNews });
  if (isLoading)
    return (
      <div className="my-5">
        <Skeleton className="w-full h-[207px] lg:h-[574px] rounded-[12px]" />
      </div>
    );
  if (error)
    return (
      <section className="my-5 mb-[-60px] lg:mb-[-100px] w-full">
        <div className="relative w-full h-[207px] lg:h-[574px] rounded-[12px] overflow-hidden">
          <img
            src="/images/hero.webp"
            loading="lazy"
            alt="hero_image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#14162466]"></div>
        </div>
        <div className="flex justify-end">
          <SocialMenu />
        </div>
        <div className="bg-white border border-secondary-100 max-w-[235px] lg:max-w-[598px] rounded-[12px] px-3.5 lg:px-10 pb-4 lg:pb-10 shadow-custom-dark font-roboto flex flex-col mx-2.5 lg:mx-10 relative bottom-28 lg:bottom-50">
          <p className="bg-[#FB4B4B] text-[13px] lg:text-[21px] lg:leading-[31.2px] text-white w-fit rounded-[9.36px] px-4 py-[7px] relative bottom-5 font-work-sans">
            Latest News
          </p>
          <h1 className="max-w-[480px] text-brand-green-700 font-semibold text-[13px] lg:text-[31px] lg:leading-10 line-clamp-2 mt-[-10px] lg:mt-0">
            ---
          </h1>
          <div className="lg:mt-5 mt-1.5 flex items-center gap-x-5">
            <Link
              to="/about"
              className="flex items-center gap-x-[3.93px] lg:gap-x-3"
            >
              <img
                src="/icons/avatar.svg"
                alt="avatar_icons"
                className="lg:h-7 lg:w-8 h-[13.35px] w-[13.35px] aspect-square"
              />
              <p className="text-secondary-400 text-[10px] lg:text-base font-medium leading-6">
                Sir Patrick
              </p>
            </Link>
            <p className="text-secondary-400 text-[10px] lg:text-base font-normal leading-6">
              --- --:--
            </p>
          </div>
        </div>
      </section>
    );
  return (
    <section className="my-5 mb-[-60px] lg:mb-[-100px] w-full">
      <div className="relative w-full h-[207px] lg:h-[574px] rounded-[12px] overflow-hidden">
        <img
          src="/images/hero.webp"
          alt="hero_image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#14162466]"></div>
      </div>
      <div className="flex justify-end">
        <SocialMenu />
      </div>
      <div className="bg-white border border-secondary-100 max-w-[235px] lg:max-w-[598px] rounded-[12px] px-3.5 lg:px-10 pb-4 lg:pb-10 shadow-custom-dark font-roboto flex flex-col mx-2.5 lg:mx-10 relative bottom-28 lg:bottom-50">
        <p className="bg-[#FB4B4B] text-[13px] lg:text-[21px] lg:leading-[31.2px] text-white w-fit rounded-[9.36px] px-4 py-[7px] relative bottom-5 font-work-sans">
          Latest News
        </p>
        <h1 className="max-w-[480px] text-brand-green-700 font-semibold text-[13px] lg:text-[31px] lg:leading-10 line-clamp-2 mt-[-10px] lg:mt-0">
          {blogs?.[0]?.title}
        </h1>
        <div className="lg:mt-5 mt-1.5 flex items-center gap-x-5">
          <Link
            to="/about"
            className="flex items-center gap-x-[3.93px] lg:gap-x-3"
          >
            <img
              src="/icons/avatar.svg"
              alt="avatar_icons"
              className="lg:h-7 lg:w-8 h-[13.35px] w-[13.35px] aspect-square"
            />
            <p className="text-secondary-400 text-[10px] lg:text-base font-medium leading-6">
              Sir Patrick
            </p>
          </Link>
          <p className="text-secondary-400 text-[10px] lg:text-base font-normal leading-6">
            {blogs?.[0]?.publishedAt
              ? format(parseISO(blogs?.[0]?.publishedAt), "MMMM d, yyyy")
              : ""}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
