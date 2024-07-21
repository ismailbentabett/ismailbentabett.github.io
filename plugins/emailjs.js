import emailjs from "emailjs-com";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("emailjs", emailjs);
});
