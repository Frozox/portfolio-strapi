import type { Overwrite } from "../common.js";
import type { Testimonial } from "@portfolio/strapi/src/api/testimonial/content-types/testimonial/testimonial.js";
import type { OverwriteMedia } from "../strapi/media.js";

export type OverwriteTestimonial = Overwrite<
  Testimonial,
  {
    attributes: Overwrite<
      Testimonial["attributes"],
      {
        createdAt: string;
        updatedAt: string;
        publishedAt?: string;
        avatar: { data: OverwriteMedia };
        postedAt: string;
      }
    >;
  }
>;
