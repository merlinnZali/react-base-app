How to navigate with Redux action
with store.dispatch
import { push } from 'connected-react-router'

store.dispatch(push('/path/to/somewhere'))
with react-redux
import { push } from 'connected-react-router'

// in component render:

<div onClick={() => {

/\*_ do something before redirection _/
props.push('/home');

}}>login</div>

// connect the action:
export default connect(null, { push })(Component);
in redux thunk
import { push } from 'connected-react-router'

export const login = (username, password) => (dispatch) => {

/_ do something before redirection _/

dispatch(push('/home'))
}
in redux saga
import { push } from 'connected-react-router'
import { put, call } from 'redux-saga/effects'

export function\* login(username, password) {

/_ do something before redirection _/

yield put(push('/home'))
}
How to get the current browser location (URL)
The current browser location can be accessed directly from the router state with react-redux's connect. The location object is comprised of pathname, search (query string), and hash.

import { connect } from 'react-redux'

const Child = ({ pathname, search, hash }) => (

  <div>
    Child receives
    <div>
      pathname: {pathname}
    </div>
    <div>
      search: {search}
    </div>
    <div>
      hash: {hash}
    </div>
  </div>
)

const mapStateToProps = state => ({
pathname: state.router.location.pathname,
search: state.router.location.search,
hash: state.router.location.hash,
})

export default connect(mapStateToProps)(Child)
How to set Router props (e.g. basename, initialEntries, etc.)
You can pass props to the create\*History functions of your choice (createBrowserHistory, createHashHistory, createMemoryHistory)

import { createBrowserHistory } from 'history'

const history = createBrowserHistory({
basename: '/prefix/',
})
import { createHashHistory } from 'history'

const history = createHashHistory({
hashType: 'slash',
getUserConfirmation: (message, callback) => callback(window.confirm(message))
})
import { createMemoryHistory } from 'history'

const history = createMemoryHistory({
initialEntries: [ '/one', '/two', { pathname: '/three' } ],
initialIndex: 1
})
How to hot reload functional components
Save the main app component in its own file.
App.js

import React from 'react'
import { Route, Switch } from 'react-router' /_ react-router v4/v5 _/
import { ConnectedRouter } from 'connected-react-router'

const App = ({ history }) => ( /_ receive history object via props _/
<ConnectedRouter history={history}>
<div>
<Switch>
<Route exact path="/" render={() => (<div>Match</div>)} />
<Route render={() => (<div>Miss</div>)} />
</Switch>
</div>
</ConnectedRouter>
)

export default App
Wrap the App component with AppContainer from react-hot-loader v3 as a top-level container.
index.js

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader' /_ react-hot-loader v3 _/
import App from './App'
...
const render = () => { // this function will be reused
ReactDOM.render(
<AppContainer> { /_ AppContainer for hot reloading v3 _/ }
<Provider store={store}>
<App history={history} /> { /_ pass history object as props _/ }
</Provider>
</AppContainer>,
document.getElementById('react-root')
)
}

render()
Detect change and re-render with hot reload.
index.js

...
if (module.hot) {
module.hot.accept('./App', () => {
/_ For Webpack 2.x
Need to disable babel ES2015 modules transformation in .babelrc
presets: [
["es2015", { "modules": false }]
]
_/
render()

    /* For Webpack 1.x
    const NextApp = require('./App').default
    renderWithHotReload(NextApp)
    */

})
}
Now, when you change any component that App depends on, it will trigger hot reloading without losing redux state. Thanks react-hot-loader v3!

How to hot reload reducers
Detect change and replace with a new root reducer with router state

index.js

...
if (module.hot) {
module.hot.accept('./reducers', () => {
/_ For Webpack 2.x
Need to disable babel ES2015 modules transformation in .babelrc
presets: [
["es2015", { "modules": false }]
]
_/
store.replaceReducer(rootReducer(history))

    /* For Webpack 1.x
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(nextRootReducer(history))
    */

})
}
How to support Immutable.js
Create your root reducer as a function that takes history and returns reducer. Use combineReducers from redux-immutable to return the root reducer.

Import connectRouter from connected-react-router/immutable and add router reducer to root reducer

import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'
...
const rootReducer = (history) => combineReducers({
router: connectRouter(history),
...
})
...
Import ConnectedRouter and routerMiddleware from connected-react-router/immutable instead of connected-react-router.
import { ConnectedRouter, routerMiddleware } from 'connected-react-router/immutable'
Create your root reducer with router reducer by passing history to rootReducer function
const store = createStore(
rootReducer(history),
initialState,
...
)
(Optional) Initialize state with Immutable.Map()
import Immutable from 'immutable'
...
const initialState = Immutable.Map()
...
const store = createStore(
rootReducer(history),
initialState,
...
)

How to use connected-react-router with react native
History does not exist, how can I configure my redux store?
As you know react native does not support natively the HTML5 history API, it's supposed to be available only for web browsers. This issue can be solved by using createMemoryHistory.

Here is an example with react-redux v6.0.0.

const history = createMemoryHistory()

ReactDOM.render(
<Provider store={store}>
<ConnectedRouter history={history}>
<Route path="/" component={myComponent} exact={true} />
</ConnectedRouter>
</Provider>
)
Example available here

Get location from a screen
You can access at your location interface with history.location.

Example available here

Go to a screen with parameter
You can use history and navigate between screens.

Example available here

How to Use Your Own Context with react-redux
With react-redux v6.0.0, you can pass your own context to <Provider> component. So, you need to pass the same context as props to <ConnectedRouter> component.

const customContext = React.createContext(null) // your own context

ReactDOM.render(
<Provider store={store} context={customContext}>
<ConnectedRouter history={history} context={customContext}>
...
</ConnectedRouter>
</Provider>
)
How to stop initial location change
In order to make this package more compatible with react-router-redux, a LOCATION_CHANGE action is dispatched for the initial location. This can however be disabled via the noInitialPop prop.

ReactDOM.render(
<Provider store={store}>
<ConnectedRouter history={history} noInitialPop>
<Route path="/" component={myComponent} exact={true} />
</ConnectedRouter>
</Provider>
)
