import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <br />
        <Link to="/about">About</Link>
        <br />
        <br />
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
          to="/"
        >
          Home
        </NavLink>
        <br />
        <br />
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </nav>
    </>
  )
}

export default Navbar
