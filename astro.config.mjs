// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
// import { sanity } from "@astrojs/sanity";
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: "6edws5st",
      dataset: "production",
      useCdn: false,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: true,
});
