import React from 'react'
// import { withRouter } from 'next/router'
import Layout from '../../components/Layout'
import Search from '../../components/Search'

export default ({ router }) => {
  return (
    <Layout>
      <Search />
      {/* {router.query.q && <Search query={router.query.q} />} */}
    </Layout>
  )
}