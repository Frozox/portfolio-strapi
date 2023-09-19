import { z } from "zod";
import { mediaSchema } from "../default/media.js";
import type { OverwriteTestimonial } from "../../interfaces/entities/testimonial.js";

export const testimonialSchema: z.ZodType<OverwriteTestimonial> = z.object({
  id: z.number(),
  attributes: z.object({
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    publishedAt: z.string().datetime().optional(),
    username: z.string(),
    avatar: z.object({
      data: mediaSchema,
    }),
    postedAt: z.string().datetime(),
    content: z.string(),
  }),
});