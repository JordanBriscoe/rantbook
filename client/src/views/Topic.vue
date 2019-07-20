<template>
  <div class="topic">
    <h1>{{topic.name}}</h1>
    <div v-if="!rants.length">
      <p>No Rants returning to home</p>
    </div>
    <div v-for="rant in rants">
      <h4>{{rant.title}}</h4>
      <p>{{rant.author}}</p>
      <button @click='viewRant(rant)' class=" booton btn btn-warning">Read DIS!!</button>
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
      setTimeout(() => {
        if (this.$store.state.activeRants.length <= 0) {
          this.$router.push({ name: 'Home' })
        }
      }, 1500)

    },
    computed: {
      topic() {
        return this.$store.state.activeTopic
      },
      rants() {
        return this.$store.state.activeRants
      }
    },
    methods: {
      viewRant(rant) {
        this.$router.push({ name: 'rant', params: { rantId: rant._id } })

      }
    },

    components: {}
  }
</script>


<style scoped>
  .booton:hover {
    background-color: indigo;
    color: ivory;
  }
</style>