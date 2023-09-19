import type { Media } from "@portfolio/strapi/src/common/schemas-to-ts/Media.js";
import type { MediaFormat } from "@portfolio/strapi/src/common/schemas-to-ts/MediaFormat.js";
import type { Overwrite } from "../common.js";

export type OverwriteMediaFormat = Overwrite<MediaFormat, {
    path: string | null,
}>

export type OverwriteMedia = Overwrite<Media, {
    attributes: {
        alternativeText: string | null,
        caption: string | null,
        formats: {
            thumbnail?: OverwriteMediaFormat,
            small?: OverwriteMediaFormat,
            medium?: OverwriteMediaFormat,
            large?: OverwriteMediaFormat,
        },
        previewUrl: string | null,
        provider_metadata: string | null,
    }
}>