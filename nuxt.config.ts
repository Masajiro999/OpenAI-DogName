// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    openaiApiKey: process.env.OPEN_AI_KEY,
  },
})
