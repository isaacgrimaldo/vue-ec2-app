import { defineStore, createPinia } from 'pinia'

export const useStore = defineStore('user', {
  state: () => {
    return {
      name: '',

    }
  },
  getters: {
    getNameUser: (state) => state.name
  },
  actions: {
    setName(name:string) {
      this.name = name
    },
  },
})

const pinia = createPinia()

export default pinia