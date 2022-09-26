import React from 'react'
import { useParams, Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'

import Button from '../../components/Button'
import Typography from '../../components/Typography'
import '../../index.css'

const Auth = () => {
  const { type } = useParams()
  return (
    <div className='flex justify-center flex-col mx-auto w-3/4'>
      {type === 'login' ? (
        <>
          <TextField
            id='standard-basic'
            label='Username'
            placeholder='Enter Your Email/Username'
            variant='standard'
            className='!mb-14'
          />
          <TextField
            id='standard-basic'
            label='Password'
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
            id='standard-basic'
            label='Name'
            placeholder='Enter Your Name'
            type='text'
            variant='standard'
            className='!mb-14'
          />
          <TextField
            id='standard-basic'
            label='Username'
            placeholder='Enter Your Username'
            type='text'
            variant='standard'
            className='!mb-14'
          />
          <TextField
            id='standard-basic'
            label='Email'
            placeholder='Enter Your Email'
            type='email'
            variant='standard'
            className='!mb-14'
          />
          <TextField
            id='standard-basic'
            label='Password'
            placeholder='Enter Your Password'
            type='text'
            variant='standard'
            className='!mb-14'
            onFocus={(e) => e.target.type === 'password'}
          />
          <Link exact to='/home' relative='/'>
            <Button className='w-28 mx-auto' title='REGISTER' type='blue' />
          </Link>
        </>
      )}
    </div>
  )
}

export default Auth
