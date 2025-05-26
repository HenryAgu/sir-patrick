import { useEffect } from "react";
import supabase from "@/lib/supabase-client";
import { Comment } from "@/type/type";
import { format, parseISO } from "date-fns";
import {
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { toast } from "sonner";

interface SlugProps {
  slug: string;
}

const CommentSection = ({ slug }: SlugProps) => {
  const queryClient = useQueryClient();

  const fetchComments = async (slug: string): Promise<Comment[]> => {
    const { data, error } = await supabase
      .from("CommentList")
      .select("*")
      .eq("slug", slug);
    if (error) {
      toast.error("Failed to fetch comments");
      throw new Error(error.message);
    }
    return data;
  };

  const {
    data: commentList = [],
    isLoading,
    isError,
  }: UseQueryResult<Comment[]> = useQuery({
    queryKey: ["comments", slug],
    queryFn: () => fetchComments(slug),
  });

  // Realtime subscription setup
  useEffect(() => {
    const channel = supabase
      .channel("realtime-comments")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "CommentList",
        },
        (payload) => {
          console.log("New comment received:", payload.new);
          queryClient.invalidateQueries({ queryKey: ["comments"] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient]);

  return (
    <div className="space-y-8 lg:p-4 font-roboto">
      {isLoading && <p>Loading comments...</p>}
      {isError && <p>Error loading comments</p>}
      {commentList.map((comment) => (
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
      {/* <div className="flex justify-center items-center my-14">
        <button className="border border-brand-green-150 text-brand-green-250 p-2.5 lg:px-5 lg:py-4 rounded-[10px] text-xs cursor-pointer lg:text-base bg-white">
          Read more comment
        </button>
      </div> */}
    </div>
  );
};

export default CommentSection;
