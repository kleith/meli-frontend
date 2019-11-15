import React, { useState } from 'react'
import Link from 'next/Link'

const Header = () => {
  const [value, setValue] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()

  }

  return (
    <header className="">
      <div className="">
        <Link to="/">
          <img src="/images/Logo_ML.png" srcSet="/images/Logo_ML@2x.png" className="" alt="logo" />
        </Link>
        <div className="">
          <form onSubmit={event => handleSearch(event)}>
            <input
              className=""
              type="text"
              name="search"
              autoComplete="off"
              value={value}
              onChange={event => setValue(event.target.value)}
              placeholder="Nunca dejes de buscar" />
            <button className="" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header