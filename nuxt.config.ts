// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  typescript: {
    shim: false,
  },
  css: ["@/assets/css/main.css"],
  app: {
    pageTransition: {
      name: "fade",
      mode: "in-out",
    },
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "My wallet",
      meta: [{ name: "description", content: "Wallet balance component" }],
    },
  },
});
