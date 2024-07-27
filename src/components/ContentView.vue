<template>
  <div class="flex flex-row gap w-full h-full justify-between">
    <div class="w-2/5 h-[95%] rounded-md shadow-xl px-4 py-2 ">
      <p class="font-bold text-4xl text-center my-3">Cat Pool</p>
      <draggable
        class="flex flex-col gap-y-2"
        :list="poolList"
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

    <div class="w-2/5 h-[95%] rounded-md shadow-xl px-4 py-2 ">
      <p class="font-bold text-4xl text-center my-3">Hangout Area</p>
      <draggable
        class="flex flex-col gap-y-2"
        :list="hangoutList"
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

</template>
<script lang="ts" setup>
import {computed} from 'vue'
import draggable from 'vuedraggable'
import CardBasic from '@/stories/card/CardBasic.vue'
import {usePoolListStore} from "@/stores/poolList";
import {useCatHangoutListStore} from "@/stores/hangoutAreaList";


const catPoolListStore = usePoolListStore();
const poolList = computed(() => catPoolListStore.catPoolList);


const catHangoutListStore = useCatHangoutListStore();
const hangoutList = computed(() => catHangoutListStore.hangoutAreaList);


</script>

