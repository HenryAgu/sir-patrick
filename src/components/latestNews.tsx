import { Link } from "@tanstack/react-router";

interface News {
  path: string;
  image: string;
  date: string;
  title: string;
}

const news: News[] = [
  {
    path: "/",
    image: "/images/Image.png",
    date: "27th Aprl, 2025",
    title: "Swaering-In of the Batch A Stream 1 NYSC Corp Members",
  },
  {
    path: "/",
    image: "/images/Image.png",
    date: "27th Aprl, 2025",
    title: "Swaering-In of the Batch A Stream 1 NYSC Corp Members",
  },
  {
    path: "/",
    image: "/images/Image.png",
    date: "27th Aprl, 2025",
    title: "Swaering-In of the Batch A Stream 1 NYSC Corp Members",
  },
];

const LatestNews = () => {
  return (
    <div className="my-4 lg:my-8 flex flex-col w-full md:w-[70%]">
      {news.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className={`flex gap-x-2.5 lg:gap-x-10 w-fit py-2 lg:py-4 ${
            index !== news.length - 1 ? "border-b border-b-brand-gray-200" : ""
          }`}
        >
          <img
            src={item.image}
            alt="image"
            className="lg:w-[237px] lg:h-[145px] lg:aspect-[237/145] w-[108px] h-[85px] aspect-[108/85]"
          />
          <div className="flex flex-col gap-y-[8.8px] lg:gap-y-[15px]">
            <span className="text-[#39393999] text-[10px] lg:text-xl font-normal leading-[101%]">
              {item.date}
            </span>
            <p className="line-clamp-2 text-[#393939] font-medium text-[13px] lg:text-[31px]">
              {item.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LatestNews;
