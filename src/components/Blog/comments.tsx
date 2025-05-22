import { useState } from "react";
import CommentForm from "./commentForm";
import CommentSection from "./commentSection";
import { Comment } from "@/type/type";

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      name: "Jennifer Chuks",
      message:
        "Sir Patrick, please when is the right time to start submitting my details for the PPA, the guy that I’m using is saying this is not the right time and I’ve already paid him o. Please can you advise me on what to do?",
        email: "henryagu2001@gmail.com",
      timestamp: new Date().toISOString(),
    },    {
      id: "1",
      name: "Jennifer Chuks",
      message:
        "Sir Patrick, please when is the right time to start submitting my details for the PPA, the guy that I’m using is saying this is not the right time and I’ve already paid him o. Please can you advise me on what to do?",
        email: "henryagu2001@gmail.com",
      timestamp: new Date().toISOString(),
    },
  ])

  const [newComment, setNewComment] = useState('');

  return (
    <section className="mx-auto container w-full font-roboto bg-brand-green-100 py-10 lg:pt-20 lg:pb-24 lg:px-14 xl:px-30 2xl:px-60 px-3.5 flex flex-col gap-y-18">
      <div className="flex flex-col gap-y-1 lg:gap-y-2">
        <p className="text-secondary-800 lg:text-[31px] font-semibold lg:leading-7 text-base">
          Join the Conversation and Ask your Questions
        </p>
        <span className="text-secondary-600 text-sm lg:text-xl lg:leading-8 font-normal">
          Your email and other personal details is not made visible.
        </span>
      </div>
      <CommentForm comments={comments} setComments={setComments}/>
      <CommentSection comments={comments}/>
    </section>
  );
};

export default Comments;
