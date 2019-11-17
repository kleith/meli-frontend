import React from 'react'
import PropTypes from 'prop-types'

import Breadcrumb from '../Breadcrumb'
import './product.scss'

const Product = ({ product }) => {

  if (!product) {
    return <div>Loading...</div>
    // return <Loading />
  }

  if (product.error) {
    return <div></div>
  }

  const getCondition = (condition) => {
    if (condition === 'used') {
      return 'Usado'
    } else if (condition === 'new') {
      return 'Nuevo'
    }
  }

  return (
    <div className="Product">
      <Breadcrumb categories={product.categories} />
      <div className="Product-item">
        <div className="Product-description">
          <div className="Product-description-image">
            <img src={product.picture} alt={product.title} />
          </div>
          <div className="Product-description-product">
            <h2>Descripción del producto</h2>
            <div>{product.description}</div>
          </div>
        </div>
        <div className="Product-description-info">
          <div className="Product-description-sold">
            {getCondition(product.condition)} - {product.sold_quantity} vendidos
          </div>
          <h3>{product.title}</h3>
          <h2>
            $ {product.price.amount.toLocaleString(undefined)}
            <span className="Product-description-decimals">
              {product.price.decimals}
            </span>
          </h2>
          <button className="Product-description-buy">
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

Product.PropTypes = {
  product: PropTypes.shape({
    categories: PropTypes.shape,
    picture: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    condition: PropTypes.string,
    sold_quantity: PropTypes.number,
    price: PropTypes.shape({
      amount: PropTypes.number,
      decimals: PropTypes.number,
    }),
  })
}

export default Product