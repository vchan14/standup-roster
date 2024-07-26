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
            <Input :default-value="element.name + ' ' + index"  />
          </div>
        </template>
      </draggable>
    </div>

    <div class="w-2/5 h-full rounded-md shadow-xl px-4 ">
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
            <Input :default-value="element.name + ' ' + index"  />
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
import { Input } from '@/components/ui/input'

export default {
  name: "ContentView",
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
    Input
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>