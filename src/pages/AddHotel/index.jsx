import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'

import Button from '../../components/Button'
import useHook from './hook'
import Typography from '../../components/Typography'

const AddHotel = () => {
  const { addHotel, created } = useHook()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => addHotel(data)

  return (
    <div className='mx-auto w-5/6'>
      {created && (
        <Typography
          text='New Hotel Successful Registered Confirm Details Below.'
          style={{ textTransform: 'uppercase', textAlign: 'center', marginBottom: 48 }}
          type='error'
        />
      )}
      <form className='flex justify-center flex-col mx-auto w-full'>
        <TextField
          id='standard-username'
          label='Hotel Name'
          name='hotel-name'
          type='text'
          placeholder='Enter Hotel Name'
          variant='standard'
          className='!mb-14'
          {...register('Hotel_Name', { required: 'This field may not be blank' })}
          value={watch('Hotel_Name')}
          helperText={errors.Hotel_Name?.type === 'required' && errors.Hotel_Name?.message}
          error={errors.Hotel_Name?.type === 'required'}
        />
        <TextField
          id='standard-username'
          label='Hotel Region'
          name='hotel-region'
          type='text'
          placeholder='Enter Hotel Name'
          variant='standard'
          className='!mb-14'
          {...register('Hotel_Region', { required: 'This field may not be blank' })}
          value={watch('Hotel_Region')}
          helperText={errors.Hotel_Region?.type === 'required' && errors.Hotel_Region?.message}
          error={errors.Hotel_Region?.type === 'required'}
        />
        <TextField
          id='standard-wifi'
          label='WiFi Name'
          name='wifiname'
          type='text'
          placeholder='Enter WiFi Network Name'
          variant='standard'
          className='!mb-14'
          {...register('WiFi_SSID', { required: 'This field may not be blank' })}
          value={watch('WiFi_SSID')}
          helperText={errors.WiFi_SSID?.type === 'required' && errors.WiFi_SSID?.message}
          error={errors.WiFi_SSID?.type === 'required'}
        />
        <TextField
          id='standard-wifipassword'
          label='WiFi Pasword'
          name='wifipassword'
          type='text'
          placeholder='Enter WiFi Network Password'
          variant='standard'
          className='!mb-14'
          {...register('WiFi_Password', { required: 'This field may not be blank' })}
          value={watch('WiFi_Password')}
          helperText={errors.WiFi_Password?.type === 'required' && errors.WiFi_Password?.message}
          error={errors.WiFi_Password?.type === 'required'}
        />
        {!created ? (
          <Button
            onClick={handleSubmit(onSubmit)}
            className='mb-9 w-auto mx-auto'
            title='LOGIN'
            type='red'
          />
        ) : (
          <>
            <Button
              onClick={handleSubmit(onSubmit)}
              className='mb-9 mx-auto'
              title='EDIT DETAILS'
              type='red'
            />
            <Link to='/auth/login'>
              <Button className='mb-9 w-full mx-auto' title='Confirm' type='red' />
            </Link>
          </>
        )}
      </form>
    </div>
  )
}

export default AddHotel
