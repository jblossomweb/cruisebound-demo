import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import Dropdown, { type DropdownProps } from './Dropdown'

export default {
  title: 'components/atoms/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },
    label: { control: 'text' },
    value: { control: 'text' },
    naked: { control: 'boolean' },
    shadow: { control: 'boolean' },
    wide: { control: 'boolean' },
    onSelect: { control: 'none' },
  },
} as Meta<typeof Dropdown>

const Template: StoryFn<typeof Dropdown> = (args: DropdownProps) => (
  <Dropdown {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  options: [
    { display: 'Foo', value: 'foo' },
    { display: 'Bar', value: 'bar' },
    { display: 'Buzz', value: 'buzz' },
  ],
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  ...Sample.args,
  label: 'label',
}

export const Naked = Template.bind({})
Naked.args = {
  ...Sample.args,
  naked: true,
}

export const Shadow = Template.bind({})
Shadow.args = {
  ...Sample.args,
  shadow: true,
}

export const Wide = Template.bind({})
Wide.args = {
  ...Sample.args,
  wide: true,
}
