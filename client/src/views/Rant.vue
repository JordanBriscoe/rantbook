<template>
  <div class="rant">
    <!-- <h2>{{topic.name}}</h2> -->
    <h4>{{rant.title}}</h4>
    <p>{{rant.author}}</p>
    <p>{{rant.description}}</p>

    <button class="btn btn-outline-danger " @click="deleteRant">Delete Rant</button><br>
    <form action="">
      <div class="input-group mb-3 mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Author</span>
        </div>
        <input type="text" class="form-control text-center" placeholder="Author..." aria-label="Username"
          aria-describedby="basic-addon1">
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Comment here</span>
        </div>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <button class=" mt-1 btn btn-outline-warning border border-dark text-body" @click="addComment">Submit
        Comment</button>
    </form>

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
      },
      addComment() {
        this.$store.dispatch('addComment', this.rant._id)
      }
    },

    components: {}
  }
</script>


<style scoped>

</style>