import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

type SocialMenu = {
  title: string;
  image: string;
  path: string;
};

function RouteComponent() {
  const socialMenu: SocialMenu[] = [
    { title: "x", image: "/icons/x.svg", path: "/" },
    { title: "whatsapp", image: "/icons/whatsapp.svg", path: "/" },
    { title: "facebook", image: "/icons/facebook.svg", path: "/" },
    { title: "instagram", image: "/icons/insta.svg", path: "/" },
  ];
  return (
    <main className="px-5 lg:px-30 py-10 mx-auto w-full container min-h-screen font-roboto">
      <div className="bg-secondary-50 py-[72px] px-[21px] flex items-center justify-center rounded-[12px]">
        <div className="flex flex-col gap-y-6 max-w-[668px]">
          <p className="text-secondary-800 text-[25px] font-semibold leading-[28px]">
            Contact Us
          </p>
          <p className="font-normal text-xl leading-[26px] text-brand-gray-500">
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </p>
          <div className="flex items-center gap-x-3.5 mt-3">
            {socialMenu.map((social, index) => (
              <Link to={social.path} key={index}>
                <img src={social.image} alt={social.title} className="w-auto h-auto opacity-[80%]"/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
