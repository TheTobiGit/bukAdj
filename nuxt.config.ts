// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt", "nuxt-vuefire"],

  vuefire: {
    config: {
      apiKey: "AIzaSyC70DCZQemmnniH1NMQcHb0_wiSBFVkA7w",
      authDomain: "groove--on.firebaseapp.com",
      projectId: "groove--on",
      storageBucket: "groove--on.appspot.com",
      messagingSenderId: "122877943114",
      appId: "1:122877943114:web:3c43681d7ba9c6d06f35b3"
    },
    auth: {
      enabled: true,
    },
  },

  ssr: false,

  app: {
    head: {
      meta: [
        { name: "theme-color", content: "#206A5" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
      ],
      charset: "utf-8",
    },
  },
});