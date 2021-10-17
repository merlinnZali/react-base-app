import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../redux/store'

import { AppThunk, AppDispatch } from '../../redux/store'
import { Todo } from './types'

const initialState: Todo[] = []

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.push(action.payload)
    },
    toggleTodo(state, action: PayloadAction<Todo>) {
      let todoResp = state.find((todo) => todo.id === action.payload.id)

      if (todoResp) {
        todoResp.completed = !todoResp.completed
      }
    },
  },
})

export const { toggleTodo } = todoSlice.actions

export const addTodo =
  (text: string): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const newTodo: Todo = {
      id: Math.random().toString(36).substr(2, 9), // https://gist.github.com/gordonbrander/2230317,
      completed: false,
      text: text,
    }
    //todos = getState().todos
    dispatch(todoSlice.actions.addTodo(newTodo))
  }

export default todoSlice.reducer
