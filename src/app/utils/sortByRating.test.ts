import type Sailing from 'app/types/Sailing'
import mockResponse from 'test/__mocks__/sailings_response.json'
import sortByRating from './sortByRating'

const mockSailings = mockResponse.results as Sailing[]

describe('utils/sortByRating', () => {
  it('should never change the number of results', () => {
    const result = sortByRating(mockSailings)
    expect(result.length).toEqual(mockSailings.length)

    const resultAsc = sortByRating(mockSailings, 'ASC')
    expect(resultAsc.length).toEqual(mockSailings.length)

    const resultDesc = sortByRating(mockSailings, 'DESC')
    expect(resultDesc.length).toEqual(mockSailings.length)
  })

  it('should sort ascending when specified', () => {
    const result = sortByRating(mockSailings, 'ASC')
    expect(result).toEqual(
      mockSailings.sort((a, b) => a.ship.rating - b.ship.rating)
    )
  })

  it('should sort descending when specified', () => {
    const result = sortByRating(mockSailings, 'DESC')
    expect(result).toEqual(
      mockSailings.sort((a, b) => b.ship.rating - a.ship.rating)
    )
  })

  it('should sort ascending by default', () => {
    const result = sortByRating(mockSailings)
    expect(result).toEqual(
      mockSailings.sort((a, b) => a.ship.rating - b.ship.rating)
    )
  })
})
