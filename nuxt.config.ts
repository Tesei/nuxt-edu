// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBaseURL: 'https://jsonplaceholder.typicode.com',
      fakeStore: 'https://fakestoreapi.com'
    }
  },

  modules: ['@nuxt/image']
})