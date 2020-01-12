import React from 'react'
import Layout from 'components/Layout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import CommentApp from 'pages/CommentApp'
import Dashboard from 'pages/Dashboard'
import TestContext from 'pages/TestContext'
import ReactUse from 'pages/ReactUse'
import Redux from 'pages/Redux'
import ShowCount from 'pages/ShowCount'
import UserTable from 'pages/UserTable'

export const menus = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/comment', name: 'Comment', component: CommentApp },
  { path: '/context', name: 'Context', component: TestContext },
  { path: '/react-use', name: 'ReactUse', component: ReactUse },
  { path: '/redux', name: 'Redux', component: Redux },
  { path: '/show-count', name: 'Show Count', component: ShowCount },
  { path: '/user-table', name: 'User Table', component: UserTable },
]

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          {menus.map(v => (
            <Route key={v.name} path={v.path}>
              <v.component />
            </Route>
          ))}
          <Route path="/">
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
