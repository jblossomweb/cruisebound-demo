import mockResponse from 'test/__mocks__/sailings_response.json'
import * as constants from 'app/constants.json'
import fetchSailings from './fetchSailings'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  })
) as jest.Mock

describe('services/fetchSailings', () => {
  beforeEach((fetch as jest.Mock).mockClear)

  it('should call fetch to expected endpoint', async () => {
    expect(fetch).not.toHaveBeenCalled()
    await fetchSailings()
    expect(fetch).toHaveBeenCalled()
    expect(fetch).toHaveBeenCalledWith(`${constants.API_BASE}/sailings`)
  })

  it('should yield expected payload on success', async () => {
    const resolved = await fetchSailings()
    expect(resolved.error).toBeFalsy()
    expect(resolved.sailings).not.toBeFalsy()
    expect(resolved.sailings.length).not.toBe(0)
    expect(resolved.sailings.length).toEqual(mockResponse.results.length)
    expect(resolved.sailings).toEqual(mockResponse.results)
  })

  it('should yield expected payload on error', async () => {
    const mockErrorMessage = 'uh oh! the server is on fire'
    ;(fetch as jest.Mock).mockRejectedValueOnce(new Error(mockErrorMessage))
    const resolved = await fetchSailings()
    expect(resolved.error).not.toBeFalsy()
    expect(resolved.error?.message).toEqual(mockErrorMessage)
    expect(resolved.sailings).not.toBeFalsy()
    expect(resolved.sailings.length).toBe(0)
  })
})
