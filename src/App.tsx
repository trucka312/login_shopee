import { Fragment } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import CheckPublicRoutes from './routes/checkPublicRoute'
import DefaultLayout from './layouts/DefaultLayouts'
import { publicRoutes } from './routes/routes'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const publicRoute = publicRoutes.map((route: any) => {
    const Page = route.component
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let Layout: any = DefaultLayout

    if (route.layout) {
      Layout = route.layout
    } else if (route.layout === undefined) {
      Layout = Fragment
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Layout>
            <Page />
          </Layout>
        }
      />
    )
  })
  return (
    <>
      <Routes>
        <Route element={<CheckPublicRoutes />}>{publicRoute}</Route>
        {/* <Route element={<ProtectedRoutes />}>{userRoute}</Route> */}
      </Routes>
    </>
  )
}

export default App
