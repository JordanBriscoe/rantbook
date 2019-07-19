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
    setTopics(state, data) {
      state.topics = data
    },
    setactiveTopic(state, data) {
      state.activiceTopic = data
    }

  },
  actions: {
    async getTopics({ dispatch, commit }) {
      try {
        let res = await api.get('topics')
        commit("setTopics", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getTopicById({ dispatch, commit }, payload) {
      try {
        let res = await api.get('topics/' + payload.topicId)
        commit('setactiveTopic', res.data)
      } catch (error) {
        console.error(error)
      }

    },
  }
})
