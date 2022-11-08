import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import CircularProgress from '@mui/material/CircularProgress'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import moment from 'moment'

import Typography from '../../components/Typography'
import Button from '../../components/Button'
import Alert from '../../components/Alert'
import useHook from './hook'

const Report = () => {
  const {
    device,
    changeHandler,
    loading,
    form,
    setForm,
    sendReport,
    deactivate,
    tab,
    setTab,
    turnOff,
  } = useHook()
  return (
    <div className='flex flex-col justify-center relative mx-auto w-5/6'>
      {tab !== 'report' && (
        <p className='absolute -top-24 -left-14 cursor-pointer' onClick={() => setTab('report')}>
          BACK
        </p>
      )}
      {loading ? (
        <CircularProgress className='mx-auto' />
      ) : tab === 'report' || tab === 'uninstall' ? (
        <>
          <Typography
            type='error'
            text={tab === 'report' ? 'REPORT A DEVICE ISSUE / COMPLAINT' : 'UNINSTALL A DEVICE'}
            style={{ marginBottom: 30 }}
          />
          <TextField
            id='standard-serial-number'
            label='Serial Number'
            value={device.SerialNumber}
            variant='standard'
            className='!mb-6'
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id='standard-room-number'
            label='Room Number'
            value={device.Room_No}
            variant='standard'
            className='!mb-6'
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id='standard-shower-count'
            label='Total Shower Count'
            value={device.Shower_Count ? device.Shower_Count : 'NA'}
            variant='standard'
            className='!mb-6'
            name='showerCount'
            onChange={(e) => changeHandler(e)}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id='standard-water-saved'
            label='Total Water Saved'
            value={device.Water_Saved ? device.Water_Saved : 'NA'}
            InputProps={{
              endAdornment: <InputAdornment position='end'>L</InputAdornment>,
              readOnly: true,
            }}
            variant='standard'
            className='!mb-6'
            name='waterSaved'
            onChange={(e) => changeHandler(e)}
          />
          <div className='bg-red-200 px-5 py-6 mb-4'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label='Enter Date of Issue'
                inputFormat='MM/DD/YYYY'
                className='!mb-6 w-full'
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='standard'
                    className='!mb-6 w-full'
                    helperText='Hello'
                  />
                )}
                name='dateOfIssue'
                value={form.dateOfIssue}
                onChange={(e) => {
                  setForm({ ...form, dateOfIssue: moment(e.$d).format('YYYY-MM-DDTHH:mm') })
                }}
              />
            </LocalizationProvider>
            <TextField
              id='standard-description'
              label='Description of Complaint/Issue'
              value={form.description}
              variant='standard'
              className='w-full'
              minRows={3}
              maxRows={5}
              multiline
              name='description'
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className='flex flex-wrap'>
            {tab === 'report' ? (
              <>
                <Button
                  title='TURN OFF'
                  type='red'
                  className='w-auto mx-auto mb-4'
                  onClick={() => setTab('turnOff')}
                />
                <Button
                  title='REPORT ONLY'
                  onClick={sendReport}
                  type='red'
                  className='w-auto mx-auto mb-4'
                />
                <Button
                  title='UNINSTALL'
                  type='red'
                  className='w-auto mx-auto mb-4'
                  onClick={() => setTab('uninstall')}
                />
              </>
            ) : (
              <Button
                title='DEACTIVATE'
                onClick={deactivate}
                type='red'
                className='w-auto mx-auto mb-4'
              />
            )}
          </div>
          <Alert
            className='mb-5'
            title='ATTENTION'
            body='Turning off the device will keep it in high flow mode but the device
will continue to collect shower data. '
          />
        </>
      ) : (
        <>
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
                name='turnOnDate'
                value={form.turnOnDate}
                onChange={(e) => {
                  setForm({ ...form, turnOnDate: moment(e.$d).format('YYYY-MM-DDTHH:mm') })
                }}
              />
            </LocalizationProvider>
          </div>
          <Alert
            title='Device On Date'
            body='The device will automatically turn on to save water on the date entered above.'
          />
          <Button title='CONFIRM' type='red' className='mt-16 w-auto' onClick={turnOff} />
        </>
      )}
    </div>
  )
}

export default Report
