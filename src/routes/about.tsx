import SocialMenu from "@/components/shared/socialMenu";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="px-5 lg:px-30 py-10 mx-auto w-full container min-h-[80vh] lg:min-h-screen font-roboto">
      <div className="bg-secondary-50 py-10 md:py-[72px] px-5 md:px-[21px] flex items-center justify-center rounded-[12px]">
        <div className="flex flex-col gap-y-3 lg:gap-y-6 md:max-w-[668px] max-w-full">
          <div className="flex items-center gap-x-3">
            <img src="/icons/avatar.svg" alt="avatar" className="w-auto h-auto"/>
            <div className="flex flex-col">
              <p className="text-secondary-800 text-base font-medium leading-[22.47px]">Sir Patrick</p>
              <span className="text-secondary-500 font-normal text-[13px] leading-[16px]">Writer / Consultant</span>
            </div>
          </div>
          <p className="font-normal text-xs lg:text-xl leading-[17.5px] lg:leading-[26px] text-brand-gray-500">
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </p>
          <p className="font-normal text-xs lg:text-xl leading-[17.5px] lg:leading-[26px] mt-2 text-brand-gray-500">
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </p>
          <SocialMenu />
        </div>
      </div>
    </main>
  );
}
