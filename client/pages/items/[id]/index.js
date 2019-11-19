import React from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '../../../components/Layout'
import Product from '../../../components/Product'

import { GET_ITEM } from '../../../utils/apiEndpoint'

const Item = ({ data }) => (
  <Layout>
    {data && <Product product={data} />}
  </Layout>
)

Item.getInitialProps = async function(context) {
  const { id } = context.query

  const res = await fetch(GET_ITEM + id)
  const data = await res.json()

  return { data }
}

export default Item