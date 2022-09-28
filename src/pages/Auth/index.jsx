import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'

import Button from '../../components/Button'
import Typography from '../../components/Typography'
import Errors from '../../components/Errors'
import Popup from '../../components/Popup'
import '../../index.css'
import useHook from './hook'

const Auth = () => {
  const { type, created, error, changeHandler, onRegister } = useHook()
  return (
    <div className='flex justify-center flex-col mx-auto w-5/6'>
      {type === 'login' ? (
        <>
          <TextField
            id='standard-basic'
            label='Username'
            name='username'
            placeholder='Enter Your Email/Username'
            variant='standard'
            className='!mb-14'
          />
          <TextField
            id='standard-basic'
            label='Password'
            name='password'
            placeholder='Enter Your Password'
            variant='standard'
            className='!mb-14'
          />
          <Link exact to='/home' relative='/' className='mx-auto'>
            <Button className='mb-9 w-28' title='LOGIN' type='red' />
          </Link>
          <Link exact to='/auth/register' className='mx-auto'>
            <Button className='mb-20 w-28' title='REGISTER' type='blue' />
          </Link>
          <Typography
            style={{ fontWeight: 400 }}
            text='Is this your first time to login? Register first.'
          />
        </>
      ) : (
        <>
          <TextField
            id='standard-username'
            name='username'
            label='Username'
            placeholder='Enter Your Username'
            type='text'
            variant='standard'
            className='!mb-14'
            onChange={(e) => changeHandler(e)}
          />
          <TextField
            id='standard-email'
            name='email'
            label='Email'
            placeholder='Enter Your Email'
            type='email'
            variant='standard'
            className='!mb-14'
            onChange={(e) => changeHandler(e)}
          />
          <TextField
            id='standard-password1'
            name='password1'
            label='Password'
            placeholder='Enter Your Password'
            type='password'
            variant='standard'
            className='!mb-14'
            onChange={(e) => changeHandler(e)}
          />
          <TextField
            id='standard-password2'
            name='password2'
            label='Confirm Password'
            placeholder='Confirm Your Password'
            type='password'
            variant='standard'
            className='!mb-14'
            onChange={(e) => changeHandler(e)}
          />
          <Button onClick={onRegister} className='w-auto mx-auto' title='REGISTER' type='blue' />
        </>
      )}
      <Errors errors={error} />
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
