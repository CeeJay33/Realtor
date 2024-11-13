import { resolve } from "path";
export default defineNuxtConfig({
  // publicRuntimeConfig: {
  //   rapidApiKey: process.env.NUXT_ENV_RAPIDAPI_KEY,
  // },
  modules: [""],

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
});