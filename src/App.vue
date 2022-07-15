<template>
  <TopNavBar />
  <div class="wrapper">
    <Sidebar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopNavBar from "@/components/layout/TopNavBar.vue";
import Sidebar from '@/components/layout/Sidebar.vue';

export default defineComponent({
  components: {
    TopNavBar,
    Sidebar
}
})
</script>

<style>
  .wrapper {
      display: flex;
      width: 100%;
      align-items: stretch;
  }
</style>