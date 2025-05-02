type BlogPosts = {
  image: string;
  title: string;
  author: string;
  date: string;
};

const BlogPost = () => {
  const blogPosts: BlogPosts[] = [
    {
      image: "/images/Image.png",
      title: "How to secure a good PPA whereever you are poosted to for NYSC",
      author: "Sir Patrick",
      date: "August 20, 2025",
    },
    {
      image: "/images/Image.png",
      title: "How to secure a good PPA whereever you are poosted to for NYSC",
      author: "Sir Patrick",
      date: "August 20, 2025",
    },
    {
      image: "/images/Image.png",
      title: "How to secure a good PPA whereever you are poosted to for NYSC",
      author: "Sir Patrick",
      date: "August 20, 2025",
    },
    {
      image: "/images/Image.png",
      title: "How to secure a good PPA whereever you are poosted to for NYSC",
      author: "Sir Patrick",
      date: "August 20, 2025",
    },
    {
      image: "/images/Image.png",
      title: "How to secure a good PPA whereever you are poosted to for NYSC",
      author: "Sir Patrick",
      date: "August 20, 2025",
    },
    {
      image: "/images/Image.png",
      title: "How to secure a good PPA whereever you are poosted to for NYSC",
      author: "Sir Patrick",
      date: "August 20, 2025",
    },
    {
      image: "/images/Image.png",
      title: "How to secure a good PPA whereever you are poosted to for NYSC",
      author: "Sir Patrick",
      date: "August 20, 2025",
    },
    {
      image: "/images/Image.png",
      title: "How to secure a good PPA whereever you are poosted to for NYSC",
      author: "Sir Patrick",
      date: "August 20, 2025",
    },
    {
      image: "/images/Image.png",
      title: "How to secure a good PPA whereever you are poosted to for NYSC",
      author: "Sir Patrick",
      date: "August 20, 2025",
    },
    {
      image: "/images/Image.png",
      title: "How to secure a good PPA whereever you are poosted to for NYSC",
      author: "Sir Patrick",
      date: "August 20, 2025",
    },
  ];
  return (
    <section className="mb-20">
      <p className="text-secondary-800 text-2xl font-bold font-roboto">
        Blog Post
      </p>
      <div className="mt-5 grid grid-cols-3 gap-5">
        {blogPosts.map((post, index) => (
          <div className="flex flex-col gap-y-[14.75px] border border-secondary-100 p-3.5 rounded-[12px]" key={index}>
            <img src={post.image} alt={post.title} className="w-full h-[221.3px] rounded-[6px]" />
            <div className="flex flex-col gap-y-2.5">
              <p className="text-secondary-800 font-semibold text-2xl leading-[23.05px] line-clamp-3">
                How to secure a good PPA whereever you are poosted to for NYSC
              </p>
              <div className="flex items-center gap-x-5 mt-2">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/icons/avatar.svg"
                    alt="avatar_icons"
                    className="lg:h-[25.82px] lg:w-[25.82px] h-[13.5px] w-[13.5px] aspect-square"
                  />
                  <p className="text-secondary-400 text-[10px] lg:text-base font-medium leading-6">
                    Sir Patrick
                  </p>
                </div>
                <p className="text-secondary-400 text-[10px] lg:text-base font-normal leading-6">
                  August 20, 2025
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPost;
