import type Sailing from 'app/types/Sailing'

const getUniqueDeparturePorts = (sailings: Sailing[]): string[] => [
  ...new Set(
    sailings
      .filter((sailing) => !!sailing.itinerary.length) // disregard empty itinerary
      .map((sailing) => sailing.itinerary[0].split(',')[0])
  ),
]

export default getUniqueDeparturePorts
