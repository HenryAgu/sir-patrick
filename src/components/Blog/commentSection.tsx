import { Comment } from "@/type/type";
import React from "react";
interface Props {
  comments: Comment[];
}

const CommentSection: React.FC<Props> = () => {
  const comments: Comment[] = [
    {
      id: "1",
      author: "Jennifer Chuks",
      message:
        "Sir Patrick, please when is the right time to start submitting my details for the PPA, the guy that I’m using is saying this is not the right time and I’ve already paid him o. Please can you advise me on what to do?",
      timestamp: "2025-04-24T18:33:00Z",
    },
    {
      id: "2",
      author: "Sir Patrick",
      message:
        "Sir Patrick, please when is the right time to start submitting my details for the PPA,",
      timestamp: new Date().toISOString(),
      replyTo: "1",
    },
    {
      id: "3",
      author: "Jennifer Chuks",
      message:
        "Sir Patrick, please when is the right time to start submitting my details for the PPA, the guy that I’m using is saying this is not the right time and I’ve already paid him o. Please can you advise me on what to do?",
      timestamp: "2025-04-24T18:33:00Z",
    },
    {
      id: "4",
      author: "Sir Patrick",
      message:
        "Sir Patrick, please when is the right time to start submitting my details for the PPA,",
      timestamp: new Date().toISOString(),
      replyTo: "3",
    },
  ];

  const topLevelComments = comments.filter((c) => !c.replyTo);

  const getReplies = (parentId: string) =>
    comments.filter((c) => c.replyTo === parentId);

  return (
    <div className="space-y-8 lg:p-4 font-roboto">
      {topLevelComments.map((comment) => (
        <div
          key={comment.id}
          className="border-t border-brand-gray-400 pt-10 lg:pt-14"
        >
          <div className="flex items-center justify-between mb-5">
            <p className="font-semibold lg:text-[25px] lg:leading-7 text-sm text-secondary-800">
              {comment.author}
            </p>
            <p className="text-secondary-600 text-xs lg:text-xl font-normal font-source-serif">
              April 20th, 2025 / 6:23PM
            </p>
          </div>
          <p className="mt-4 lg:mt-8 ml-4 lg:ml-8 text-secondary-500 font-normal text-xs lg:text-xl">
            {comment.message}
          </p>

          {/* Replies */}
          {getReplies(comment.id).map((reply) => (
            <div key={reply.id} className="mt-4 ml-6 lg:ml-12 p-3">
              <div className="flex items-center justify-between border-t border-brand-gray-400 pt-5">
                <div className="font-semibold lg:text-[25px] lg:leading-7 text-sm text-secondary-800">
                  {reply.author}
                </div>
                <div className="text-secondary-600 text-xs lg:text-xl font-normal font-source-serif">
                  April 20th, 2025 / 6:23PM
                </div>
              </div>
              <p className="mt-4 lg:mt-8 ml-4 lg:ml-8 text-secondary-500 font-normal text-xs lg:text-xl">
                {reply.message}
              </p>
            </div>
          ))}
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
