export default defineNuxtConfig({
  css: [
    // "~/assets/css/aos.css",
    // "~/assets/css/bootstrap.min.css",
    "~/assets/css/iconoir.css",
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/css/style.css",
  ],
  plugins: [{ src: "@/plugins/aos", ssr: false }],

  app: {
    baseURL: "/ismailbentabett.github.io/", // Use your repository name
    buildAssetsDir: "/ismailbentabett.github.io/_nuxt/",
  },
});
