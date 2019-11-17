import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '../../../components/Layout'
import Product from '../../../components/Product'

const Item = () => {
  const [product, setProduct] = useState(null)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    setProduct(fetchProduct())
  })

  const fetchProduct = () => {
    return {
      item: {
        id: 1,
        picture: 'img.jpg',
        price: { amount: 1200.32 },
        free_shipping: true,
        title: 'some product',
        location: 'argentina',
        condition: 'new',
        sold_quantity: 13,
        categories: [
          {name: 'algo'},
          {name: 'deda'},
          {name: 'pepa peg'},
        ]
      }
    }
  }


  if (!product) {
    return <div>Loading...</div>
  }

  if (product.error) {
    return <div></div>
  }

  return (
    <Layout>
      <Product product={product.item} />
    </Layout>
  )
}

export default Item