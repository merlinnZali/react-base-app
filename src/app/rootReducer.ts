import { combineReducers } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux-immutable'
// import { connectRouter } from 'connected-react-router'
import { connectRouter } from 'connected-react-router/immutable'
import { createHashHistory } from 'history'
import photosSliceReducer from '../features/photos/PhotoSlice'
import todoSliceReducer from '../features/todoList/todoSlice'

// createBrowserHistory, createHashHistory, createMemoryHistory
export const history = createHashHistory()

export const rootReducer = {
  router: connectRouter(history),
  photos: photosSliceReducer,
  todos: todoSliceReducer,
}

export default rootReducer
