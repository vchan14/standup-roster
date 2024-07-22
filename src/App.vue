<script setup lang="ts">

import Button from "@/components/ui/button/Button.vue";
</script>

<template>
  <div class="app">
    <h1>hello world</h1>
    <Button>Click me</Button>
  </div>

</template>

<style scoped>
  .app {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100vh;
    padding: 10px 5%;
  }
</style>
