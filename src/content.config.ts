import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const casestudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casestudies' }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    tags: z.string(),
    period: z.string(),
    order: z.number(),
    summary: z.string(),
    cover: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    link: z.string(),
    kind: z.enum(['article', 'patent', 'thesis']),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    section: z.enum(['web3', 'science', 'thoughts']),
    coverImage: z.string().optional(),
  }),
});

export const collections = { casestudies, publications, blog };
