import TextField from '@mui/material/TextField'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import Button from '../../components/Button'
import Alert from '../../components/Alert'
import { Link } from 'react-router-dom'

const TurnOFF = () => {
  return (
    <div className='flex flex-col justify-center relative mx-auto w-5/6'>
      <Alert
        color='rgba(249, 13, 13, 0.6)'
        title='Device Successfully Turned Off'
        body='The device is now turned off and will stay in high flow mode. Turn it on soon to save more water. Device will continue to collect shower data while being turned off.'
      />
      <div className='bg-red-200 px-5 py-6 my-8'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            label='Turn On Date'
            inputFormat='MM/DD/YYYY'
            renderInput={(params) => (
              <TextField {...params} variant='standard' className='w-10/12' />
            )}
          />
        </LocalizationProvider>
      </div>
      <Alert
        title='Device On Date'
        body='The device will automatically turn on to save water on the date entered above.'
      />
      <Link exact to='/success' className='mx-auto'>
        <Button title='CONFIRM' type='red' className='mt-16 w-auto' />
      </Link>
    </div>
  )
}

export default TurnOFF
