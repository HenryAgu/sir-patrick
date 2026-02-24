import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentFormData, CommentSchema } from "../schemas/comment.schema";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { api } from "../../../convex/_generated/api";

interface CommentSectionProps {
  slug: string;
}

const CommentForm = ({ slug }: CommentSectionProps) => {
  const createComment = useMutation(api.comments.createComment);

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
  } = useForm<CommentFormData>({
    // @ts-ignore - TypeScript is having trouble inferring the type of the resolver
    resolver: zodResolver(CommentSchema),
  });

  const onSubmit = async (data: CommentFormData) => {
    try {
      await createComment({ ...data, articleSlug: slug });
      toast.success("Your comment has been added!");
      reset();
    } catch (error) {
      toast.error("Failed to add comment. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4 lg:gap-y-8"
    >
      {/* Comment */}
      <div className="flex flex-col">
        <textarea
          {...register("comment")}
          className={`border ${
            errors.comment ? "border-red-500" : "border-brand-gray-100"
          } resize-none bg-white h-[200px] lg:h-[309px] rounded-[10px] px-4 lg:px-6 py-4 lg:py-[35px] text-secondary-600 text-base lg:text-xl font-normal`}
          placeholder="Type here"
        />
        {errors.comment && (
          <span className="text-red-500 text-sm mt-1">
            {errors.comment.message}
          </span>
        )}
      </div>

      {/* Name */}
      <div className="flex flex-col">
        <input
          type="text"
          {...register("name")}
          className={`border ${
            errors.name ? "border-red-500" : "border-brand-gray-100"
          } bg-white h-14 lg:h-[110px] rounded-[10px] px-4 lg:px-6 py-3 text-secondary-600 text-base lg:text-xl font-normal`}
          placeholder="Name *"
        />
        {errors.name && (
          <span className="text-red-500 text-sm mt-1">
            {errors.name.message}
          </span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <input
          type="text"
          {...register("email")}
          className={`border ${
            errors.email ? "border-red-500" : "border-brand-gray-100"
          } bg-white h-14 lg:h-[110px] rounded-[10px] px-4 lg:px-6 py-3 text-secondary-600 text-base lg:text-xl font-normal`}
          placeholder="Email *"
        />
        {errors.email && (
          <span className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="cursor-pointer lg:w-fit bg-green-900 px-11.5 py-2.5 rounded-[12px] text-white font-roboto font-normal text-lg lg:text-[31px]"
      >
        Post comment
      </button>
    </form>
  );
};

export default CommentForm;
