import type Sailing from 'app/types/Sailing'

const sortByDuration = (
  sailings: Sailing[],
  direction?: 'ASC' | 'DESC'
): Sailing[] =>
  sailings.sort((a, b) => {
    switch (direction) {
      case 'DESC':
        return b.duration - a.duration
      case 'ASC':
      default:
        return a.duration - b.duration
    }
  })

export default sortByDuration
