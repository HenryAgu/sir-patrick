const CommentForm = () => {
  return (
    <form className="my-8 flex flex-col gap-y-[9px] lg:gap-y-4.5">
      <textarea
        name="message"
        id=""
        className="resize-none h-[140px] lg:h-[309px] bg-white rounded-[10px] px-2.5 py-4.5 lg:px-5 lg:py-10 text-secondary-600 text-sm lg:text-xl lg:leading-8 font-normal border-[0.45px] border-brand-gray-100"
        placeholder="Type here"
        required
      />
      <input
        type="text"
        name="text"
        className="bg-white rounded-[10px] px-2.5 py-4.5 lg:px-5 lg:py-10 text-secondary-600 text-sm lg:text-xl lg:leading-8 font-normal border-[0.45px] border-brand-gray-100"
        placeholder="Name*"
        required
      />
      <input
        type="email"
        className="bg-white rounded-[10px] px-2.5 py-4.5 lg:px-5 lg:py-10 text-secondary-600 text-sm lg:text-xl lg:leading-8 font-normal border-[0.45px] border-brand-gray-100"
        placeholder="Email*"
        required
      />
      <div className="flex items-center gap-x-2 lg:gap-x-4 mb-5 lg:mb-10">
        <input
          type="checkbox"
          className="lg:w-[18px] lg:h-[18px] w-[10px] h-[10px] border border-black rounded-sm bg-white checked:border-transparent focus:outline-none"
        />
        <span className="text-secondary-600 text-xs lg:text-xl leading-8 font-normal">
          Notify me of any response
        </span>
      </div>
      <button className="bg-brand-green-900 w-fit py-3.5 lg:py-5 px-5 lg:px-11 rounded-[6px] lg:rounded-[12px] text-center text-white text-sm lg:text-[31px] font-normal cursor-pointer transition duration-200 ease-in hover:opacity-50">
        Post comment
      </button>
    </form>
  );
};

export default CommentForm;
