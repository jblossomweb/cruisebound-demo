import type Line from 'app/types/Line'

interface Ship {
  name: string
  rating: number // 1 to 5
  reviews: number // total number of reviews
  image?: string // url to image src
  line: Line
}

export default Ship
