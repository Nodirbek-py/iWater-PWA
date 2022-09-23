import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import NotFound from './pages/NotFound'
import Auth from './pages/Auth'
import Install from './pages/Install'
import Search from './pages/Search'
import Report from './pages/Report'
import TurnOFF from './pages/TurnOFF'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/auth/:type',
        element: <Auth />,
      },
      {
        path: '/install',
        element: <Install />,
      },
      {
        path: '/report',
        element: <Search />,
      },
      {
        path: '/report/:id',
        element: <Report />,
      },
      {
        path: '/turnoff/:id',
        element: <TurnOFF />,
      },
    ],
  },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
