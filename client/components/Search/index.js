import React, { useState, useEffect } from 'react'
import Link from 'next/Link'
import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

import Breadcrumb from '../Breadcrumb'
import './Search.scss'

import { GET_ITEMS } from '../../utils/apiEndpoint'

const numberWithCommas = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const Search = withRouter(({ router }) => {
  const [search, setSearch] = useState({})

  useEffect(() => {
    function fetchSearch() {
      fetch(GET_ITEMS + router.query.q)
        .then(res => {
          return res.json()
        })
        .then(res => {
          setSearch(res)
        })
    }

    fetchSearch()
  }, [router])
  
  return (
    <div className="Search">
      {search.categories && <Breadcrumb categories={search.categories} />}
      <div className="Search-list">
        {search.items && search.items.map((item, index) => (
          <Link href={`/items/${item.id}`} key={index}>
            <a className="Search-item">
              <div className="Search-item-image">
                <img src={item.picture} alt="itemsearch" />
              </div>
              <div className="Search-item-info">
                <h2>
                  $ {numberWithCommas(item.price.amount)}
                  {item.free_shipping && (
                    <span className="Search-item-shipping">
                      <img src="/images/ic_shipping.png" srcSet="/images/ic_shipping@2x.png" alt={item.title} />
                    </span>
                  )}
                  <span className="Search-item-location">
                    {item.location}
                  </span>
                </h2>
                <h3>
                  {item.title}
                </h3>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
})

export default Search