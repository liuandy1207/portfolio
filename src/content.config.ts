// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  skills: z.array(z.string()).optional(),
  featured: z.boolean().optional().default(false),
  award: z.string().optional(),
  gallery: z.array(
    z.object({
      image: image(),
      caption: z.string().optional(),
    })
  ).min(1, 'Add at least one image — the first is used as the cover.'),
  demoUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  devpostUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };