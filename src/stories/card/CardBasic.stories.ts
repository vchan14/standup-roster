import type { Meta, StoryObj } from '@storybook/vue3'

import CardBasic from '@/stories/card/CardBasic.vue'

const meta: Meta<typeof CardBasic> = {
  title: 'Example/CardBasic',
  component: CardBasic
}

export default meta
type Story = StoryObj<typeof CardBasic>

export const Primary: Story = {
  render: (args) => ({
    components: { CardBasic },
    setup() {
      return { args }
    },
    template: '<CardBasic v-bind="args" />'
  }),
  args: {
    // primary: true,
    // label: 'Button',
  }
}
