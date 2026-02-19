interface CommentSectionProps {
  slug: string;
}

const CommentForm = ({ slug }: CommentSectionProps) => {
  return (
    <form className="flex flex-col gap-y-4 lg:gap-y-8 ">
      {/* Comment message */}
      <textarea
        name="comment"
        id=""
        className="border border-[#D4DED3] resize-none bg-white h-[309px] rounded-[10px] px-4 lg:px-6 py-[35px] text-secondary-600 text-xl font-normal"
        required
        placeholder="Type here"
      />
      {/* Name field */}
      <input
        type="text"
        name="name"
        className="border border-[#D4DED3] bg-white h-14 lg:h-[110px] rounded-[10px] px-4 lg:px-6 py-3 text-secondary-600 text-lg lg:text-xl font-normal"
        required
        placeholder="Name *"
      />

      {/* Email field */}
      <input
        type="text"
        name="email"
        className="border border-[#D4DED3] bg-white h-14 lg:h-[110px] rounded-[10px] px-4 lg:px-6 py-3 text-secondary-600 text-lg lg:text-xl font-normal"
        required
        placeholder="Email *"
      />

      <button type="submit" className="lg:w-fit bg-green-900 px-11.5 py-2.5 rounded-[12px] text-white font-roboto font-normal text-lg lg:text-[31px]">Post comment</button>
    </form>
  );
};

export default CommentForm;
