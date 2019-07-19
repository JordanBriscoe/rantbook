import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { platform } from 'os';
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
    deleteRant: {}

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
        let res = await api.get('rants/topic/' + payload.topicId)
        commit('setActiveRants', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteRantById({ dispatch, commit }, payload) {
      try {
        let res = await api.delete('rant/' + payload)
        router.push({ name: 'rant' })
        console.log(res)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
