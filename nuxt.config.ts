export default defineNuxtConfig({
  target: "static", // Ensure target is set to static
  router: {
    base: "/ismailbentabett.github.io/", // Replace with your repository name
  },
  css: [
    "~/assets/css/iconoir.css",
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/css/style.css",
  ],
  plugins: [{ src: "@/plugins/aos", ssr: false }],
});