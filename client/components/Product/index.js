import React from 'react'
import PropTypes from 'prop-types'

import './product.scss'

/**
 * Parser number to add points each 3 number
 * @param {number} number The price value
 * @returns {string}      Get the same number with thousands separation
 */
const numberWithCommas = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const Product = ({ product }) => {
  if (!product.author) {
    return <div>Loading...</div>
  }

  return (
    <div className="Product">
      <div className="Product-item">
        <div className="Product-description">
          <div className="Product-description-image">
            <img src={product.item.picture} alt={product.item.title} />
          </div>
          <div className="Product-description-product">
            <h2>Descripción del producto</h2>
            <div>{product.item.description}</div>
          </div>
        </div>
        <div className="Product-description-info">
          <div className="Product-description-sold">
            {product.item.condition} - {product.item.sold_quantity} vendidos
          </div>
          <h3>{product.item.title}</h3>
          <h2>
            $ {numberWithCommas(product.item.price.amount)}
            <span className="Product-description-decimals">
              {product.item.price.decimals || "00"}
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

Product.propTypes = {
  product: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired
    }),
    item: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.shape({
        currency: PropTypes.string,
        amount: PropTypes.number,
        decimals: PropTypes.number
      }),
      picture: PropTypes.string,
      condition: PropTypes.string,
      free_shipping: PropTypes.bool,
      sold_quantity: PropTypes.number,
      description: PropTypes.string
    })
  }).isRequired
}

Product.defaultProps = {
  product: {}
}

export default Product