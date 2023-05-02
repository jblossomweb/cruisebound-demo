import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import HomePage from './HomePage'

export default {
  title: 'views/HomePage',
  component: HomePage,
} as Meta<typeof HomePage>

const Template: StoryFn<typeof HomePage> = () => <HomePage />

export const Sample = Template.bind({})
