import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import TodoList from '../../features/todoList/TodoList'

export const AboutPlus = () => {
  const history = useHistory()

  console.log(history.location.pathname) // '/about'

  const location = useLocation()

  console.log(location.pathname) // '/about'

  return (
    <>
      <h1>The dashboard page is on: {history.location.pathname}</h1>
      <button onClick={() => history.push('/')}>Go to home page</button>
      <h1>The dashboard page is on: {location.pathname}</h1>
      <TodoList />
    </>
  )
}
