import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/Link'
import fetch from 'isomorphic-unfetch'

import Breadcrumb from '../Breadcrumb'
import './Search.scss'

import { GET_ITEMS } from '../../utils/apiEndpoint'

const Search = ({ query }) => {
  const [search, setSearch] = useState({})

  useEffect(() => {
    function fetchSearch() {
      fetch(GET_ITEMS + query)
        .then(res => {
          return res.json()
        })
        .then(res => {
          setSearch(res)
        })
    }

    fetchSearch()
  }, [])
  
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
                  $ {item.price.amount},{item.price.decimals || "00"}
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
}

Search.propTypes = {
  query: PropTypes.string.isRequired
}

export default Search