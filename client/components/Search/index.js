import React from 'react'
import Link from 'next/Link'
import Breadcrumb from '../Breadcrumb'
import './Search.scss'

export default () => {
  const search = {
    items: [{
      id: 1,
      picture: 'img.jpg',
      price: { amount: 1200.32 },
      free_shipping: true,
      title: 'some product',
      location: 'argentina',
    }],
    categories: [
      {name: 'algo'},
      {name: 'deda'},
      {name: 'pepa peg'},
    ]
  }


  if (!search) {
    return (<div>Loading...</div>)
  }

  if (search.error) {
    return <div></div>
  }
  
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
                  $ {item.price.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
