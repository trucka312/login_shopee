// import { Fragment } from 'react'
import { routesObj } from '../utils/routes'
import Login from '../components/Login'
import Register from '../components/Register'
import PublicDefaultLayout from '../layouts/PublicDefaultLayout'

export const publicRoutes = [
  {
    path: routesObj.login,
    component: Login,
    layout: PublicDefaultLayout
  },
  {
    path: routesObj.register,
    component: Register,
    layout: PublicDefaultLayout
  }
]
