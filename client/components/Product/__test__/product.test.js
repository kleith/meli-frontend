import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react'

import Product from '../index'

afterEach(cleanup);

describe('Product component', () => {
  it('render without crash', () => {
    const product = {
      "author": {
        "name": "Sergio",
        "lastname": "Martínez"
      },
      "item": {
        "id": "MLA826197541",
        "title": "Nintendo Switch 32gb Standard Gris Y Negra",
        "price": {
          "currency": "ARS",
          "amount": 31999,
          "decimals": 0
        },
        "picture": "http://mla-s2-p.mlstatic.com/600878-MLA32731749234_112019-I.jpg",
        "condition": "Nuevo",
        "free_shipping": true,
        "sold_quantity": 0,
        "description": "Descripcion"
      }
    }
    

    renderer.create(<Product product={product}></Product>)
  })

  it('should crash', () => {
    const tree = renderer.create(<Product></Product>)

    expect(tree.root.props.product).toStrictEqual({})
  })
})
