<template>
  <div class="rant">
    <!-- <h2>{{topic.name}}</h2> -->
    <h4>{{rant.title}}</h4>
    <p>{{rant.author}}</p>
    <p>{{rant.description}}</p>

    <button class="btn btn-outline-danger " @click="deleteRant">Delete Rant</button>
  </div>
</template>


<script>
  export default {
    name: 'rant',
    data() {
      return {}
    },
    mounted() {
      let dataToSend = {
        rantId: this.$route.params.rantId
      }
      this.$store.dispatch('getRantById', dataToSend)
    },
    computed: {
      rant() {
        return this.$store.state.activeRant
      }
    },
    methods: {
      deleteRant() {
        this.$store.dispatch('deleteRantById', this.rant._id)

      }
    },
    components: {}
  }
</script>


<style scoped>

</style>