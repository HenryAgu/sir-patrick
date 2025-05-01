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
    <section className="flex items-center gap-x-1.5 lg:gap-x-3.5 mt-3">
      {socialMenu.map((social, index) => (
        <Link to={social.path} key={index}>
          <img
            src={social.image}
            alt={social.title}
            className="lg:w-auto lg:h-auto w-[18.57px] h-[18.57px] opacity-[80%]"
          />
        </Link>
      ))}
    </section>
  );
};

export default SocialMenu;
