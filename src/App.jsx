import './App.css'
import { Outlet } from 'react-router-dom'

import Alert from './components/Alert'

function App() {
  return (
    <div className='App'>
      <Outlet />
      <Alert
        title={'Hello this is title'}
        body={
          'Turning off the device will keep it in high flow mode but the device will continue to collect shower data.'
        }
      />
    </div>
  )
}

export default App
