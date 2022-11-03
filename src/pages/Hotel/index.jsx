import { Link } from 'react-router-dom'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import Typography from '../../components/Typography'
import Button from '../../components/Button'
import useHook from './hook'

const Hotel = () => {
  useHook()
  return (
    <div className='mx-auto w-full h-screen flex items-center justify-center flex-col'>
      <div className='flex justify-center flex-col mx-auto w-full'>
        <Typography
          text={'CHOOSE HOTEL FROM LIST'}
          type='error'
          style={{ marginBottom: 20, textAlign: 'center' }}
        />
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          options={[{ label: 'Hotel 1' }, { label: 'Hotel 2' }]}
          renderInput={(params) => (
            <TextField
              {...params}
              id='filled-basic'
              label='Hotel Name'
              placeholder='Choose Your Hotel'
              variant='standard'
              className='!mb-14'
              value={params.inputProps.value}
            />
          )}
        />
        <Link to='/auth/login'>
          <Button title={'CONFIRM'} type='red' className='mb-8 w-full' />
        </Link>
        <Link to='/addhotel'>
          <Button title={'ADD A HOTEL'} type='red' className='w-full' />
        </Link>
      </div>
    </div>
  )
}

export default Hotel
