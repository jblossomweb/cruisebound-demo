import type Sailing from 'app/types/Sailing'
import mockResponse from 'test/__mocks__/sailings_response.json'
import getUniqueDeparturePorts from './getUniqueDeparturePorts'

const mockSailings = mockResponse.results as Sailing[]

describe('utils/getUniqueDeparturePorts', () => {
  it('should return a list of distinct departure ports from a list of sailings', () => {
    const result = getUniqueDeparturePorts(mockSailings)
    expect(result).toEqual([
      'Naples',
      'Sydney',
      'Brisbane',
      'Singapore',
      'Le Havre (Paris)',
      'Colon',
      'Barcelona',
      'Port Canaveral',
      'Los Angeles',
      'Fort Lauderdale (Port Everglades)',
      'Sockhna',
      'Lisbon',
      'Miami',
      'Isla Baltra',
      'Genoa',
      'Hamburg',
      'Palermo',
      'La Spezia (Cinque Terre)',
      'San Francisco',
      'New York',
      'Honolulu',
      'San Diego',
      'Abu Dhabi',
      'New Orleans',
      'Cape Town',
      'Jeddah',
      'Rotterdam',
      'Tenerife',
      'Civitavecchia (Rome)',
      'Mosquera Islet',
      'Dubai',
      'Tokyo',
      'Palma de Mallorca',
      'Southampton',
    ])
  })
})
