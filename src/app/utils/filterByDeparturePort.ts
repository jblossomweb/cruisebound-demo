import type Sailing from 'app/types/Sailing'

const filterByDeparturePort = (
  sailings: Sailing[],
  filterPort: string
): Sailing[] =>
  sailings.filter((sailing) => {
    if (
      filterPort !== 'any' &&
      filterPort !== sailing.itinerary[0]?.split(',')[0]
    ) {
      return false
    }

    return true
  })

export default filterByDeparturePort
