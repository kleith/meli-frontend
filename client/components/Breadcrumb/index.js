import React from 'react'
import PropTypes from 'prop-types'
import './Breadcrumb.scss'

const Breadcrumb = ({ categories }) => (
  <div className="Breadcrumb">
    <ul className="Breadcrumb-list">
      {categories.map((category, index) => (
        <li key={index}>{category}</li>
      ))}
    </ul>
  </div>
)

Breadcrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Breadcrumb