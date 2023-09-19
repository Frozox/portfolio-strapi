import { apiClient } from "@portfolio/libs/src/utils/api";
// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const API_CLIENT = apiClient(`${import.meta.env.STRAPI_BASE_URL}/api`);