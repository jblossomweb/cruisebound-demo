import type Sailing from 'app/types/Sailing'
import mockResponse from 'test/__mocks__/sailings_response.json'
import sortByPrice from './sortByPrice'

const mockSailings = mockResponse.results as Sailing[]

describe('utils/sortByPrice', () => {
  it('should never change the number of results', () => {
    const result = sortByPrice(mockSailings)
    expect(result.length).toEqual(mockSailings.length)

    const resultAsc = sortByPrice(mockSailings, 'ASC')
    expect(resultAsc.length).toEqual(mockSailings.length)

    const resultDesc = sortByPrice(mockSailings, 'DESC')
    expect(resultDesc.length).toEqual(mockSailings.length)
  })

  it('should sort ascending when specified', () => {
    const result = sortByPrice(mockSailings, 'ASC')
    expect(result).toEqual(mockSailings.sort((a, b) => a.price - b.price))
  })

  it('should sort descending when specified', () => {
    const result = sortByPrice(mockSailings, 'DESC')
    expect(result).toEqual(mockSailings.sort((a, b) => b.price - a.price))
  })

  it('should sort ascending by default', () => {
    const result = sortByPrice(mockSailings)
    expect(result).toEqual(mockSailings.sort((a, b) => a.price - b.price))
  })
})
