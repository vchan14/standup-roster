<script setup lang="ts">

import Button from "@/components/ui/button/Button.vue";
import ContentView from "@/components/ContentView.vue";
import Toaster from '@/components/ui/toast/Toaster.vue'
import { Input } from '@/components/ui/input'
import {useToast} from "@/components/ui/toast";

const { toast } = useToast()


const addNewCat = () => {
  console.log('adding new cat')
  toast({
    description: 'new cat has been added',
  })
}

</script>

<template>
  <Toaster />
  <div class="app">
    <div class="flex flex-col gap-y-4">
      <p class="font-bold text-5xl">Cat Roaster!</p>
      <Button>Click me</Button>
      <Input @keyup.enter="addNewCat"/>

    </div>

    <ContentView/>
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
    row-gap: 20px;
  }
</style>
