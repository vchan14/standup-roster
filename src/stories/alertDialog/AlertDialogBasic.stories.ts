import type { Meta, StoryFn } from '@storybook/vue3'
import AlertDialogBasic from '@/stories/alertDialog/AlertDialogBasic.vue'

export default {
  title: 'Components/AlertDialogBasic',
  component: AlertDialogBasic,
  argTypes: {
    buttonLabel: { control: 'text' },
    dialogTitle: { control: 'text' },
    dialogDescription: { control: 'text' },
    cancelButtonLabel: { control: 'text' },
    actionButtonLabel: { control: 'text' },
    onAction: { action: 'onAction' }
  }
} as Meta<typeof AlertDialogBasic>

const Template: StoryFn<typeof AlertDialogBasic> = (args) => ({
  components: { AlertDialogBasic },
  setup() {
    return { args }
  },
  template: '<AlertDialogBasic v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  buttonLabel: 'Show Dialog',
  dialogTitle: 'Are you absolutely sure?',
  dialogDescription:
    'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
  cancelButtonLabel: 'Cancel',
  actionButtonLabel: 'Continue'
}

export const CustomLabels = Template.bind({})
CustomLabels.args = {
  buttonLabel: 'Delete Account',
  dialogTitle: 'Confirm Deletion',
  dialogDescription: 'This action is irreversible. Are you sure you want to delete your account?',
  cancelButtonLabel: 'No, Keep Account',
  actionButtonLabel: 'Yes, Delete'
}

export const NoDescription = Template.bind({})
NoDescription.args = {
  buttonLabel: 'Dangerous Action',
  dialogTitle: 'Proceed with Caution',
  cancelButtonLabel: 'Abort',
  actionButtonLabel: 'Proceed',
  dialogDescription: '' // No description provided
}

export const ActionCallback = Template.bind({})
ActionCallback.args = {
  buttonLabel: 'Show Alert',
  dialogTitle: 'Execute Action',
  cancelButtonLabel: 'No',
  actionButtonLabel: 'Yes'
}
ActionCallback.argTypes = {
  onAction: { action: 'actionTriggered' }
}
