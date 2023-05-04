import type Sailing from 'app/types/Sailing'
import mockResponse from 'test/__mocks__/sailings_response.json'
import getUniqueCruiselines from './getUniqueCruiselines'

const mockSailings = mockResponse.results as Sailing[]

describe('utils/getUniqueCruiselines', () => {
  it('should return a list of distinct departure ports from a list of sailings', () => {
    const result = getUniqueCruiselines(mockSailings)
    expect(result).toEqual([
      'MSC Cruises',
      'Holland America Line',
      'Princess Cruises',
      'Royal Caribbean International',
      'Norwegian Cruise Line',
      'Seabourn Cruise Line',
      'Carnival Cruise Line',
      'Celebrity Cruises',
      'Oceania Cruises',
      'Azamara',
      'Cunard',
    ])
  })
})
