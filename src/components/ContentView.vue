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
        <template #item="{ element }">
          <div class="list-group-item" :id="element.id" @dragstart="handleDragStart">
            <CardBasic :name="element.name" />
          </div>
        </template>
      </draggable>
    </div>

    <div class="flex justify-center items-center px-2"
         @dragover.prevent="handleDragOver"
         @dragleave="handleDragLeave"
         @drop="handleDrop">

      <div  :class="{ 'hover-effect': isHovering }">
        <Trash2 :size="49" />
      </div>
    </div>

    <div class="w-[48%] h-[95%] flex flex-col rounded-md shadow-xl px-4 py-2 ">
      <p class="font-bold text-4xl text-center my-3">Hangout Area</p>
      <draggable
          class="flex flex-col gap-y-2 h-full"
          v-model="poolListStore.calledList"
          group="people"
          itemKey="name"
      >
        <template #item="{ element }">
          <div class="list-group-item" :id="element.id" @dragstart="handleDragStart">
            <CardBasic :name="element.name" />
          </div>
        </template>
      </draggable>
    </div>
  </div>
  <ButtonBasic @click="getNextCat">Next Cat</ButtonBasic>

</template>

<script lang="ts" setup>
import draggable from 'vuedraggable';
import CardBasic from '@/stories/card/CardBasic.vue';
import { useRosterLists } from "@/stores/useRosterLists";
import ButtonBasic from "@/components/ui/button/ButtonBasic.vue";
import { Trash2 } from 'lucide-vue-next';
import { ref } from "vue";
import {useToast} from "@/components/ui/toast";

const {toast} = useToast();

const poolListStore = useRosterLists();
const draggedCardId = ref(0);
const isHovering = ref(false);

const handleDragStart = (event: DragEvent) => {
  draggedCardId.value = parseInt((event.target as HTMLElement).id);
};

const handleDragOver = () => {
  isHovering.value = true;
};

const handleDragLeave = () => {
  isHovering.value = false;
};

const handleDrop = (event: DragEvent) => {
  isHovering.value = false;
  poolListStore.deleteCat(draggedCardId.value);
};


const getNextCat = () => {
  const nextCat = poolListStore.getNextCat();
  if (!nextCat) {
    toast({
      description: `No more cats in the pool`
    })
  }
  console.log('next cat', nextCat);
};

</script>

<style scoped>
.hover-effect {
  background-color: #f0f0f0;
  outline: 2px dashed #ff0000;
}
</style>