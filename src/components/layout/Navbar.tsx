import { Link } from "@tanstack/react-router";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Navbar = () => {
  type NavMenu = {
    title: string;
    path: string;
  };

  const navMenu: NavMenu[] = [
    { title: "Home", path: "/" },
    { title: "News", path: "/news" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsExiting(false);
    }, 500);
  };
  return (
    <nav className="container mx-auto w-full border-b lg:border-b-0 border-b-brand-gray-800 px-5 lg:px-14 xl:px-30 py-6 flex items-center justify-between font-roboto">
      <Link to="/">
        <img
          src="/icons/Logo.svg"
          alt="logo"
          className="lg:w-auto lg:h-auto w-[162px] h-[49px]"
        />
      </Link>
      <ul className="hidden lg:flex items-center gap-x-7.5">
        {navMenu.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              activeProps={{
                className: "text-brand-green-900 font-bold",
              }}
              inactiveProps={{
                className:
                  "text-base font-normal text-brand-gray-500 transition-color duration-200 ease-in hover:text-brand-green-900",
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-2.5 lg:gap-x-7.5">
        <div className="flex items-center gap-x-3 bg-brand-green-200 border border-brand-gray-400 lg:border-secondary-100 lg:bg-secondary-100 p-2 pl-4 rounded-[17px] lg:rounded-[5px] w-[100px] lg:w-full">
          <input
            type="text"
            placeholder="Search"
            className="text-secondary-400 text-[10px] lg:text-base font-normal focus:outline-secondary-100 w-full"
          />
          <img src="/icons/search.svg" alt="search_icon" />
        </div>
        <div className="hidden lg:flex">
          <Switch />
        </div>
        <div className="flex lg:hidden">
          <button
            className="bg-brand-green-200 p-1 rounded-[3px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <img src="/icons/close.svg" alt="close_icon" />
            ) : (
              <img src="/icons/menu.svg" alt="menu_icon" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`flex flex-col p-5 py-8 text-white fixed top-24 h-fit bg-white w-screen left-0 right-0 animate-slideDown ${
            isExiting ? "animate-slideUp" : "animate-slideDown"
          }`}
        >
          <ul className="flex flex-col items-start gap-y-1 text-brand-gray-500">
            {navMenu.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-[13px] font-normal font-roboto leading-[28px]"
                  onClick={handleClose}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
