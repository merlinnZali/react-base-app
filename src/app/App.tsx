import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
//import app from './app.module.scss';
import './app.scss'
import { ReactComponent as Logo } from './logo.svg'

import Home from '../components/routerTest/Home'
import Navbar from '../components/routerTest/Navbar'
import { About } from '../components/routerTest/About'
import NotFount from '../components/routerTest/NotFount'
import PrivateRoute from '../components/routerTest/PrivateRoute'
import BlogPost from '../components/routerTest/BlogPost'
import { AboutPlus } from '../components/routerTest/AboutPlus'
//import Dashboard from '../components/routerTest/Dashboard'
import Inbox from '../components/routerTest/Inbox'
import Foto from '../features/photos/Foto'
import AddTodo from '../features/todoList/AddTodo'

// - on doi le faire pour tout composant ou simplement pour tout composant
// - Each chunk is each dynamic import() in our app
// - Suspense peut encapsuler le Navbar ca ne derange pas
const Dashboard = React.lazy(() => import('../components/routerTest/Dashboard'))

function Hidden() {
  return <>hidden</>
}

function Loading() {
  return <>.. Loading</>
}

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route path="/" exact component={Home} /> */}
      <Route path="/about">
        <About />
      </Route>
      <PrivateRoute path="/hidden/" component={Hidden} />
      <Route path="/blog/:postSlug" component={BlogPost} />
      <React.Suspense fallback={<Loading />}>
        <Route
          path={'/dashboard'}
          render={({ match: { path } }) => (
            <Dashboard>
              <Switch>
                <Route exact path={path + '/'} component={AboutPlus} />
                <Route path={`${path}/inbox`} component={Inbox} />
                <Route path={`${path}/foto`} component={Foto} />
                <Route path={`${path}/todo`} component={AddTodo} />
                <Redirect exact from={path + '/*'} to={path} />
              </Switch>
            </Dashboard>
          )}
        />
      </React.Suspense>
      <Route path="/not-found">
        <NotFount />
      </Route>
      <Redirect exact from={'*'} to={'/not-found'} />
    </Switch>
  </Router>
)

export default App

export function divide(a: number, b: number): number {
  // Sure, we cannot divide by 0,
  // so in this case we will throw an error.
  if (b === 0) {
    throw new Error("You can't divide by zero.")
  }

  // If everything is okay, we will return
  // a round division result.
  return Math.round(a / b)
}
