import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import SailingsPage from './SailingsPage'

export default {
  title: 'views/SailingsPage',
  component: SailingsPage,
} as Meta<typeof SailingsPage>

const Template: StoryFn<typeof SailingsPage> = () => <SailingsPage />

export const Sample = Template.bind({})
