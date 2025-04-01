import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const noticias = defineCollection({
  loader: glob({ base: "./src/content/noticias", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().optional(),
    autor: z.string().optional(),
    cnp: z.string().optional(),
    fotos: z.string().optional(),
  }),
});

const avisos = defineCollection({
  loader: glob({ base: "./src/content/avisos", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional().default("/default.png"),
    destacado: z.boolean().optional(),
    interesados: z.string().optional(),
  }),
});

const carreras = defineCollection({
  loader: glob({ base: "./src/content/carreras", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    nombre_carrera: z.string(),
    titulo: z.string(),
    duracion: z.string().optional(),
    icon: z.string().optional(),
    lugar: z.string().optional(),
    color: z.string().default("#a5a5a5"),
  }),
});

export const collections = { noticias, avisos, carreras };
