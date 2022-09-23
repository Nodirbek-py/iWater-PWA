import React, { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

import Typography from '../../components/Typography'

const Welcome = () => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      window.location.replace('/home')
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <div className='flex flex-col items-center h-full'>
      <img src='/logo.svg' width='80%' className='mb-5' />
      <Typography text={'WELCOME TO THE IWATER HOTEL APPLICATION '} style={{ marginBottom: 72 }} />
      <CircularProgress />
    </div>
  )
}

export default Welcome
