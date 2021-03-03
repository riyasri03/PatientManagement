import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    setList (state, value) {
      state.list = value
    }
  },
  actions: {
    setLoginAction ({ commit }, value) {
      const axiosConfig = {
        url: '/',
        method: 'get', // default
        baseURL: 'https://jsonplaceholder.typicode.com/todos'
      }
      axios(axiosConfig)
        .then(e => {
          console.log(e)
          commit('setlist', e.data)
        })
        .catch(e => console.log(e))
    }
  },
  getters: {
    getList (state) {
      return state.list
    }
  }
})
