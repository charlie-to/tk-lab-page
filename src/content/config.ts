// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const memberCollection = defineCollection({
  schema: z.object({
    name: z.object({
      main: z.string(),
      sub: z.string().optional(),
    }),
    major: z.string(),
    grade: z.string(),
    imagePath: z.string().optional(),
  }),
});

// blog&news
const blogsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tag: z.array(z.string()),
    lead: z.string().optional(),
    coverImagePath: z.string().optional(),
    author_name_main: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  "member": memberCollection,
  "blog": blogsCollection,
};