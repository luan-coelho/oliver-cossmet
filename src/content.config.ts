import { defineCollection, z } from 'astro:content'
import { file } from 'astro/loaders'

const services = defineCollection({
  loader: file('src/data/services.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    icon: z.string(),
    description: z.string(),
    items: z.array(
      z.object({
        title: z.string(),
        details: z.string(),
        description: z.string(),
      })
    ),
  }),
})

const clients = defineCollection({
  loader: file('src/data/clients.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    city: z.string(),
  }),
})

const trainings = defineCollection({
  loader: file('src/data/trainings.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    nr: z.string(),
    description: z.string(),
  }),
})

const exams = defineCollection({
  loader: file('src/data/exams.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
  }),
})

const certificates = defineCollection({
  loader: file('src/data/certificates.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    entity: z.string(),
    state: z.string(),
  }),
})

const credenciados = defineCollection({
  loader: file('src/data/credenciados.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    city: z.string(),
  }),
})

export const collections = { services, clients, trainings, exams, certificates, credenciados }
