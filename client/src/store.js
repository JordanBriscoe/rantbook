import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { platform } from 'os';


Vue.use(Vuex)

let api = axios.create({
  baseURL: '//localhost:3000/api/'
})

export default new Vuex.Store({
  state: {
    topics: [],
    activeTopic: {},
    activeRants: [],


  },
  mutations: {
    setTopics(state, data) {
      state.topics = data
    },
    setactiveTopic(state, data) {
      state.activeTopic = data
    },
    setActiveRants(state, data) {
      state.activeRants = data
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
    async getRantsByTopicId({ dispatch, commit }, payload) {
      try {
        let res = await api.get('rants/' + payload)
        commit('setActiveRants', res.data)
      } catch (error) {
        console.error(error)
      }
    },
  }
})
