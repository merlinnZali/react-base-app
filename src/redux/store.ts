import { configureStore, Action, ThunkAction, MiddlewareArray } from '@reduxjs/toolkit'
//import { ThunkAction } from 'redux-thunk'

// We'll use redux-logger just as an example of adding another middleware
// import logger from 'redux-logger'
// import { routerMiddleware } from 'connected-react-router'
import { routerMiddleware } from 'connected-react-router/immutable'
import rootReducer, { history } from './rootReducer'

//const store = function configureStore(preloadedState?: any) {
const store = configureStore({
  reducer: rootReducer,
  // middleware: new MiddlewareArray().concat(additionalMiddleware, logger)
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
  devTools: process.env.NODE_ENV !== 'production',
  //preloadedState,
})
//return store
//}

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

export type AppDispatch = typeof store.dispatch // Type to access dispatch
export type RootState = ReturnType<typeof store.getState> // A global type to access reducers types
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store

/*
This sets up our redux store, which will contain all state that we put into Redux, 
along with the Webpack hot module replacement support for the reducer.

Similarly to above, where we export RootState, we also export types for AppDispatch and AppThunk. 
Whenever we use dispatch, it’s type will be AppDispatch, 
and whenever we use a thunk for API calls / async logic, it’s type will be AppThunk. 
*/
