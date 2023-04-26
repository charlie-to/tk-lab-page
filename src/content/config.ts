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
    image: z.string().optional(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  "member": memberCollection,
};
