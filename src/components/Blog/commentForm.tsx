const CommentForm = () => {
  return (
    <form className="my-8 flex flex-col gap-y-4.5">
      <textarea
        name="message"
        id=""
        className="resize-none h-[309px] bg-white rounded-[10px] px-5 py-10 text-secondary-600 text-xl leading-8 font-normal"
        placeholder="Type here"
        required
      />
      <input
        type="text"
        name="text"
        className="bg-white rounded-[10px] px-5 py-10 text-secondary-600 text-xl leading-8 font-normal"
        placeholder="Name*"
        required
      />
      <input
        type="email"
        className="bg-white rounded-[10px] px-5 py-10 text-secondary-600 text-xl leading-8 font-normal"
        placeholder="Email*"
        required
      />
      <div className="flex items-center gap-x-4 mb-10">
        <input
          type="checkbox"
          className="w-[18px] h-[18px] border border-black rounded-sm bg-white checked:border-transparent focus:outline-none"
        />
        <span className="text-secondary-600 text-xl leading-8 font-normal">
          Notify me of any response
        </span>
      </div>
      <button className="bg-brand-green-900 w-fit py-5 px-11 rounded-[12px] text-center text-white text-[31px] font-normal cursor-pointer transition duration-200 ease-in hover:opacity-50">
        Post comment
      </button>
    </form>
  );
};

export default CommentForm;
