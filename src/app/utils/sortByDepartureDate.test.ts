import type Sailing from 'app/types/Sailing'
import mockResponse from 'test/__mocks__/sailings_response.json'
import sortByDepartureDate from './sortByDepartureDate'

const mockSailings = mockResponse.results as Sailing[]

describe('utils/sortByDepartureDate', () => {
  it('should never change the number of results', () => {
    const result = sortByDepartureDate(mockSailings)
    expect(result.length).toEqual(mockSailings.length)

    const resultAsc = sortByDepartureDate(mockSailings, 'ASC')
    expect(resultAsc.length).toEqual(mockSailings.length)

    const resultDesc = sortByDepartureDate(mockSailings, 'DESC')
    expect(resultDesc.length).toEqual(mockSailings.length)
  })

  it('should sort ascending when specified', () => {
    const result = sortByDepartureDate(mockSailings, 'ASC')
    expect(result).toEqual(
      mockSailings.sort(
        (a, b) =>
          new Date(a.departureDate).valueOf() -
          new Date(b.departureDate).valueOf()
      )
    )
  })

  it('should sort descending when specified', () => {
    const result = sortByDepartureDate(mockSailings, 'DESC')
    expect(result).toEqual(
      mockSailings.sort(
        (a, b) =>
          new Date(b.departureDate).valueOf() -
          new Date(a.departureDate).valueOf()
      )
    )
  })

  it('should sort ascending by default', () => {
    const result = sortByDepartureDate(mockSailings)
    expect(result).toEqual(
      mockSailings.sort(
        (a, b) =>
          new Date(a.departureDate).valueOf() -
          new Date(b.departureDate).valueOf()
      )
    )
  })
})
