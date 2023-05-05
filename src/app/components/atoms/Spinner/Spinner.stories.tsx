import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import Spinner, { type SpinnerProps } from './Spinner'

export default {
  title: 'components/atoms/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['blue', 'red', 'green'],
    },
    colorHex: { control: 'color', description: 'overrides color prop' },
    className: { control: 'text' },
  },
} as Meta<typeof Spinner>

const Template: StoryFn<typeof Spinner> = (args: SpinnerProps) => (
  <Spinner {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const Blue = Template.bind({})
Blue.args = {
  color: 'blue',
}

export const Red = Template.bind({})
Red.args = {
  color: 'red',
}

export const Green = Template.bind({})
Green.args = {
  color: 'green',
}

export const CustomHex = Template.bind({})
CustomHex.args = {
  colorHex: '#bada55',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}
