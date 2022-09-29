import TextField from '@mui/material/TextField'

import Typography from '../../components/Typography'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const Install = () => {
  return (
    <div className='flex flex-col justify-center relative mx-auto w-5/6'>
      <Typography
        type='error'
        text='WE FOUND THAT DEVICE. HERE IS THE INFORMATION BELOW.'
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
        value='NA'
        variant='standard'
        className='!mb-6'
      />
      <TextField
        id='standard-basic'
        label='Totla Shower Count'
        value='2000L'
        variant='standard'
        className='!mb-6'
      />
      <Link to='/install/24/complete' className='mx-auto'>
        <Button title='Install' type='blue' className='w-auto' />
      </Link>
    </div>
  )
}

export default Install
