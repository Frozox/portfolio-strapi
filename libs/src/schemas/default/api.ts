import { z } from "zod";
import type { Payload } from "@portfolio/strapi/src/common/schemas-to-ts/Payload.js";

export const apiResponseSchema = (
  payloadSchema: z.ZodTypeAny
): z.ZodType<Payload<z.infer<typeof payloadSchema>>> =>
  z.object({
    data: payloadSchema,
    meta: z.object({
      pagination: z
        .object({
          page: z.number(),
          pageSize: z.number(),
          pageCount: z.number(),
          total: z.number(),
        })
        .optional(),
    }),
  }) as z.ZodType<Payload<z.infer<typeof payloadSchema>>>;