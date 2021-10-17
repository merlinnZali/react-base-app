import 'react-hot-loader/patch'

import React from 'react'
import ReactDOM from 'react-dom'

import store from './redux/store'
import { history } from './redux/rootReducer'
// import { ConnectedRouter } from 'connected-react-router'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { AppContainer } from 'react-hot-loader' /* react-hot-loader v3 */
import { Provider } from 'react-redux'

import reportWebVitals from './reportWebVitals'

import App from './app/App'
import './index.scss'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <React.StrictMode>
        <Provider store={store}>
          <ConnectedRouter history={history} noInitialPop>
            <>
              <Component />
            </>
          </ConnectedRouter>
        </Provider>
      </React.StrictMode>
    </AppContainer>,
    document.getElementById('root')
  )
}
render(App)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

if (process.env.NODE_ENV === 'development' && module.hot) {
  //module.hot.accept('./app/App', render)
  module.hot.accept('./app/App.tsx', () => {
    const NextRootContainer = require('./app/App').default
    render(NextRootContainer)
  })
}

/*
Now, we’ve enabled Webpack hot module replacement for App, 
and wrapped App with a Redux Provider which makes the store available to all the components nested within App.
*/
