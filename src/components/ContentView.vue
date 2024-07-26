<template>
  <div class="flex flex-row gap w-full h-full justify-between">
    <div class="w-2/5 h-full rounded-md shadow-xl px-4">
      <p class="font-bold text-4xl text-center my-3">Cat Pool</p>
      <draggable
        class="flex flex-col gap-y-2"
        :list="list1"
        group="people"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div class="list-group-item">
            <CardBasic :name="element.name" />
          </div>
        </template>
      </draggable>
    </div>

    <div class="w-2/5 h-full rounded-md shadow-xl px-4">
      <p class="font-bold text-4xl text-center my-3">Hangout Area</p>
      <draggable
        class="flex flex-col gap-y-2"
        :list="list2"
        group="people"
        @change="log"
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
import { ref } from 'vue'
import draggable from 'vuedraggable'
import CardBasic from '@/stories/card/CardBasic.vue'

const list1 = ref([
  { name: 'John Cena', id: 1 },
  { name: 'Joao Joao', id: 2 },
  { name: 'Jean Rent', id: 3 },
  { name: 'Gerard', id: 4 }
])

const list2 = ref([
  { name: 'Domonic', id: 5 },
  { name: 'Fatima Sahin', id: 6 },
  { name: 'Johnson Glen', id: 7 }
])
</script>

