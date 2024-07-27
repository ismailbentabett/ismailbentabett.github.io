export default defineNuxtConfig({
  css: [
    "~/assets/css/iconoir.css",
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/css/style.css",
  ],
  plugins: [{ src: "@/plugins/aos", mode: "client" }],

  app: {
    baseURL: "/ismailbentabett.github.io/", // Use your repository name
  },

  // Add this for GitHub Pages deployment
  ssr: false,
  target: "static",

  // Use this instead of buildAssetsDir
  vite: {
    base: "/ismailbentabett.github.io/",
  },
});