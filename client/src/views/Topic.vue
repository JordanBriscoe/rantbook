<template>
  <div class="topic">
    <h1>{{topic.name}}</h1>
    <div v-if="!rants.length">
      <p>No Rants returning to home</p>
    </div>
    .<div class="container">
      <div class="row" v-for="rant in rants">
        <div class="col-3">
          <div @click="updoot(rant)">
            <darryl></darryl>
          </div>
          <h5>{{updootTotal}}</h5>
          <div @click="downdoot(rant)">
            <zach></zach>
          </div>
        </div>
        <div class="col-9">
          <h4>{{rant.title}}</h4>
          <p>{{rant.author}}</p>
          <button @click='viewRant(rant)' class=" booton btn btn-warning">Read DIS!!</button>
        </div>
      </div>

    </div>
  </div>

</template>
<!-- NOTE UPDATE TRELLO  -->

<script>
  import Darryl from "@/components/Darryl.vue"
  import Zach from "@/components/Zach.vue"

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
      },
      updootTotal() {
        let dootsArray = this.$store.state.activeDoots;
        if (dootsArray.length) {
          let output = 0;
          for (let i = 0; i < dootsArray.length; i++) {
            output += dootsArray[i].value
          }
          return output
        }
        else {
          return 0;
        }
      }
    },
    methods: {
      viewRant(rant) {
        this.$router.push({ name: 'rant', params: { rantId: rant._id } })

      },
      updoot(rant) {
        let payload = {
          value: 1,
          rant: rant._id
        }
        this.$store.dispatch('updoot', payload)
      },
      downdoot(rant) {
        let payload = {
          value: -1,
          rant: rant._id
        }
        this.$store.dispatch('downdoot', payload)
      }
    },

    components: {
      'darryl': Darryl,
      'zach': Zach
    }
  }
</script>


<style scoped>
  .booton:hover {
    background-color: indigo;
    color: ivory;
  }
</style>