/* eslint-disable import/no-extraneous-dependencies */
import { testApiHandler } from 'next-test-api-route-handler'
import PingController, { type Data } from './PingController'

describe('api/controllers/PingController', () => {
  it('should respond with expected data', async () => {
    await testApiHandler<Data>({
      handler: PingController,
      test: async ({ fetch }) => {
        const res = await fetch({ method: 'GET' })
        const data = await res.json()
        expect(res.status).toBe(200)
        expect(data).toMatchSnapshot()
      },
    })
  })
})
