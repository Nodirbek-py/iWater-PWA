import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'

import Button from '../../components/Button'
import Typography from '../../components/Typography'
import Popup from '../../components/Popup'
import '../../index.css'
import useHook from './hook'

const Auth = () => {
  const { error, type, created, onRegister, onLogin } = useHook()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmitLogin = (data) => onLogin(data)
  const onSubmitRegister = (data) => onRegister(data)
  return (
    <div className='mx-auto w-5/6'>
      {type === 'login' ? (
        <form className='flex justify-center flex-col mx-auto w-full'>
          <TextField
            id='standard-username'
            label='Username'
            name='username'
            type='text'
            placeholder='Enter Your Username'
            variant='standard'
            className='!mb-14'
            {...register('username', { required: 'This field may not be blank' })}
            value={watch('username')}
            helperText={errors.username?.type === 'required' && errors.username?.message}
            error={errors.username?.type === 'required'}
          />
          <TextField
            id='standard-password1'
            label='Password'
            name='password'
            type='password'
            placeholder='Enter Your Password'
            variant='standard'
            className='!mb-14'
            {...register('password', { required: 'This field may not be blank' })}
            value={watch('password')}
            helperText={errors.password?.type === 'required' && errors.password?.message}
            error={errors.password?.type === 'required'}
          />
          <Typography
            text={error.detail}
            type='error'
            style={{ marginBottom: 15, textAlign: 'center' }}
          />
          <Button
            onClick={handleSubmit(onSubmitLogin)}
            className='mb-9 w-auto mx-auto'
            title='LOGIN'
            type='red'
          />
          <Link exact to='/auth/register' className='mx-auto'>
            <Button className='mb-20 w-auto' title='REGISTER' type='blue' />
          </Link>
          <Typography
            style={{ fontWeight: 400 }}
            text='Is this your first time to login? Register first.'
          />
        </form>
      ) : (
        <form className='flex justify-center flex-col mx-auto w-full'>
          <TextField
            id='standard-firstname'
            name='first_name'
            label='Firstname'
            placeholder='Enter Your Firstname'
            type='text'
            variant='standard'
            className='!mb-14'
            {...register('first_name', { required: 'This field may not be blank' })}
            value={watch('first_name')}
            helperText={errors.first_name?.type === 'required' && errors.first_name?.message}
            error={errors.first_name?.type === 'required'}
          />
          <TextField
            id='standard-lastname'
            name='last_name'
            label='Lastname'
            placeholder='Enter Your Lastname'
            type='text'
            variant='standard'
            className='!mb-14'
            {...register('last_name', { required: 'This field may not be blank' })}
            value={watch('last_name')}
            helperText={errors.last_name?.type === 'required' && errors.last_name?.message}
            error={errors.last_name?.type === 'required'}
          />
          <TextField
            id='standard-username'
            name='username'
            label='Username'
            placeholder='Enter Your Username'
            type='text'
            variant='standard'
            className='!mb-14'
            {...register('username', { required: 'This field may not be blank' })}
            value={watch('username')}
            helperText={errors.username?.type === 'required' && errors.username?.message}
            error={errors.username?.type === 'required'}
          />
          <TextField
            id='standard-email'
            name='email'
            label='Email'
            placeholder='Enter Your Email'
            type='email'
            variant='standard'
            className='!mb-14'
            {...register('email', {
              required: 'This field may not be blank',
              pattern: {
                value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Email is not valid',
              },
            })}
            value={watch('email')}
            helperText={errors.email && errors.email?.message}
            error={errors.email}
          />
          {errors.mail?.message}
          <TextField
            id='standard-password'
            name='password'
            label='Password'
            placeholder='Enter Your Password'
            type='password'
            variant='standard'
            className='!mb-14'
            {...register('password', { required: 'This field may not be blank' })}
            value={watch('password')}
            helperText={errors.password?.type === 'required' && errors.password?.message}
            error={errors.password?.type === 'required'}
          />
          <TextField
            id='standard-password2'
            name='password2'
            label='Confirm Password'
            placeholder='Confirm Your Password'
            type='password'
            variant='standard'
            className='!mb-14'
            {...register('password2', { required: 'This field may not be blank' })}
            value={watch('password2')}
            helperText={errors.password?.type === 'required' && errors.first_name?.message}
            error={errors.password?.type === 'required'}
          />
          <Button
            onClick={handleSubmit(onSubmitRegister)}
            className='w-auto mx-auto'
            title='REGISTER'
            type='blue'
          />
        </form>
      )}
      {created && (
        <Popup>
          <div className='flex flex-col justify-center items-center'>
            <Typography
              text='User is created! Please sign in to use our services'
              type='blue'
              style={{ textAlign: 'center', marginBottom: 10 }}
            />
            <Link to='/auth/login'>
              <Button title='Login' type='blue' />
            </Link>
          </div>
        </Popup>
      )}
    </div>
  )
}
export default Auth
