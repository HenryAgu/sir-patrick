import { Comment } from "@/type/type";
import { createContext } from "react";

interface CommentContextType {
    comments: Comment[];
    setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export const CommentContext = createContext<CommentContextType>({
    comments: [],
    setComments: () => {},
});
