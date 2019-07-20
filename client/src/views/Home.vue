<template>
    <div class="container-fluid">

        <h1>This is our Home Page</h1>
        <div class="home row pt-3">
            <div class="col-sm-4" v-for="topic in topics" @click="viewTopic(topic)">

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{topic.name}}</h5>
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
                <div class="form-group col-6">
                    <label for="topic">Topic</label>
                    <input type="text" name="topic" class="form-control" id="topic" placeholder="Enter a topic"
                        v-model="newRant.topic">
                </div>
                <div class="form-group col-6">
                    <label for="description">Description</label>
                    <textarea rows="5" cols="50" type="text" name="description" class="form-control" id="description"
                        placeholder="Enter a description" v-model="newRant.description"></textarea>
                </div>
                <button type="submit" class="btn btn-warning col-4 offset-4">Submit</button>
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
            viewTopic(topic) {
                this.$router.push({ name: 'topic', params: { topicId: topic._id } })
            },
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