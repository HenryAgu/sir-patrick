import { Link } from "@tanstack/react-router";

type SocialMenu = {
  title: string;
  image: string;
  path: string;
};

const SocialMenu = () => {
  const socialMenu: SocialMenu[] = [
    { title: "x", image: "/icons/x.svg", path: "/" },
    { title: "whatsapp", image: "/icons/whatsapp.svg", path: "/" },
    { title: "facebook", image: "/icons/facebook.svg", path: "/" },
    { title: "instagram", image: "/icons/insta.svg", path: "/" },
  ];
  return (
    <div className="flex items-center gap-x-2.5 lg:gap-x-3.5 mt-3">
      {socialMenu.map((social, index) => (
        <Link to={social.path} key={index}>
          <img
            src={social.image}
            alt={social.title}
            className="lg:w-auto lg:h-auto w-[23.67px] h-[23.67px] opacity-[80%]"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMenu;
