import { Comment } from "@/type/type";
import { format, parseISO } from "date-fns";

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection = ({ comments }: CommentSectionProps) => {


  return (
    <div className="space-y-8 lg:p-4 font-roboto">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="border-t border-brand-gray-400 pt-10 lg:pt-14"
        >
          <div className="flex items-center justify-between mb-5">
            <p className="font-semibold lg:text-[25px] lg:leading-7 text-sm text-secondary-800">
              {comment.name}
            </p>
            <p className="text-secondary-600 text-xs lg:text-xl font-normal font-source-serif">
              {format(parseISO(comment.timestamp), "MMMM d, yyyy / h:mma")}
            </p>
          </div>
          <p className="mt-4 lg:mt-8 ml-4 lg:ml-8 text-secondary-500 font-normal text-xs lg:text-xl">
            {comment.message}
          </p>
        </div>
      ))}
      <div className="flex justify-center items-center my-14">
        <button className="border border-brand-green-150 text-brand-green-250 p-2.5 lg:px-5 lg:py-4 rounded-[10px] text-xs cursor-pointer lg:text-base  bg-white">
          Read more comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
