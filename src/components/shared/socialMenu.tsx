type SocialMenu = {
  title: string;
  image: string;
  path: string;
};

const SocialMenu = () => {
  const socialMenu: SocialMenu[] = [
    { title: "x", image: "/icons/x.svg", path: "/" },
    { title: "whatsapp", image: "/icons/whatsapp.svg", path: "https://whatsapp.com/channel/0029Van5HvY0lwgkt6kuVr2A" },
    { title: "facebook", image: "/icons/facebook.svg", path: "https://facebook.com/groups/546314215209386/" },
  ];
  return (
    <section className="flex items-center gap-x-1.5 lg:gap-x-3.5 mt-3">
      {socialMenu.map((social, index) => (
        <a href={social.path} key={index}>
          <img
            src={social.image}
            alt={social.title}
            className="lg:w-auto lg:h-auto w-[18.57px] h-[18.57px] opacity-[80%]"
          />
        </a>
      ))}
    </section>
  );
};

export default SocialMenu;
