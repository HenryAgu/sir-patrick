import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Spinner from "../ui/spinner";

interface CommentSectionProps {
  slug: string;
}

const CommentSection = ({ slug }: CommentSectionProps) => {
  const comments = useQuery(api.comments.getComments, { articleSlug: slug });

  if (!comments) {
    return <Spinner size="lg" />;
  }

  if (comments.length === 0) {
    return (
      <div className="border border-brand-gray-100 rounded-[10px] py-14 bg-brand-green-300 mx-5">
        <p className="text-secondary-600 text-2xl text-center font-bold">
          No comments yet!
        </p>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-y-5 lg:gap-y-10">
      {comments.map((comment) => (
        <div className="flex flex-col gap-y-2.5 lg:gap-y-5 border-t border-t-brand-gray-800/30 py-7 lg:py-14 ">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-base lg:text-[25px]">{comment.name}</p>
            <p className="font-source-serif text-secondary-600/50 text-sm lg:text-xl font-normal">
              {new Date(comment.createdAt).toLocaleString()}
            </p>
          </div>
          <div className="pl-2.5 lg:pl-5">
            <p className="text-base lg:text-xl font-normal text-secondary-600">
              {comment.comment}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CommentSection;
