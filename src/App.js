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
import RegisterForm from 'pages/RegisterForm'
import FormControlled from 'pages/FormControlled'
import FormUnControlled from 'pages/FormUnControlled'
import FormHook from 'pages/FormHook'

export const menus = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/comment', name: 'Comment', component: CommentApp },
  { path: '/context', name: 'Context', component: TestContext },
  { path: '/react-use', name: 'ReactUse', component: ReactUse },
  { path: '/redux', name: 'Redux', component: Redux },
  { path: '/show-count', name: 'Show Count', component: ShowCount },
  { path: '/user-table', name: 'User Table', component: UserTable },
  { path: '/register-form', name: 'Register Form', component: RegisterForm },
  {
    path: '/form-controlled',
    name: 'Form Controlled',
    component: FormControlled,
  },
  {
    path: '/form-uncontrolled',
    name: 'Form unControlled',
    component: FormUnControlled,
  },
  {
    path: '/form-hook',
    name: 'Form Hook',
    component: FormHook,
  },
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
