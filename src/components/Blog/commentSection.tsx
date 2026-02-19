"use client";

import { useState } from "react";
import { Comment } from "@/type/type";
import { format, parseISO } from "date-fns";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { toast } from "sonner";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface SlugProps {
  slug: string;
}

const CommentSection = ({ slug }: SlugProps) => {
  // Fetch comments for a specific slug
  const fetchComments = async (slug: string): Promise<Comment[]> => {
    try {
      const q = query(
        collection(db, "CommentList"),
        where("slug", "==", slug),
        orderBy("timestamp", "desc")
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => {
        const data = doc.data() as any;
        const ts = data.timestamp?.toDate
          ? data.timestamp.toDate().toISOString()
          : data.timestamp ?? new Date().toISOString();
        return {
          id: doc.id,
          name: data.name,
          message: data.message,
          email: data.email,
          timestamp: ts,
        } as Comment;
      });
    } catch (err: any) {
      toast.error("Failed to fetch comments");
      throw new Error(err?.message || "Failed to fetch comments");
    }
  };

  // Query with React Query
  const {
    data: commentList = [],
    isLoading,
    isError,
  }: UseQueryResult<Comment[]> = useQuery({
    queryKey: ["comments", slug],
    queryFn: () => fetchComments(slug),
  });

  // Pagination: show 4 comments at a time
  const [visibleCommentsCount, setVisibleCommentsCount] = useState<number>(4);

  const handleLoadMoreComments = () => {
    setVisibleCommentsCount((prev) => prev + 4);
  };

  const visibleComments = commentList.slice(0, visibleCommentsCount);

  return (
    <div className="space-y-8 lg:p-4 font-roboto">
      {isLoading && <p>Loading comments...</p>}
      {isError && <p>Error loading comments</p>}
      {!isLoading && commentList.length === 0 && (
        <p className="text-center text-secondary-600">No comments yet.</p>
      )}

      {visibleComments.map((comment) => (
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

      {visibleCommentsCount < commentList.length && (
        <div className="flex justify-center items-center my-14">
          <button
            type="button"
            onClick={handleLoadMoreComments}
            className="border border-brand-green-150 text-brand-green-250 p-2.5 lg:px-5 lg:py-4 rounded-[10px] text-xs cursor-pointer lg:text-base bg-white"
          >
            Read more comments
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
