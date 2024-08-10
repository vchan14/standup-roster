<script setup lang="ts">
import ContentView from '@/components/ContentView.vue'
import Toaster from '@/components/ui/toast/Toaster.vue'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/toast'
import { useRosterLists } from '@/stores/useRosterLists'
import { RotateCw } from 'lucide-vue-next'
import ButtonBasic from '@/components/ui/button/ButtonBasic.vue'
import { PawPrint } from 'lucide-vue-next'
import {signInWithGoogle} from "@/firebase/fireAuth.js";
import {useUser} from "@/stores/useUser";
import AlertDialogBasic from "@/stories/alertDialog/AlertDialogBasic.vue";

const { toast } = useToast()

const rosterStore = useRosterLists()

const addNewCat = (e: Event) => {
  const name = (e.target as HTMLInputElement).value
  if (!name) {
    return
  }
  e.target.value = ''
  console.log('adding new cat')
  const id = new Date().getTime()
  rosterStore.addCat({
    name,
    id
  })

  toast({
    description: `New cat has been added - ${name}`
  })
}

const resetLists = () => {
  rosterStore.resetLists()
  toast({
    description: `Lists have been reset`
  })
}

const userStore = useUser();
</script>

<template>
  <Toaster />
  <div class="top absolute flex justify-between w-full px-2">
    <AlertDialogBasic
      :on-action="resetLists"
    >
      <RotateCw :size="24" />
    </AlertDialogBasic>

    <ButtonBasic v-if="userStore.user === null"
        @click="signInWithGoogle" variant="outline" >
      Sign In
    </ButtonBasic>
    <div class="flex flex-row gap-x-4 items-center" v-else>
      <span>{{userStore.user?.displayName}}</span>
      <ButtonBasic
          @click="userStore.clearUser()" variant="outline" >
        Sign Out
      </ButtonBasic>
    </div>

  </div>
  <div class="app">
    <div class="flex flex-col gap-y-4">
      <span><paw-print class="text-5xl" /></span>
      <p class="text-5xl">Cat Standup!</p>
      <Input
        class="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        type="text"
        placeholder="👩‍💻 or 👨‍💻"
        @keyup.enter="addNewCat"
      />
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
  padding: 10px;
  margin: auto;
  row-gap: 20px;
  max-width: 50em;
}
</style>
