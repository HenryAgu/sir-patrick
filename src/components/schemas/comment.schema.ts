import { z } from "zod";

export const CommentSchema = z.object({
  comment: z.string().min(5, "Comment must be at least 5 characters"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

export type CommentFormData = z.infer<typeof CommentSchema>;
