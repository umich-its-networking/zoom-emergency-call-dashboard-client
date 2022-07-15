<template>
    <nav id="sidebar">
        <div class="container-fluid options">
            <ul class="list-unstyled components">
                <span :class="[
                    status ? 'connected': 'disconnected',
                ]">
                </span>
                <p>Connection Status</p>
                <hr>
                <li>
                    <router-link to="/" class="routerlink">Dashboard</router-link> 
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
export default defineComponent({
    name: "SideBar",
    computed: {
        ...mapGetters('serverEvents', {
            status: 'getConnectionStatus'
        }),
    }
})
</script>

<style>
    #sidebar {
        padding: 15px;
        min-width: 250px;
        max-width: 250px;
        min-height: 100vh;
        background-color: #00274c;
        color: white;
        transition: all 0.3s;
    }
    #sidebar .sidebar-header {
        padding: 20px;
        background: #595b63;
    }
    #sidebar ul.components {
        padding: 20px 0;
        border-bottom: 1px solid #47748b;
        margin: revert;
        margin-top: 20%
    }
    .disconnected {
        height: 25px;
        width: 25px;
        background-color: red;
        border-radius: 50%;
        display: inline-block;
    }
    .connected {
        height: 25px;
        width: 25px;
        background-color: green;
        border-radius: 50%;
        display: inline-block;
    }
    a { text-decoration: none; color: white; }
</style>