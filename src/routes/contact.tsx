import SocialMenu from "@/components/shared/socialMenu";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="px-5 lg:px-30 py-10 mx-auto w-full container min-h-[80vh] lg:min-h-screen font-roboto">
      <div className="bg-secondary-50 py-10 md:py-[72px] px-5 md:px-[21px] flex items-center justify-center rounded-[12px]">
        <div className="flex flex-col gap-y-3 lg:gap-y-6 md:max-w-[668px] max-w-full">
          <p className="text-secondary-800 text-[25px] font-medium md:font-semibold leading-[28px]">
            Contact Us
          </p>
          <p className="font-normal text-xs lg:text-xl leading-[17.5px] lg:leading-[26px] text-brand-gray-500">
            We’d love to hear from you!
          </p>
          <p className="font-normal text-xs lg:text-xl leading-[17.5px] lg:leading-[26px] text-brand-gray-500">
            For business inquiries or partnership opportunities, please email us
            at: {" "}
            <a
              href="mailto:onlinenysccommunity@gmail.com"
              className="text-brand-green-250"
            >
              onlinenysccommunity@gmail.com
            </a>
          </p>
          <p className="font-normal text-xs lg:text-xl leading-[17.5px] lg:leading-[26px] text-brand-gray-500">
            Got questions, want to chat, or stay updated? <br />
            Join us on:{" "}
            <a
              href="https://whatsapp.com/channel/0029Van5HvY0lwgkt6kuVr2A"
              className="text-brand-green-250"
            >
              WhatsApp Channel
            </a>{" "}
            or{" "}
            <a
              href="https://t.me/officialnysccommunity"
              className="text-brand-green-250"
            >
              Telegram Channel
            </a>
          </p>
          <p className="font-normal text-xs lg:text-xl leading-[17.5px] lg:leading-[26px] text-brand-gray-500">
            You can also call: +2349068149238
          </p>
          <SocialMenu />
        </div>
      </div>
    </main>
  );
}
