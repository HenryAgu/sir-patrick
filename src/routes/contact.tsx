import SocialMenu from "@/components/shared/socialMenu";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="px-5 lg:px-30 lg:py-10 mx-auto w-full container min-h-[80vh] lg:min-h-screen font-roboto">
      <div className="bg-secondary-50 py-10 lg:py-[72px] px-5 lg:px-[21px] flex items-center justify-center rounded-[12px]">
        <div className="flex flex-col gap-y-3 lg:gap-y-6 max-w-[668px]">
          <p className="text-secondary-800 text-[25px] font-medium lg:font-semibold leading-[28px]">
            Contact Us
          </p>
          <p className="font-normal text-xs lg:text-xl leading-[17.5px] lg:leading-[26px] text-brand-gray-500">
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
