<template>
  <div class="topic">
    <h1>{{topic.name}}</h1>
    <!-- title
author
preview -->
    <h5></h5>
    <!-- <p>{{topic.}}</p> -->

  </div>
</template>


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