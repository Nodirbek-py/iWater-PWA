import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Outlet />
      App
    </div>
  )
}

export default App
