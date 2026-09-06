// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
  title: z.string(),
  description: z.string(),
  cover: image(),
  date: z.date(),
  skills: z.array(z.string()).optional(),
  featured: z.boolean().optional().default(false),
  }),
});

export const collections = { projects };