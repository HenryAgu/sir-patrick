import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/* CREATE */
export const createComment = mutation({
  args: {
    comment: v.string(),
    name: v.string(),
    email: v.string(),
    articleSlug: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("comments", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

/* READ */
export const getComments = query({
  args: {
    articleSlug: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("comments")
      .withIndex("by_articleSlug", (q) =>
        args.articleSlug ? q.eq("articleSlug", args.articleSlug) : q.eq("articleSlug", undefined)
      )
      .order("desc")
      .collect();
  },
});
