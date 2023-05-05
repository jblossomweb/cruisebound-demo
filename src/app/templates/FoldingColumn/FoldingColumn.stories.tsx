import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import FoldingColumn, { type FoldingColumnProps } from './FoldingColumn'

export default {
  title: 'templates/FoldingColumn',
  component: FoldingColumn,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'select', options: ['blue', 'red', 'green'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
} as Meta<typeof FoldingColumn>

const Template: StoryFn<typeof FoldingColumn> = (args: FoldingColumnProps) => (
  <FoldingColumn {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  leftContent: 'left side content',
  rightContent: 'right side content',
}
