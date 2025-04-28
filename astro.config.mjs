// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
// import { sanity } from "@astrojs/sanity";
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
  
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: true,
});
