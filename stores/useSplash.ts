import { defineStore } from 'pinia'

export const useMyUseSplashStore = defineStore({
  id: 'myUseSplashStore',
  state: () => ({ useSplash: true }), // set useSplash to true
  actions: {}
})
