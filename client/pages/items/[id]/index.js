import React from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '../../../components/Layout'
import Product from '../../../components/Product'

import { GET_ITEM } from '../../../utils/apiEndpoint'

/**
 * Item page
 * 
 * Product description from an item
 */
const Item = ({ data }) => (
  <Layout>
    <Product product={data} />
  </Layout>
)

/**
 * Fetching data from query context
 */
Item.getInitialProps = async function(context) {
  const { id } = context.query

  const res = await fetch(GET_ITEM + id)
  const data = await res.json()

  return { data }
}

export default Item