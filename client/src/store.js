import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'


Vue.use(Vuex)

let api = axios.create({
  baseURL: '//localhost:3000/'
})

export default new Vuex.Store({
  state: {
    topics: [],
    activiceTopic: {},

  },
  mutations: {

  },
  actions: {
    async getTopics({ dispatch, commit }) {
      try {
        let res = await api.get('topics') ||
          commit("setTopics", res.data)
      } catch{ commit[] }
    }

  }
})
