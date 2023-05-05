import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'

import type Sailing from 'app/types/Sailing'
import type SelectOption from 'app/types/SelectOption'
import mockResponse from 'test/__mocks__/sailings_response.json'
import getUniqueCruiselines from 'app/utils/getUniqueCruiselines'
import getUniqueDeparturePorts from 'app/utils/getUniqueDeparturePorts'
import SailingFilters, { type SailingFiltersProps } from './SailingFilters'

const mockSailings = mockResponse.results as Sailing[]
const allCruiselines = getUniqueCruiselines(mockSailings)
const allDeparturePorts = getUniqueDeparturePorts(mockSailings)
const makeOptions = (items: string[]): SelectOption[] => [
  {
    display: 'Any',
    value: 'any',
  },
  ...items.map((item) => ({
    display: item,
    value: item,
  })),
]

export default {
  title: 'components/molecules/SailingFilters',
  component: SailingFilters,
  argTypes: {
    portOptions: { control: 'object' },
    cruiselineOptions: { control: 'object' },
    selectedPort: { control: 'text' },
    selectedCruiseline: { control: 'text' },
    onPortChange: { control: 'none' },
    onCruiselineChange: { control: 'none' },
  },
} as Meta<typeof SailingFilters>

const Template: StoryFn<typeof SailingFilters> = (
  args: SailingFiltersProps
) => <SailingFilters {...args} />

export const Sample = Template.bind({})
Sample.args = {
  portOptions: makeOptions(allDeparturePorts),
  cruiselineOptions: makeOptions(allCruiselines),
  onPortChange: () => {
    // void
  },
  onCruiselineChange: () => {
    // void
  },
}

export const SelectedPort = Template.bind({})
SelectedPort.args = {
  ...Sample.args,
  selectedPort: allDeparturePorts[Math.floor(allDeparturePorts.length / 2)],
}

export const SelectedCruiseline = Template.bind({})
SelectedCruiseline.args = {
  ...Sample.args,
  selectedCruiseline: allCruiselines[Math.floor(allCruiselines.length / 2)],
}

export const SelectedBoth = Template.bind({})
SelectedBoth.args = {
  ...SelectedPort.args,
  ...SelectedCruiseline.args,
}

export const NoOptions = Template.bind({})
NoOptions.args = {
  ...Sample.args,
  portOptions: [],
  cruiselineOptions: [],
}
