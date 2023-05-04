import type Sailing from 'app/types/Sailing'
import mockResponse from 'test/__mocks__/sailings_response.json'
import filterByCruiseline from './filterByCruiseline'

const mockSailings = mockResponse.results as Sailing[]

describe('utils/filterByCruiseline', () => {
  it('should filter by specified cruiseline', () => {
    const cruiseLine = 'Princess Cruises'
    const result = filterByCruiseline(mockSailings, cruiseLine)
    expect(result).toEqual(
      mockSailings.filter((s) => s.ship.line.name === cruiseLine)
    )
  })

  it('should not filter when "any" is specified', () => {
    const result = filterByCruiseline(mockSailings, 'any')
    expect(result).toEqual(mockSailings)
  })
})
