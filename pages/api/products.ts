import RedBench from '../../assets/product-images/red-bench.png'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const products = [
  {
    id: 1,
    image: RedBench,
    title: 'Red Bench',
    category: 'People',
    price: 3.89,
    currency: '$',
    isBestseller: true
  }
]

export type Products = typeof products

export type Data = {
  products: Products
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ products })
}
