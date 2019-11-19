import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react'

import Header from '../index'

afterEach(cleanup);

describe('Header component', () => {
  it('render without crash', () => {
    renderer.create(<Header></Header>)
  })
})
