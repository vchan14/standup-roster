<template>
  <div class="flex gap-x-2">
    <div
      class="gap-x-3 w-full border border-gray-400 rounded-sm h-12 flex flex-row items-center p-2"
    >
      <Avatar class="px-2 w-8 h-8">
        <AvatarFallback>{{ getInitials(name) }}</AvatarFallback>
      </Avatar>
      <span>{{name}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AvatarFallback, AvatarImage } from 'radix-vue'
import Avatar from '@/components/ui/avatar/Avatar.vue'

// define props of name, image, isEditing
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
    default: ''
  },
})

// Write a function to grab the first letter of the name. e.g: 'Jonh Cena' => 'JC', "Beckham" => 'B'
const getInitials = (name: string|undefined) => {
  if (!name) return '';
  const [firstName, lastName] = name.split(' ')
  return `${firstName[0]}${lastName ? lastName[0] : ''}`
}
</script>

<style scoped></style>