import React, { FormEvent } from 'react'
// import { useDispatch } from 'react-redux'
import TodoList from './TodoList'
import { addTodo } from './todoSlice'
import { useAppSelector, useAppDispatch } from './../../app/hooks'

export default function AddTodo(): JSX.Element {
  // const dispatch = useDispatch()
  const dispatch = useAppDispatch()
  const [text, setText] = React.useState('')

  function handleChange(e: { target: HTMLInputElement }) {
    setText(e.target.value)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!text.trim()) {
      return
    }
    dispatch(addTodo(text))

    setText('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList />
    </>
  )
}
