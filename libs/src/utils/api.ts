import { z } from "zod";
import { apiResponseSchema } from "../schemas/default/api.js";
import { HttpMethod } from "../interfaces/common.js";
import { Zodios, makeErrors } from "@zodios/core";
import { testimonialSchema } from "../schemas/entities/testimonial.js";

export const apiClient = new Zodios("http://localhost:1337/api", [
  {
    method: HttpMethod.GET,
    path: "/testimonials",
    alias: "getTestimonials",
    response: apiResponseSchema(testimonialSchema.array()),
    parameters: [{ name: "populate", type: "Query", schema: z.string() }],
  },
]);
