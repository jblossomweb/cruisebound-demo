import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import type Sailing from 'app/types/Sailing'
import mockResponse from 'test/__mocks__/sailings_response.json'
import SailingCard, { type SailingCardProps } from './SailingCard'

const mockSailing = mockResponse.results[0] as Sailing

export default {
  title: 'components/molecules/SailingCard',
  component: SailingCard,
  argTypes: {
    sailing: { control: 'object' },
  },
} as Meta<typeof SailingCard>

const Template: StoryFn<typeof SailingCard> = (args: SailingCardProps) => (
  <SailingCard {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  sailing: mockSailing,
}

export const NoShipImage = Template.bind({})
NoShipImage.args = {
  sailing: {
    ...mockSailing,
    ship: {
      ...mockSailing.ship,
      image: undefined,
    },
  },
}

export const NoLineLogo = Template.bind({})
NoLineLogo.args = {
  sailing: {
    ...mockSailing,
    ship: {
      ...mockSailing.ship,
      line: {
        ...mockSailing.ship.line,
        logo: undefined,
      },
    },
  },
}

export const LongItinerary = Template.bind({})
LongItinerary.args = {
  sailing: {
    ...mockSailing,
    itinerary: [
      ...mockSailing.itinerary,
      ...mockSailing.itinerary,
      ...mockSailing.itinerary,
      ...mockSailing.itinerary,
      ...mockSailing.itinerary,
      ...mockSailing.itinerary,
      ...mockSailing.itinerary,
      ...mockSailing.itinerary,
    ],
  },
}
