import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';


Vue.use(Vuex)

let api = axios.create({
  baseURL: '//localhost:3000/api/'
})

export default new Vuex.Store({
  state: {
    topics: [],
    activeTopic: {},
    activeRants: [],
    activeRant: {}

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
    },
    setActiveRant(state, data) {
      state.activeRant = data
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
        let res = await api.get('rants/topic/' + payload.topicId)
        commit('setActiveRants', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteRantById({ dispatch, commit }, payload) {
      try {
        let res = await api.delete('rants/' + payload)
        commit('setActiveRant', {})
        router.push({ name: 'topic' })
        console.log(res)
      } catch (error) {
        console.error(error)
      }
    },
    async getRantById({ dispatch, commit }, payload) {
      try {
        let res = await api.get('rants/' + payload.rantId)
        commit('setActiveRant', res.data)
        router.push({ name: 'rant' })
        console.log(res)
      } catch (error) {
        console.error(error)
      }
    },
    async addRant({ dispatch, commit }, payload) {
      try {
        let res = await api.post('rants/', payload)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
