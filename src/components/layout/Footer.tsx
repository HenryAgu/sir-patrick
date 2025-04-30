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
    <footer className="bg-secondary-100 px-30 py-10 font-roboto">
      <div className="container mx-auto w-full flex gap-x-10">
        <div className="flex flex-col gap-y-3.5">
          <p className="text-secondary-900 text-base leading-[21px] font-semibold">
            About
          </p>
          <p className="text-secondary-500 font-normal text-[13px] max-w-[260px]">
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
        <div className="flex flex-col gap-y-3.5">
          <p className="text-secondary-900 text-base leading-[21px] font-semibold">
            Quick Link
          </p>
          <ul className="flex flex-col gap-y-1.5">
            {navMenu.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="font-normal text-[13px] text-secondary-600 transition-opacity ease-in-out duration-200 hover:opacity-65">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">1</div>
      </div>
    </footer>
  );
};

export default Footer;
