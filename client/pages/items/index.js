import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../../components/Layout'
import Search from '../../components/Search'

export default withRouter(({ router }) => {
  // console.log(router.query.q);
  // TODO: fix query
  
  return (
    <Layout>
      {router.query.q && <Search query={router.query.q} />}
    </Layout>
  )
})