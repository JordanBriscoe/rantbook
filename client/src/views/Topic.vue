<template>
  <div class="topic">
    <div v-for="rant in rants">
      <h1>{{topic.name}}</h1>
      <!-- title
author
preview -->
      <!-- <h3>{{rant.title}}</h3> -->
      <!-- <p>{{topic.}}</p> -->
    </div>
  </div>
</template>
<!-- NOTE UPDATE TRELLO  -->

<script>
  export default {
    name: 'topic',
    data() {
      return {}
    },
    mounted() {
      let dataToSend = {
        topicId: this.$route.params.topicId
      }
      this.$store.dispatch('getTopicById', dataToSend)
      this.$store.dispatch('getRantsByTopicId', dataToSend)
    },
    computed: {
      topic() {
        return this.$store.state.activeTopic
      },
      rants() {
        return this.$store.state.activeRants
      }
    },
    methods: {},

    components: {}
  }
</script>


<style scoped>

</style>