import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    updated: z.coerce.date().optional(),
    genes: z.boolean().default(false),
    flow: z.boolean().default(false),
    weave: z.boolean().default(false),
    lenses: z
      .array(
        z.object({
          ref: z.string(),
          sanskrit: z.string(),
          translit: z.string(),
          translation: z.string(),
          modernTitle: z.string(),
          modern: z.string(),
        })
      )
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essays };
