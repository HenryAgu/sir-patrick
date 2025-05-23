import { Comment } from "@/type/type";
import React, { useState } from "react";
import { CommentContext } from "./CommentContext";

export const CommentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      name: "Jennifer Chuks",
      message:
        "Sir Patrick, please when is the right time to start submitting my details for the PPA, the guy that I’m using is saying this is not the right time and I’ve already paid him o. Please can you advise me on what to do?",
      email: "henryagu2001@gmail.com",
      timestamp: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Jennifer Chuks",
      message:
        "Sir Patrick, please when is the right time to start submitting my details for the PPA, the guy that I’m using is saying this is not the right time and I’ve already paid him o. Please can you advise me on what to do?",
      email: "henryagu2001@gmail.com",
      timestamp: new Date().toISOString(),
    },
  ]);
  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentContext.Provider>
  );
};
