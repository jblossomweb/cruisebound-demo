import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import SailingSorters, { type SailingSortersProps } from './SailingSorters'

export default {
  title: 'components/molecules/SailingSorters',
  component: SailingSorters,
  argTypes: {
    sortValue: { control: 'text' },
    onSort: { control: 'none' },
  },
} as Meta<typeof SailingSorters>

const Template: StoryFn<typeof SailingSorters> = (
  args: SailingSortersProps
) => <SailingSorters {...args} />

export const Sample = Template.bind({})
Sample.args = {
  onSort: () => {
    // void
  },
}

export const Controlled = Template.bind({})
Controlled.args = {
  ...Sample.args,
  sortValue: 'price',
}
