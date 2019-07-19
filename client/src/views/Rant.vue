<template>
  <div class="rant">
    <h2>{{topic.name}}</h2>
    <h4>{{rant.title}}</h4>
    <p>{{rant.author}}</p>
    <p>{{rant.description}}</p>

    <button class="btn btn-outline-danger " @onclick="deleteRantById">Delete Rant</button>
  </div>
</template>


<script>
  export default {
    name: 'rant',
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>