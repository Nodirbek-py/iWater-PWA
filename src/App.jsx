import './App.css'
import { Outlet, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <div className='App'>
      {pathname !== '/welcome' && <Navbar />}
      <Outlet />
    </div>
  )
}

export default App
