import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import NotFound from './pages/NotFound'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Install from './pages/Install'
import InstallComplete from './pages/InstallComplete'
import Search from './pages/Search'
import Success from './pages/Success'
import Report from './pages/Report'
import TurnOFF from './pages/TurnOFF'
import Uninstall from './pages/Uninstall'
import Welcome from './pages/Welcome'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/auth/:type',
        element: <Auth />,
      },
      {
        path: '/install',
        element: <Search />,
      },
      {
        path: '/install/:id',
        element: <Install />,
      },
      {
        path: '/install/:id/complete',
        element: <InstallComplete />,
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
      {
        path: '/uninstall/:id',
        element: <Uninstall />,
      },
      {
        path: '/welcome',
        element: <Welcome />,
      },
      {
        path: '/success',
        element: <Success />,
      },
      {
        path: '/success/install',
        element: <Success />,
      },
    ],
  },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
