import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/topics/:topicId',
      name: 'topic',
      component: function () {
        return import('./views/Topic.vue')//NOTE need to make a topics view
      }
    },
    {
      path: '/rants/:rantId',
      name: 'rant',
      component: function () {
        return import('./views/Rant.vue')//NOTE need to make a topics view
      }
    },
    // {
    //   path: '/topics/:topicId',
    //   name: 'topic',
    //   component: function () {
    //     return import('./views/Topic.vue')//NOTE need to make a topics view
    //   }
    // },


    {
      path: '*',
      redirect: '/Home'
    }
  ]
})
