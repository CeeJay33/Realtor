import { resolve } from "path";
export default defineNuxtConfig({
  // publicRuntimeConfig: {
  //   rapidApiKey: process.env.NUXT_ENV_RAPIDAPI_KEY,
  // },

  modules: ["@nuxtjs/google-fonts"],

  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
      },
    ],
  },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  css: ["~/assets/css/main.css"],

  // devtools: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-11-11",

  devtools: {
    enabled: false,
  },
});
