<template>
  <div class="flex flex-row gap w-full h-full justify-between">
    <div class="w-[48%] h-[95%] flex flex-col rounded-md shadow-xl px-4 py-2 ">
      <p class="font-bold text-4xl text-center my-3">Cat Pool</p>
      <draggable
        class="flex flex-col gap-y-2 h-full"
        v-model="poolListStore.availableList"
        group="people"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div class="list-group-item">
            <CardBasic :name="element.name" />
          </div>
        </template>
      </draggable>
    </div>

    <div class="w-[48%] h-[95%] flex flex-col rounded-md shadow-xl px-4 py-2 ">
      <p class="font-bold text-4xl text-center my-3">Hangout Area</p>
      <draggable
        class="flex flex-col gap-y-2 h-full"
        v-model="poolListStore.calledList"
        group="people"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div class="list-group-item">
            <CardBasic :name="element.name" />
          </div>
        </template>
      </draggable>
    </div>
  </div>

  <ButtonBasic @click="doSomething" > Click me </ButtonBasic>

</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import CardBasic from '@/stories/card/CardBasic.vue'
import {useRosterLists} from "@/stores/useRosterLists";
import ButtonBasic from "@/components/ui/button/ButtonBasic.vue";


const poolListStore = useRosterLists();


const doSomething = () => {

  poolListStore.updateAvailableList([{
    name: 'new cat',
    id: 3
  }])
  console.log('doing something')
}





</script>

