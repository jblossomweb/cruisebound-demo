import type Ship from 'app/types/Ship'
import type Location from 'app/types/Location'
import type Region from 'app/types/Region'

interface Sailing {
  id?: number | string
  price: number
  name: string
  ship: Ship
  itinerary: Location[]
  region: Region
  departureDate: string // ISO format YYYY-MM-DD
  returnDate: string // ISO format YYYY-MM-DD
  duration: number // in days
}

export default Sailing
