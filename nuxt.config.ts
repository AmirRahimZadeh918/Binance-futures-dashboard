export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxtjs/color-mode", "@pinia/nuxt"],
  imports: {
    dirs: [
      "constants",
      "composables",
      "composables/logic",
      "composables/services/marketData",
    ],
  },
  components: true,
  css: ["~/assets/css/main.css", "~/assets/css/transitions.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    classSuffix: "",
  },
  ssr: false,
});
