import { defineConfig } from "astro/config";

const pages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: pages ? "https://edigabriel22.github.io" : "https://veritasenergia.com",
  base: pages ? "/veritas" : "/",
});
