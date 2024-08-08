<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

// Define props with default values
const props = withDefaults(
  defineProps<{
    buttonLabel: string
    dialogTitle: string
    dialogDescription?: string
    cancelButtonLabel: string
    actionButtonLabel: string
    onAction?: () => void
  }>(),
  {
    buttonLabel: '',
    dialogTitle: 'Are you sure you want to reset?',
    dialogDescription: '',
    cancelButtonLabel: 'Cancel',
    actionButtonLabel: 'Yes',
    onAction: undefined
  }
)

// Function to handle the action button click
const handleAction = () => {
  if (props.onAction) {
    props.onAction()
  }
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <Button variant="outline">
        {{ buttonLabel }}
        <slot></slot>
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{{ dialogTitle }}</AlertDialogTitle>
        <AlertDialogDescription v-if="dialogDescription">
          {{ dialogDescription }}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>{{ cancelButtonLabel }}</AlertDialogCancel>
        <AlertDialogAction @click="handleAction">{{ actionButtonLabel }}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style scoped>
/* Optional: Add any custom styles for the component here. */
</style>
