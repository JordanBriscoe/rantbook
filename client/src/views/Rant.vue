<template>
  <div class="rant">
    <!-- <h2>{{topic.name}}</h2> -->
    <img v-if="rant.image" :src="rant.image" alt="">
    <h4>{{rant.title}}</h4>
    <p>{{rant.author}}</p>
    <p>{{rant.description}}</p>
    <button class="btn btn-outline-danger " @click="deleteRant">Delete Rant</button><br>

    <form @submit.prevent="addComment">
      <div class="input-group mb-3 mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Author</span>
        </div>
        <input type="text" class="form-control text-center" placeholder="Author..." aria-label="Username"
          aria-describedby="basic-addon1" v-model="newComment.author">
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Comment here</span>
        </div>
        <textarea class="form-control" aria-label="With textarea" v-model="newComment.content"></textarea>
      </div>
      <button class=" mt-1 btn btn-outline-warning border border-dark text-body" type="submit">Submit
        Comment</button>
    </form>
    <div class="comment" v-for="comment in comments">
      <h3>{{comment.author}}</h3>
      <h4>{{comment.content}}</h4>
      <button class="btn btn- btn-outline-danger" @click="deleteComment(comment)"> Delete Comment</button>
    </div>

  </div>
</template>


<script>
  export default {
    // name: ['rant', 'comment'],
    name: 'rant',
    data() {
      return {
        newComment: {
          rant: this.$route.params.rantId
        }
      }
    },
    mounted() {
      let dataToSend = {
        rantId: this.$route.params.rantId
      }
      this.$store.dispatch('getRantById', dataToSend)
      this.$store.dispatch('getCommentsByRant', dataToSend)

    },
    computed: {
      rant() {
        return this.$store.state.activeRant
      },
      comments() {
        return this.$store.state.comments
      }
    },
    methods: {
      deleteRant() {
        this.$store.dispatch('deleteRantById', this.rant._id)
      },
      viewComment(comment) {
        this.$router.push({ name: 'comment', params: { commentId: comment._id } })
      },
      addComment() {
        this.$store.dispatch('addComment', this.newComment)
      },
      deleteComment(remove) {
        this.$store.dispatch('deleteComment', remove)
      }
    },

    components: {}
  }
</script>


<style scoped>
  img {
    height: 400px;
    width: 400px;
  }
</style>