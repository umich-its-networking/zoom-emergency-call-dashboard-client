import { createStore } from 'vuex'
import { serverEvents } from './modules/server-events'
export default createStore({
  state: {
    root: true,
    version: "1.0.0"
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    serverEvents
  }
})
