import { Fragment } from 'react'
import { routesObj } from '../utils/routes'
import Login from '../components/Login'
import Register from '../components/Register'

export const publicRoutes = [
  {
    path: routesObj.login,
    component: Login,
    layout: Fragment
  },
  {
    path: routesObj.register,
    component: Register,
    layout: Fragment
  }
]
