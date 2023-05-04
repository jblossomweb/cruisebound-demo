import type Sailing from 'app/types/Sailing'

const filterByCruiseline = (
  sailings: Sailing[],
  filterCruiseline: string
): Sailing[] =>
  sailings.filter((sailing) => {
    if (
      filterCruiseline !== 'any' &&
      filterCruiseline !== sailing.ship.line.name
    ) {
      return false
    }

    return true
  })

export default filterByCruiseline
