import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import type Sailing from 'app/types/Sailing'
import mockResponse from 'test/__mocks__/sailings_response.json'
import SailingList, { type SailingListProps } from './SailingList'

const mockSailings = mockResponse.results as Sailing[]

export default {
  title: 'components/organisms/SailingList',
  component: SailingList,
  argTypes: {
    sailings: { control: 'object' },
    error: { control: 'object' },
  },
} as Meta<typeof SailingList>

const Template: StoryFn<typeof SailingList> = (args: SailingListProps) => (
  <SailingList {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  sailings: mockSailings,
}

export const WithError = Template.bind({})
WithError.args = {
  sailings: [],
  error: new Error('uh oh! something went wrong!'),
}

export const WithReset = Template.bind({})
WithReset.args = {
  ...Sample.args,
  showReset: true,
}

export const Filtering = Template.bind({})
Filtering.args = {
  ...Sample.args,
  filtering: true,
}
