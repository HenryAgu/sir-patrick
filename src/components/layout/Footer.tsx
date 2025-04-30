import { Link } from "@tanstack/react-router";

const Footer = () => {
  type NavMenu = {
    title: string;
    path: string;
  };

  const navMenu: NavMenu[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "News",
      path: "/news",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <footer className="bg-secondary-100 px-5 lg:px-30 py-10 font-roboto">
      <div className="container mx-auto w-full flex lg:flex-row flex-col-reverse items-center lg:items-start text-center lg:text-left gap-x-30 2xl:gap-x-40">
        <div className="flex flex-col gap-y-3.5 border-t lg:border-t-0 border-brand-gray-300 pt-5 lg:pt-0 w-full lg:w-fit">
          <p className="text-secondary-900 text-base leading-[21px] font-semibold hidden lg:block">
            About
          </p>
          <p className="text-secondary-500 font-normal text-[13px] max-w-[260px] hidden lg:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="flex flex-col gap-y-0.5">
            <p className="text-secondary-800 font-semibold text-[13px]">
              Email :
              <a href="mailto:info@jstemplate.net" className="font-normal ml-1">
                info@jstemplate.net
              </a>
            </p>
            <p className="text-secondary-800 font-semibold text-[13px]">
              Phone :
              <a href="tel:+2349068149238" className="font-normal ml-1">
                +2349068149238
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5 lg:gap-y-3.5 lg:pb-0 pb-5">
          <p className="text-secondary-900 text-base leading-[21px] font-semibold">
            Quick Link
          </p>
          <ul className="flex flex-row lg:flex-col gap-1.5">
            {navMenu.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="font-normal text-[13px] text-secondary-600 transition-opacity ease-in-out duration-200 hover:opacity-65"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white w-[294px] p-6 rounded-[9px] hidden lg:flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-1">
            <p className="font-semibold text-base text-secondary-800">
              Stay Updated
            </p>
            <span className="font-normal text-[13px] text-secondary-500">
              Get blog articles and updates via email
            </span>
          </div>
          <div className="flex flex-col gap-y-2 mt-2">
            <div className="flex gap-x-2 py-[9px] px-3 border border-secondary-200 rounded-[1px]">
              <input
                type="email"
                placeholder="Your Email"
                className="text-[13px] font-normal text-secondary-400 focus:outline-transparent w-full"
              />
              <img
                src="/public/icons/mail.svg"
                alt="mail_icon"
                className="h-auto w-auto"
              />
            </div>
            <button className="bg-brand-green-900 py-[9px] px-[15px] rounded-[4.5px] text-xs text-white font-medium font-work-sans">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
