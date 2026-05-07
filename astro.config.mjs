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
        return ![
          "/thank-you",
          "/markdown-page",
          "/classes",
          "/show-for-hire",
          "/costume-hire",
          "/contact",
        ].includes(pathname);
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: true,
});
