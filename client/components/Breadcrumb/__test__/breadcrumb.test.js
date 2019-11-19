import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react'

import Breadcrumb from '../index'

afterEach(cleanup);

describe('Breadcrumb component', () => {
  it('render without crash', () => {
    const categoryList = ['Test 1', 'Test 2', 'Test 3']

    renderer.create(<Breadcrumb categories={categoryList}></Breadcrumb>)
  })

  it('should crash', () => {
    const tree = renderer.create(<Breadcrumb></Breadcrumb>)

    expect(tree.root.props.categories).toStrictEqual([])
  })
})
