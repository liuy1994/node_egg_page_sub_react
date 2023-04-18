// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export const getAllPostIdsApi = (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  res.status(200).json([ { params: { id: 'pre-rendering' } }, { params: { id: 'ssg-ssr' } } ]
  )
}
