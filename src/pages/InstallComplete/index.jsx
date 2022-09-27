import React from 'react'
import TextField from '@mui/material/TextField'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Link } from 'react-router-dom'

import Button from '../../components/Button'
import Typography from '../../components/Typography'

const InstallComplete = () => {
  return (
    <div className='flex flex-col justify-center relative mx-auto w-5/6'>
      <TextField
        id='standard-basic'
        label='Serial Number'
        value='S1019290'
        variant='standard'
        className='!mb-6 !w-10/12 !mx-auto'
      />
      <div className='bg-red-200 px-5 py-6 mb-4 flex flex-col'>
        <TextField
          id='standard-basic'
          label='Room Number'
          placeholder='Enter a Room Number'
          variant='standard'
          className='!mb-12'
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
      </div>
      <Link to='/success/install' className='mx-auto'>
        <Button title='COMPLETE INSTALLATION' type='red' className='w-auto mx-auto mb-5' />
      </Link>
      <div className='rounded border border-gray-200 p-4 relative pt-28 mt-40 mb-16'>
        <img src='/FAQ.png' className='absolute left-2 -top-40' />
        <span className='block text-sm uppercase text-blue mb-2'>FAQ: HOW TO INSTALL WES</span>
        <h2 className='text-xl mb-2'>INSTALLATION STEPS</h2>
        <Typography
          text='Watch video above. Ensure adapter is attached properly and run a shower cycle to confirm data transfer.'
          type='info'
        />
      </div>
    </div>
  )
}

export default InstallComplete
