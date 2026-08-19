import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      image: z.string().optional(),
    }),
  }),
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
