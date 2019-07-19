<template>
    <div class="home row">
        <h1>This is our Home Page</h1>
        <div v-for="topic in topics" @click="viewTopic(topic)">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{topic.title}}</h5>
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