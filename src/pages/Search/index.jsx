import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { Link, useLocation } from 'react-router-dom'

import Button from '../../components/Button'
import Alert from '../../components/Alert'
import useHook from './hook'

const Search = () => {
  const { pathname } = useLocation()
  const { devices, setInput, input } = useHook()
  return (
    <div className='flex flex-col justify-center relative mx-auto w-5/6'>
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={devices}
        onChange={(e) => setInput(e.target.textContent)}
        renderInput={(params) => (
          <TextField
            {...params}
            id='filled-basic'
            label='Serial Number'
            placeholder='Enter a Serial Number'
            variant='filled'
            className='!mb-14'
            onChange={() => setInput(params.inputProps.value)}
            value={params.inputProps.value}
          />
        )}
      />
      <Link to={pathname !== '/install/' ? `/report/${input}` : '/install/24'} className='mx-auto'>
        <Button
          className='w-28 mx-auto'
          type='red'
          title='Search'
        />
      </Link>
      <Alert
        className='mt-24'
        title='HOW TO FIND THE SERIAL NUMBER?'
        body='Turn the device over and find the QR code which has the serial number. Enter the serial number above.'
      />
    </div>
  )
}

export default Search
