import type Sailing from 'app/types/Sailing'
import mockResponse from 'test/__mocks__/sailings_response.json'
import filterByDeparturePort from './filterByDeparturePort'

const mockSailings = mockResponse.results as Sailing[]

describe('utils/filterByDeparturePort', () => {
  it('should filter by specified cruiseline', () => {
    const port = mockSailings[0].itinerary[0]?.split(',')[0]
    const result = filterByDeparturePort(mockSailings, port)
    expect(result.length).toBeGreaterThan(0)
    expect(result.length).toBeLessThan(mockSailings.length)
    expect(result).toEqual(
      mockSailings.filter((s) => s.itinerary[0]?.split(',')[0] === port)
    )
  })

  it('should not filter when "any" is specified', () => {
    const result = filterByDeparturePort(mockSailings, 'any')
    expect(result).toEqual(mockSailings)
  })
})
