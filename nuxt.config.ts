// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    shim: false,
  },
  css: ["@/assets/css/main.css"],
  app: {
    pageTransition: {
      name: "fade",
      mode: "in-out",
    },
  },
});
