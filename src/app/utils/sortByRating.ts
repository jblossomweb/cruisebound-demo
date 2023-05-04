import type Sailing from 'app/types/Sailing'

const sortByRating = (
  sailings: Sailing[],
  direction?: 'ASC' | 'DESC'
): Sailing[] =>
  sailings.sort((a, b) => {
    switch (direction) {
      case 'DESC':
        return b.ship.rating - a.ship.rating
      case 'ASC':
      default:
        return a.ship.rating - b.ship.rating
    }
  })

export default sortByRating
