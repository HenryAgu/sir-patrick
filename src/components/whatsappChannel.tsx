const WhatsappChannel = () => {
  return (
    <section className="lg:w-[75%] w-full mx-auto container lg:mb-10 ">
      <a
        href="https://chat.whatsapp.com/DkF1vpJpiKOKukfdXKHoqf?s=cl&p=i&mlu=0"
        target="_blank"
        className="bg-brand-green-900 text-white py-2.5 lg:py-5 rounded-[6px] lg:rounded-[12px] flex items-center justify-center gap-x-2.5"
      >
        <img src="/icons/white-whatsapp.svg" alt="whatsapp_icon" className="lg:w-auto lg:h-auto w-[21.15px] h-[21.15px]"/>
        <p className="text-white font-bold font-roboto text-[13px] lg:text-[31px] lg:leading-7">Join Our WhatsApp group</p>
      </a>
    </section>
  );
};

export default WhatsappChannel;
