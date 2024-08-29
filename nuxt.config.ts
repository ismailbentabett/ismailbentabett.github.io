export default defineNuxtConfig({
  css: [
    "~/assets/css/iconoir.css",
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/css/style.css",
  ],
  plugins: [{ src: "@/plugins/aos", ssr: false }],
});
