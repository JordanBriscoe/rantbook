import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';
import { stat } from 'fs';


Vue.use(Vuex)

let api = axios.create({
  baseURL: '//localhost:3000/api/'
})

export default new Vuex.Store({
  state: {
    topics: [],
    activeTopic: {},
    activeRants: [],
    activeRant: {},
    comments: []

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
    },
    setComments(state, data) {
      state.comments = data
    },
    deleteComment(state, data) {
      // find matching element
      let targetIndex = state.comments.findIndex(curr => curr._id === data._id)
      // remove element at target index
      state.comments.splice(targetIndex, 1)
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
        router.push({ name: 'topic', params: { topicId: this.state.activeTopic._id } })
        console.log(res)
      } catch (error) {
        console.error(error)
      }
    },
    async getRantById({ dispatch, commit }, payload) {
      try {
        let res = await api.get('rants/' + payload.rantId)
        commit('setActiveRant', res.data)
        //router.push({ name: 'rant' })
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
    },
    async addComment({ dispatch, commit }, payload) {
      try {
        let res = await api.post('comments/', payload)
        commit('setComments', res.data)
        dispatch('getRantById', { rantId: payload.rant })
      } catch (error) {
        console.error(error)
      }
    },
    async getCommentsByRant({ dispatch, commit }, payload) {
      try {
        let res = await api.get('rants/' + payload.rantId + '/comments')
        commit('setComments', res.data)
      }
      catch (error) {
        console.error(error)
      }
    },
    async deleteComment({ dispatch, commit }, payload) {
      try {
        console.log(payload)
        let res = await api.delete('comments/' + payload._id)
        commit('deleteComment', payload)
        // router.push({ name: 'rant' })
      } catch (error) {
        console.error(error)
      }
    }

  }
})
