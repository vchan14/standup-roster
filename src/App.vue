<script setup lang="ts">
import ContentView from '@/components/ContentView.vue'
import Toaster from '@/components/ui/toast/Toaster.vue'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/toast'
import {useRosterLists} from "@/stores/useRosterLists";

const { toast } = useToast()

const rosterStore = useRosterLists();

const addNewCat = (e: Event) => {
  const name =(e.target as HTMLInputElement).value
  if (!name) {
    return
  }
  e.target.value = '';
  console.log('adding new cat')
  const id = new Date().getTime()
  rosterStore.addCat({
    name,
    id
  })

  toast({
    description: `new cat has been added ${name}`
  })
}
</script>

<template>
  <Toaster />
  <div class="app">
    <div class="flex flex-col gap-y-4">
      <p class=" text-5xl">Cat Roster!</p>
      <p class="font-bold text-2xl text-center">Add new member</p>
      <Input placeholder="new cat" @keyup.enter="addNewCat" />
    </div>
    <ContentView />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 10px ;
  margin: auto;
  row-gap: 20px;
  max-width: 50em;
}
</style>
