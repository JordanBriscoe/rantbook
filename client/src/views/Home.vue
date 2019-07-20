<template>
    <div class="container-fluid">

        <h1>This is our Home Page</h1>
        <div class="home row pt-3 ">
            <div class="col-sm-4 mt-1" v-for="topic in topics">
                <div class="card  border border-dark">
                    <div class="card-body">
                        <router-link :to="{name: 'topic', params: { topicId: topic._id }}">
                            <h5 class="card-title">{{topic.name}}</h5>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-5">
            <form class="row" @submit.prevent="addRant">
                <div class="form-group col-6">
                    <label for="title">Title</label>
                    <input type="text" max=60 name="title" class="form-control" id="title" placeholder="Enter a title"
                        v-model="newRant.title">
                </div>
                <div class="form-group col-6">
                    <label for="author">Author</label>
                    <input type="text" name="author" class="form-control" id="author" placeholder="Enter a author"
                        v-model="newRant.author">
                </div>
                <div class="form-group d-flex col-6" v-for="(topic,index) in topics">
                    <input type="radio" :id="index" :value="topic._id" v-model="newRant.topic">
                    <label :for="index">{{topic.name}}</label>
                    <br>
                </div>
            </form>
        </div>
        <div class="form-group col-6">
            <label for="description">Description</label>
            <textarea rows="5" cols="50" type="text" name="description" class="form-control" id="description"
                placeholder="Enter a description" v-model="newRant.description"></textarea>
        </div>
        <button type="submit" class="btn btn-warning  border border-dark col-4 offset-4"
            @click="addRant">Submit</button>
        </form>
    </div>

    </div>
</template>


<script>
    export default {
        name: 'home',
        data() {
            return {
                newRant: {}
            }
        },
        mounted() {
            this.$store.dispatch('getTopics')
        },
        computed: {
            topics() {
                return this.$store.state.topics
            }
        },
        methods: {
            // viewTopic(topic) {
            //     this.$router.push({ name: 'topic', params: { topicId: topic._id } })
            // },
            addRant(event) {
                this.$store.dispatch('addRant', this.newRant)
                this.newRant = {}
            }
        },
        components: {}
    }
</script>


<style scoped>

</style>