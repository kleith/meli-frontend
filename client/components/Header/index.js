import React, { useState } from 'react'
import Link from 'next/Link'
import Router from 'next/router'

import './header.scss'

const Header = () => {
  const [value, setValue] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()

    // validar texto ingresado
    if (!value.length) {
      return false
    }
    Router.push(`/items?q=${encodeURIComponent(value)}`)
  }

  return (
    <header className="Header">
      <div className="Header-container">
        <Link href="/">
          <img src="/images/Logo_ML.png" srcSet="/images/Logo_ML@2x.png" className="Header-logo" alt="logo" />
        </Link>
        <div className="Header-inputContainer">
          <form onSubmit={event => handleSearch(event)}>
            <input
              className="Header-inputContainer-input"
              type="text"
              name="search"
              autoComplete="off"
              value={value}
              onChange={event => setValue(event.target.value)}
              placeholder="Nunca dejes de buscar" />
            <button className="Header-inputContainer-button" type="submit">
              <img src="/images/ic_Search.png" srcSet="/images/ic_Search@2x.png" alt="Search" />
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header