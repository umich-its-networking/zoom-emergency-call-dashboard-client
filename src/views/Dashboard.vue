<template>
    <div class="dashboard container">
        <!-- <h1>Dashboard</h1> -->
        <div v-for="call in events" :key="call">
            <CallDetails :callData="call.data" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import CallDetails from '../components/emergencyCalls/CallDetails.vue';

export default defineComponent({
    name: "DashBoard",
    components: {
        CallDetails
    },
    computed: {
        ...mapGetters('serverEvents', {
            events: 'getEvents'
        })
    },
    methods: {
        ...mapActions('serverEvents', {
            listen: 'listenForEvents'
        })
    },
    created() {
        this.listen()
    }
})
</script>

<style>
    .dashboard {
        padding: 50px!important;
        margin-top: 5%;
    }
</style>