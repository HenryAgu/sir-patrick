import CommentSection from "./comment-section";
import CommentForm from "./commentForm";

interface SlugProps {
  slug: string;
}

const Comments = ({ slug }: SlugProps) => {
  return (
    <section className="mx-auto container w-full font-roboto bg-brand-green-100 py-10 lg:pt-20 lg:pb-24 lg:px-14 xl:px-30 2xl:px-60 px-3.5 flex flex-col gap-y-[35px]">
      <div className="flex flex-col gap-y-1 lg:gap-y-2">
        <p className="text-secondary-800 lg:text-[31px] font-semibold lg:leading-7 text-base">
          Join the Conversation and Ask your Questions
        </p>
        <span className="text-secondary-600 text-sm lg:text-xl lg:leading-8 font-normal">
          Your email and other personal details is not made visible.
        </span>
      </div>
      <div className="flex flex-col gap-y-25 max-w-full lg:max-w-[800px]">
        <CommentForm slug={slug} />
        <CommentSection slug={slug} />
      </div>
    </section>
  );
};

export default Comments;
