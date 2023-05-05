import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import type Sailing from 'app/types/Sailing'
import mockResponse from 'test/__mocks__/sailings_response.json'
import SailingsPage, { type SailingsPageProps } from './SailingsPage'

const mockSailings = mockResponse.results as Sailing[]

export default {
  title: 'views/SailingsPage',
  component: SailingsPage,
} as Meta<typeof SailingsPage>

const Template: StoryFn<typeof SailingsPage> = (args: SailingsPageProps) => (
  <SailingsPage {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  sailings: mockSailings,
}

export const Empty = Template.bind({})
Empty.args = {
  sailings: [],
}

export const HasError = Template.bind({})
HasError.args = {
  sailings: [],
  error: new Error('uh oh! something awful happened'),
}
