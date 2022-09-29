import { Outlet } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'

import Typography from '../../components/Typography'
import Navbar from '../../components/Navbar'
import useHook from './hook'

const Welcome = () => {
  const { isExpired } = useHook()
  return (
    <div className='flex flex-col items-center h-full mx-auto w-5/6'>
      {isExpired ? (
        <>
          <img src='/logo.svg' width='80%' className='mb-5' />
          <Typography
            text={'WELCOME TO THE IWATER HOTEL APPLICATION '}
            style={{ marginBottom: 72 }}
          />
          <CircularProgress />
        </>
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </div>
  )
}

export default Welcome
