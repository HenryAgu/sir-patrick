import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  comments: defineTable({
    comment: v.string(),
    name: v.string(),
    email: v.string(),
    createdAt: v.number(),
    articleSlug: v.optional(v.string()),
  })
    .index("by_createdAt", ["createdAt"])
    .index("by_articleSlug", ["articleSlug"]),
});
