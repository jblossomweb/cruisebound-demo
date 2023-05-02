import type { NextApiRequest, NextApiResponse } from 'next'

export interface Data {
  message: string
}

const PingController = (
  //
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  res.status(200).json({
    message: 'Pong',
  })
}

export default PingController
