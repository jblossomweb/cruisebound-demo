import type Sailing from 'app/types/Sailing'
import mockResponse from 'test/__mocks__/sailings_response.json'
import sortByDuration from './sortByDuration'

const mockSailings = mockResponse.results as Sailing[]

describe('utils/sortByDuration', () => {
  it('should never change the number of results', () => {
    const result = sortByDuration(mockSailings)
    expect(result.length).toEqual(mockSailings.length)

    const resultAsc = sortByDuration(mockSailings, 'ASC')
    expect(resultAsc.length).toEqual(mockSailings.length)

    const resultDesc = sortByDuration(mockSailings, 'DESC')
    expect(resultDesc.length).toEqual(mockSailings.length)
  })

  it('should sort ascending when specified', () => {
    const result = sortByDuration(mockSailings, 'ASC')
    expect(result).toEqual(mockSailings.sort((a, b) => a.duration - b.duration))
  })

  it('should sort descending when specified', () => {
    const result = sortByDuration(mockSailings, 'DESC')
    expect(result).toEqual(mockSailings.sort((a, b) => b.duration - a.duration))
  })

  it('should sort ascending by default', () => {
    const result = sortByDuration(mockSailings)
    expect(result).toEqual(mockSailings.sort((a, b) => a.duration - b.duration))
  })
})
