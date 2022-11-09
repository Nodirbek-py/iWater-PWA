import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import moment from 'moment'

import Typography from '../../components/Typography'
import Button from '../../components/Button'
import useHook from './hook'

const Install = () => {
  const { form, changeHandler, device, loading, tab, setTab, setForm, installDevice, update } =
    useHook()
  return (
    <div className='flex flex-col justify-center relative mx-auto w-5/6'>
      {loading ? (
        <CircularProgress className='mx-auto' />
      ) : (
        <>
          {' '}
          {tab === 'step1' ? (
            <>
              {device.Room_No === '' ? (
                <Typography
                  type='error'
                  text='WE FOUND THAT DEVICE. HERE IS THE INFORMATION BELOW.'
                  style={{ marginBottom: 30 }}
                />
              ) : (
                <Typography
                  type='error'
                  text='THIS DEVICE IS INSTALLED,  YOU CAN UPDATE ROOM NUMBER HERE'
                  style={{ marginBottom: 30 }}
                />
              )}
              <TextField
                id='standard-serial-number'
                label='Serial Number'
                value={device && device.SerialNumber}
                variant='standard'
                className='!mb-6'
              />
              <TextField
                type='number'
                pattern='[0-9]'
                step='1'
                id='standard-room-number'
                label='Room Number'
                value={form.roomNumber || device.Room_No}
                variant='standard'
                className='!mb-6'
                name='roomNumber'
                onChange={(e) => changeHandler(e)}
              />
              <TextField
                id='standard-water-saved'
                label='Total Water Saved'
                value={device.Water_Saved ? device.Water_Saved : 'NA'}
                variant='standard'
                className='!mb-6 no-animation'
                InputProps={{
                  readOnly: true,
                }}
              />
              {device.Room_No === '' ? (
                <Button
                  title='Install'
                  type='blue'
                  className='w-auto mx-auto'
                  onClick={() => setTab('step2')}
                />
              ) : (
                <Button title='Update' type='blue' className='w-auto mx-auto' onClick={update} />
              )}
            </>
          ) : tab === 'step2' ? (
            <>
              <TextField
                id='standard-basic'
                label='Serial Number'
                value={device.SerialNumber}
                variant='standard'
                className='!mb-6 !w-10/12 !mx-auto'
              />
              <div className='bg-red-200 px-5 py-6 mb-4 flex flex-col'>
                <TextField
                  id='standard-basic'
                  label='Room Number'
                  placeholder='Enter a Room Number'
                  value={device.Room_No || form.roomNumber}
                  variant='standard'
                  className='!mb-12'
                  name='roomNumber'
                  type='number'
                  step='1'
                  onChange={(e) => changeHandler(e)}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    label='Installation Date'
                    inputFormat='MM/DD/YYYY'
                    renderInput={(params) => (
                      <TextField {...params} variant='standard' className='w-10/12' />
                    )}
                    name='dateOfIssue'
                    value={form.installDate}
                    onChange={(e) => {
                      setForm({ ...form, installDate: moment(e.$d).format('YYYY-MM-DD HH:mm:ss') })
                    }}
                  />
                </LocalizationProvider>
              </div>
              <Button
                onClick={installDevice}
                title='COMPLETE INSTALLATION'
                type='red'
                className='w-auto mx-auto mb-5'
              />
              <div className='rounded border border-gray-200 p-4 relative pt-28 mt-40 mb-16'>
                <img src='/FAQ.png' className='absolute left-2 -top-40' />
                <span className='block text-sm uppercase text-blue mb-2'>
                  FAQ: HOW TO INSTALL WES
                </span>
                <h2 className='text-xl mb-2'>INSTALLATION STEPS</h2>
                <Typography
                  text='Watch video above. Ensure adapter is attached properly and run a shower cycle to confirm data transfer.'
                  type='info'
                />
              </div>
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
                id='standard-serial-number'
                label='Serial Number'
                value={device?.SerialNumber || form.roomNumber}
                InputProps={{
                  readOnly: true,
                }}
                variant='standard'
                className='!mb-6 no-animation'
              />
              <TextField
                id='standard-room-number'
                label='Room Number'
                value={form.roomNumber}
                InputProps={{
                  readOnly: true,
                }}
                variant='standard'
                className='!mb-6 no-animation'
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  label='Installation Date'
                  inputFormat='MM/DD/YYYY'
                  value={form.installDate}
                  onChange={() => {}}
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
        </>
      )}
    </div>
  )
}

export default Install
