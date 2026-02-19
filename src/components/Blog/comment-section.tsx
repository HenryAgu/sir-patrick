import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

interface CommentSectionProps {
  slug: string;
}

const CommentSection = ({ slug }: CommentSectionProps) => {
  const comments = useQuery(api.comments.getComments, { articleSlug: slug });

  if (!comments) {
    return <p>Loading...</p>;
  }

  if (comments.length === 0){
    return(
      <p>Empty comments</p>
    )
  }

  return (
    <section className="flex flex-col gap-y-10">
      {comments.map((comment) => (
        <div className="flex flex-col gap-y-5 border-t border-t-brand-gray-800/30 py-14 ">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-[25px]">{comment.name}</p>
            <p className="font-source-serif text-secondary-600/50 text-xl font-normal">
              {new Date(comment.createdAt).toLocaleString()}
            </p>
          </div>
          <div className="pl-5">
            <p className="text-xl font-normal text-secondary-600">
              {comment.comment}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CommentSection;
