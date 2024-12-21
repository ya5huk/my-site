// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      // icon
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/site-icon.png' }],
    },
  },

  modules: ['@nuxt/content'],
})