// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Accepts "YYYY-MM" (no day) or "YYYY-MM-DD" (with day)
const projectDate = z
  .string()
  .regex(/^\d{4}-\d{2}(-\d{2})?$/, 'Use YYYY-MM or YYYY-MM-DD');

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
  title: z.string(),
  description: z.string(),
  cover: image(),
  coverCaption: z.string().optional(),
  startDate: projectDate,
  endDate: projectDate.optional(), // omit for an ongoing/single-point project
  skills: z.array(z.string()).optional(),
  featured: z.boolean().optional().default(false),
  award: z.string().optional(),
  gallery: z.array(
    z.discriminatedUnion('type', [
      z.object({
        type: z.literal('image'),
        image: image(),
        caption: z.string().optional(),
      }),
      z.object({
        type: z.literal('video'),
        src: z.string(), // path under public/, e.g. "/videos/demo.mp4"
        poster: image().optional(),
        caption: z.string().optional(),
      }),
      z.object({
        type: z.literal('youtube'),
        url: z.string().url(), // paste any normal YouTube link (watch, share, or embed)
        caption: z.string().optional(),
      }),
    ])
  ).optional(),
  demoUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  devpostUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };