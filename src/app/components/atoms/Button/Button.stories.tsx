import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import Button, { type ButtonProps } from './Button'

export default {
  title: 'components/atoms/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    color: {
      control: 'select',
      options: ['blue', 'red', 'green', 'slate', 'white'],
    },
    size: { control: 'select', options: ['tiny', 'small', 'medium', 'large'] },
    shadow: { control: 'boolean' },
  },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
)

export const Default = Template.bind({})
Default.args = {
  text: 'Default',
}

export const Blue = Template.bind({})
Blue.args = {
  text: 'Blue',
  color: 'blue',
}

export const Red = Template.bind({})
Red.args = {
  text: 'Red',
  color: 'red',
}

export const Green = Template.bind({})
Green.args = {
  text: 'Green',
  color: 'green',
}

export const Slate = Template.bind({})
Slate.args = {
  text: 'Slate',
  color: 'slate',
}

export const White = Template.bind({})
White.args = {
  text: 'White',
  color: 'white',
}

export const Tiny = Template.bind({})
Tiny.args = {
  text: 'Tiny',
  size: 'tiny',
}

export const Small = Template.bind({})
Small.args = {
  text: 'Small',
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  text: 'Medium',
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  text: 'Large',
  size: 'large',
}

export const Shadow = Template.bind({})
Shadow.args = {
  text: 'Shadow',
  shadow: true,
}

export const NoText = Template.bind({})
NoText.args = {}
