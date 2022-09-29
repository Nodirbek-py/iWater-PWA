import { Link, useLocation } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import Typography from '../../components/Typography'
import Button from '../../components/Button'

const Success = () => {
  const { pathname } = useLocation()
  return (
    <div className='flex flex-col justify-center items-center relative mx-auto w-5/6 mt-32 h-96'>
      {pathname !== '/success/install/' ? (
        <>
          <Typography text='SUCCESS' type='error' style={{ marginBottom: 140 }} />
          <Link to='/welcome'>
            <Button title='HOME' type='red' />
          </Link>
        </>
      ) : (
        <>
          <Typography
            text='THE INFORMATION 
WAS UPDATED SUCCESSFULLY!'
            type='error'
            style={{ marginBottom: 10 }}
          />
          <Typography text='THANK YOU' type='error' style={{ marginBottom: 50 }} />
          <TextField
            id='standard-basic'
            label='Serial Number'
            value='S1019290'
            variant='standard'
            className='!mb-8 !w-10/12 !mx-auto'
          />
          <TextField
            id='standard-basic'
            label='Room Number'
            value='1612'
            variant='standard'
            className='!mb-8 !w-10/12 !mx-auto'
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label='Installation Date'
              inputFormat='MM/DD/YYYY'
              renderInput={(params) => (
                <TextField {...params} variant='standard' className='w-10/12' />
              )}
            />
          </LocalizationProvider>
          <Link to='/home' className='mx-auto !mt-28'>
            <Button title='GO TO HOME' type='blue' className='bg-blueCyan w-auto' />
          </Link>
        </>
      )}
    </div>
  )
}

export default Success
