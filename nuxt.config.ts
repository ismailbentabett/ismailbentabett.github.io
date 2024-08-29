export default defineNuxtConfig({
  target: "static", // Set the target to 'static' for generating static files
  router: {
    base: "/ismailbentabett.github.io/", // Set the base URL to match your repository name
  },
  css: [
    "~/assets/css/iconoir.css",
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/css/style.css",
  ],
  plugins: [{ src: "@/plugins/aos", ssr: false }],
});
