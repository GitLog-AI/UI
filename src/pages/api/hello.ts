// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getBase from '@/utils/api/base'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(getBase())
  res.status(200).json({ name: 'John Doe' })
}
