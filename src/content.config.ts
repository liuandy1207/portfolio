// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
  title: z.string(),
  description: z.string(),
  cover: image(),
  coverCaption: z.string().optional(),
  date: z.date(),
  skills: z.array(z.string()).optional(),
  featured: z.boolean().optional().default(false),
  award: z.string().optional(),
  gallery: z.array(
    z.object({
      image: image(),
      caption: z.string().optional(),
    })
  ).optional(),
  demoUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  devpostUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };