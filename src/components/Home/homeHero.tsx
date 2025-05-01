import SocialMenu from "../shared/socialMenu";

const HomeHero = () => {
  return (
    <section className="my-5 w-full">
      <div className="relative w-full h-[574px] rounded-[12px] overflow-hidden">
        <img
          src="/images/hero.png"
          alt="hero_image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#14162466]"></div>
      </div>
      <div className="flex justify-end">
        <SocialMenu />
      </div>
      <div className="bg-white border border-secondary-100 max-w-[598px] rounded-[12px] px-10 pb-10 shadow-custom-dark font-roboto flex flex-col mx-10 relative bottom-50">
        <p className="bg-[#FB4B4B] text-[21px] leading-[31.2px] text-white w-fit rounded-[9.36px] px-4 py-[7px] relative bottom-5 font-work-sans">
          Latest News
        </p>
        <h1 className="max-w-[480px] text-brand-green-700 font-semibold text-[31px] leading-10 line-clamp-2">
          Call-Up letter is out now!! Check your dashboard to download
        </h1>
        <div className="mt-5 flex items-center gap-x-5">
          <div className="flex items-center gap-x-3">
            <img
              src="/icons/avatar.svg"
              alt="avatar_icons"
              className="h-7 w-8 aspect-square"
            />
            <p className="text-secondary-400 text-base font-medium leading-6">
              Sir Patrick
            </p>
          </div>
          <p className="text-secondary-400 text-base font-normal leading-6">
            August 20, 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
