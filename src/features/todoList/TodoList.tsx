import React from 'react'
import TodoListItem from './TodoListItem'
import { RootState } from '../../redux/store'

// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

import { toggleTodo } from './todoSlice'

export default function TodoList() {
  // const todos = useSelector((state: RootState) => state.todos)
  const todos = useAppSelector((state) => state.todos)

  const dispatch = useAppDispatch()

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo))} />
        // <TodoListItem key={todo.id} id={todo.id} completed={todo.completed} text={todo.text} />
      ))}
    </ul>
  )
}
