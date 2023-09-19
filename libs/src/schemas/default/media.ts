import { z } from "zod";
import type { OverwriteMedia, OverwriteMediaFormat } from "../../interfaces/strapi/media.js";

export const mediaFormatSchema: z.ZodType<OverwriteMediaFormat> = z.object({
    name: z.string(),
    hash: z.string(),              
    ext: z.string(),
    mime: z.string(),
    width: z.number(),
    height: z.number(),
    size: z.number(),
    path: z.string().nullable(),
    url: z.string(),
});

export const mediaSchema: z.ZodType<OverwriteMedia> = z.object({
    id: z.number(),
    attributes: z.object({
        name: z.string(),
        alternativeText: z.string().nullable(),
        caption: z.string().nullable(),
        width: z.number(),
        height: z.number(),
        formats: z.object({
            thumbnail: mediaFormatSchema.optional(),
            small: mediaFormatSchema.optional(),
            medium: mediaFormatSchema.optional(),
            large: mediaFormatSchema.optional(),
        }),
        hash: z.string(),
        ext: z.string(),
        mime: z.string(),
        size: z.number(),
        url: z.string(),
        previewUrl: z.string().nullable(),
        provider: z.string(),
        provider_metadata: z.string().nullable(),
        createdAt: z.string().datetime(),
        updatedAt: z.string().datetime(),
    }),
});