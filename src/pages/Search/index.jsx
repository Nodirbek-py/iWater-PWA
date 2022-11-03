import TextField from '@mui/material/TextField'

import Button from '../../components/Button'
import Alert from '../../components/Alert'
import Popup from '../../components/Popup'
import Typography from '../../components/Typography'
import useHook from './hook'

const Search = () => {
  const { setInput, input, getData, notFound, setNotFound } = useHook()
  return (
    <div className='flex flex-col justify-center relative mx-auto w-5/6'>
      <TextField
        id='filled-basic'
        label='Serial Number'
        placeholder='Enter a Serial Number'
        variant='filled'
        className='!mb-14'
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Button className='w-28 mx-auto' type='red' title='Search' onClick={getData} />
      <Alert
        className='mt-24'
        title='HOW TO FIND THE SERIAL NUMBER?'
        body='Turn the device over and find the QR code which has the serial number. Enter the serial number above.'
      />
      {notFound && (
        <Popup>
          <div className='flex items-center justify-center flex-col'>
            <Typography
              text={
                'Sorry, device with given ID is not found, please make sure that you are giving correct ID'
              }
              style={{ fontSize: 20, textAlign: 'center' }}
              type='blue'
            />
            <Button
              className='mx-auto mt-4'
              type='blue'
              title='OK'
              onClick={() => setNotFound(false)}
            />
          </div>
        </Popup>
      )}
    </div>
  )
}

export default Search
