<template>
    <nav class="navbar navbar-expand-md fixed-top" style="background-color: #00274c;">
        <div class="container-fluid">
            <a class="navbar-brand"><img class="mx-auto its-logo" :src="'its-logo.png'" /></a>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "TopNavBar"
})
</script>

<style>
    .its-logo {
        max-width: 50%!important;
        padding: 1px;
    }
</style>