import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export const About = () => {
  const history = useHistory()

  console.log(history.location.pathname) // '/about'

  const location = useLocation()

  console.log(location.pathname) // '/about'

  return (
    <>
      <h1>The about page is on: {history.location.pathname}</h1>
      <button onClick={() => history.push('/')}>Go to home page</button>
      <h1>The about page is on: {location.pathname}</h1>
    </>
  )
}
