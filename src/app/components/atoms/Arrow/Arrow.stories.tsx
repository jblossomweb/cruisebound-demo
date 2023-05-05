import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import Arrow, { type ArrowProps } from './Arrow'

export default {
  title: 'components/atoms/Arrow',
  component: Arrow,
  argTypes: {
    color: { control: 'color' },
    size: { control: 'number' },
  },
} as Meta<typeof Arrow>

const Template: StoryFn<typeof Arrow> = (args: ArrowProps) => (
  <Arrow {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const Color = Template.bind({})
Color.args = {
  color: '#ff0000',
}

export const Sized = Template.bind({})
Sized.args = {
  size: 50,
}

export const Both = Template.bind({})
Both.args = {
  color: '#ff0000',
  size: 50,
}
