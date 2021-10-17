import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  // useAuth is some custom hook to get the current user's auth state
  const isAuth = () => true

  return <Route {...rest} render={(props) => (isAuth() ? <Component {...props} /> : <Redirect to="/" />)} />
}

export default PrivateRoute
