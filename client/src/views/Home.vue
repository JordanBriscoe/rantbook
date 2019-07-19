<template>
    <div class="container-fluid">

        <h1>This is our Home Page</h1>
        <div class="home row">
            <div class="col-sm-4" v-for="topic in topics" @click="viewTopic(topic)">

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{topic.name}}</h5>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'home',
        data() {
            return {}
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
            }
        },
        components: {}
    }
</script>


<style scoped>

</style>