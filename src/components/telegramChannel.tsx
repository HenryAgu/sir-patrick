import { Link } from "@tanstack/react-router";

const TelegramChannel = () => {
  return (
    <section className="lg:w-[75%] w-full mx-auto container lg:mb-20 ">
      <Link
        to="/"
        className="bg-brand-green-900 text-white py-2.5 lg:py-5 rounded-[6px] lg:rounded-[12px] flex items-center justify-center gap-x-2.5"
      >
        <img
          src="/icons/telegram.svg"
          alt="telegram_icon"
          className="lg:w-auto lg:h-auto w-[21.15px] h-[21.15px]"
        />
        <p className="text-white font-bold font-roboto text-[13px] lg:text-[31px] lg:leading-7">
        Join Batch “A” 2025 Telegram Group
        </p>
      </Link>
    </section>
  );
};

export default TelegramChannel;
