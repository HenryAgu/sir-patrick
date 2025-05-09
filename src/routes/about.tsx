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
            <img
              src="/icons/avatar.svg"
              alt="avatar"
              className="w-auto h-auto"
            />
            <div className="flex flex-col">
              <p className="text-secondary-800 text-base font-medium leading-[22.47px]">
                Sir Patrick
              </p>
              <span className="text-secondary-500 font-normal text-[13px] leading-[16px]">
                Writer / Consultant
              </span>
            </div>
          </div>
          <p className="font-normal text-xs lg:text-xl leading-[17.5px] lg:leading-[26px] text-brand-gray-500">
            I’m known as Sir Patrick among PCMs and corps members. During my
            NYSC, I had little guidance — I didn’t know what to expect or how to
            navigate the process. It was tough, and that’s why I created this
            online community for PCMs.
          </p>
          <p className="font-normal text-xs lg:text-xl leading-[17.5px] lg:leading-[26px] mt-2 text-brand-gray-500">
            This platform walks you through everything — from school clearance
            and NYSC registration to camp life and your service year. We've got
            you covered from start to finish.
          </p>
          <p className="font-normal text-xs lg:text-xl leading-[17.5px] lg:leading-[26px] mt-2 text-brand-gray-500">
            You can also connect with other PCMs across Nigeria (including
            foreign graduates) on our <span className="text-brand-green-250">social platforms.</span> 
          </p>
          <p className="font-normal text-xs lg:text-xl leading-[17.5px] lg:leading-[26px] mt-2 text-brand-gray-500">
            ⏩️{" "}
            <a href="https://whatsapp.com/channel/0029Van5HvY0lwgkt6kuVr2A" className="text-brand-green-250">
              Join our WhatsApp channel
            </a>{" "}
            for updates <br />
            ⏩️{" "}
            <a href="https://t.me/officialnysccommunity" className="text-brand-green-250">
              Join our Telegram group
            </a>{" "}
            to ask questions and interact.
          </p>
          <p className="font-normal text-xs lg:text-xl leading-[17.5px] lg:leading-[26px] mt-2 text-brand-gray-500">
            Our guides are experienced officials and ex-corps members who can
            help with{" "}
            <span className="text-brand-green-250">
              medical documents, direct posting, relocation, PPA placement,
            </span>{" "}
            and more.
          </p>
          <p className="font-normal text-xs lg:text-xl leading-[17.5px] lg:leading-[26px] mt-2 text-brand-gray-500">
            Check out our{" "}
            <a
              href="https://whatsapp.com/channel/0029Van5HvY0lwgkt6kuVr2A"
              className="text-brand-green-250"
            >
              WhatsApp channel
            </a>{" "}
            now for the latest updates!
          </p>
          <SocialMenu />
        </div>
      </div>
    </main>
  );
}
