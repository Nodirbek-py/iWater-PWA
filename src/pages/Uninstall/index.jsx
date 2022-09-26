import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'

import Typography from '../../components/Typography'
import Button from '../../components/Button'

const Uninstall = () => {
  return (
    <div className='flex flex-col justify-center relative mx-auto w-5/6'>
      <Typography
        type='error'
        text='REPORT A DEVICE ISSUE / COMPLAINT'
        style={{ marginBottom: 30 }}
      />
      <TextField
        id='standard-basic'
        label='Serial Number'
        value='S1019290'
        variant='standard'
        className='!mb-6'
      />
      <TextField
        id='standard-basic'
        label='Room Number'
        value='1612'
        variant='standard'
        className='!mb-6'
      />
      <TextField
        id='standard-basic'
        label='Total Shower Count'
        value='370'
        variant='standard'
        className='!mb-6'
      />
      <TextField
        id='standard-basic'
        label='Total Water Saved'
        value='100L'
        variant='standard'
        className='!mb-6'
      />
      <div className='bg-red-200 px-5 py-6 mb-9'>
        <TextField
          id='standard-basic'
          label='Enter Date of Issue'
          value="Enter Today's date"
          variant='standard'
          className='!mb-6 w-full'
        />
        <TextField
          id='standard-basic'
          label='Description of Complaint/Issue'
          value='Add a description in detail of the issue or complaint in this space provided. We thank you
    for helping us improve!'
          variant='standard'
          className='w-full'
          rows={3}
          maxRows={5}
          multiline
        />
      </div>
      <Link to='/success' className='block mx-auto'>
        <Button title='DEACTIVATE' type='red' className='w-auto mx-auto mb-4' />
      </Link>
    </div>
  )
}

export default Uninstall
