import type Sailing from 'app/types/Sailing'

const sortByDepartureDate = (
  sailings: Sailing[],
  direction?: 'ASC' | 'DESC'
): Sailing[] =>
  sailings.sort((a, b) => {
    switch (direction) {
      case 'DESC':
        return (
          new Date(b.departureDate).valueOf() -
          new Date(a.departureDate).valueOf()
        )
      case 'ASC':
      default:
        return (
          new Date(a.departureDate).valueOf() -
          new Date(b.departureDate).valueOf()
        )
    }
  })

export default sortByDepartureDate
