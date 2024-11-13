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

  build: {
    // Ensures assets are built with the correct paths
    publicPath: '/_nuxt/',
  },

  compatibilityDate: "2024-11-11",
});