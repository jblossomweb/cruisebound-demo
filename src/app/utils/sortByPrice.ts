import type Sailing from 'app/types/Sailing'

const sortByPrice = (
  sailings: Sailing[],
  direction?: 'ASC' | 'DESC'
): Sailing[] =>
  sailings.sort((a, b) => {
    switch (direction) {
      case 'DESC':
        return b.price - a.price
      case 'ASC':
      default:
        return a.price - b.price
    }
  })

export default sortByPrice
