// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
// import { sanity } from "@astrojs/sanity";
// https://astro.build/config
export default defineConfig({
  site: "https://danceblocbrazil.com",
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/$/, "");
        return !["/thank-you", "/404", "/404.html"].includes(pathname);
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: true,
});
