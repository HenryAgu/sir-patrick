import { Link } from "@tanstack/react-router";

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

  return (
    <nav className="px-5 lg:px-30 py-6 flex items-center justify-between font-roboto">
      <img src="/icons/Logo.svg" alt="logo" />
      <ul className="flex items-center gap-x-7.5">
        {navMenu.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              activeProps={{
                className: "text-brand-green-900 font-bold",
              }}
              inactiveProps={{
                className: "text-base font-normal text-brand-gray-500 transition-color duration-200 ease-in hover:text-brand-green-900",
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-7.5">
        <div className="flex items-center gap-x-3 bg-secondary-100 p-2 pl-4 rounded-[5px]">
          <input type="text" placeholder="Search" className="text-secondary-400 text-base font-normal focus:outline-secondary-100 w-full"/>
          <img src="/icons/search.svg" alt="search_icon"/>
        </div>
        <div className="">1</div>
      </div>
    </nav>
  );
};

export default Navbar;
