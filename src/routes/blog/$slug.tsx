import TelegramChannel from "@/components/telegramChannel";
import WhatsappChannel from "@/components/whatsappChannel";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();

  return (
    <main className="min-h-screen mx-auto container w-full lg:px-60 py-10 lg:pb-20 px-3.5 font-roboto">
      {/* Header */}
      <section className="flex flex-col gap-y-3.5 lg:gap-y-5">
        <h1 className="font-semibold text-xl leading-7 lg:text-[39px] text-secondary-800 lg:leading-10">
          How to secure a good PPA whereever you are posted to for NYSC
        </h1>
        <div className="flex items-center gap-x-7">
          <div className="flex items-center gap-x-2">
            <img
              src="/icons/avatar.svg"
              alt="avatar_icons"
              className="h-[25.82px] w-[25.82px] aspect-square"
            />
            <p className="text-secondary-400 text-[13px] lg:text-sm font-medium leading-6">
              Sir Patrick
            </p>
          </div>
          <p className="text-secondary-400 text-[13px] lg:text-sm font-normal leading-6">
            August 20, 2022 /
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
        <p className="text-secondary-600 font-normal text-sm lg:text-xl leading-[18px] lg:leading-8">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels.
        </p>
        <p className="text-secondary-600 font-normal text-sm lg:text-xl leading-[18px] lg:leading-8">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <p className="text-secondary-600 font-normal text-sm lg:text-xl leading-[18px] lg:leading-8">
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey.
        </p>
        <p className="text-secondary-600 font-normal text-sm lg:text-xl leading-[18px] lg:leading-8">
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
          lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
          felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
        </p>
      </section>
      <div className="lg:py-10 py-5">
        <WhatsappChannel />
      </div>
      <p className="text-secondary-600 font-normal text-sm lg:text-xl leading-[18px] lg:leading-8">
        One of the most rewarding aspects of traveling is immersing yourself in
        the local culture and customs. This includes trying local cuisine,
        attending cultural events and festivals, and interacting with locals.
        Learning a few phrases in the local language can also go a long way in
        making connections and showing respect.
      </p>
      <p className="text-secondary-600 font-normal text-sm lg:text-xl leading-[18px] lg:leading-8">
        While it's essential to leave room for spontaneity and unexpected
        adventures, having a rough itinerary can help you make the most of your
        time and budget. Identify the must-see sights and experiences and
        prioritize them according to your interests and preferences. This will
        help you avoid overscheduling and ensure that you have time to relax and
        enjoy your journey.
      </p>
      <p className="text-secondary-600 font-normal text-sm lg:text-xl leading-[18px] lg:leading-8">
        Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
        lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
        felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
      </p>
      <div className="py-5 lg:py-10">
        <TelegramChannel />
      </div>
    </main>
  );
}
