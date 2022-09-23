import React from 'react'
import { Link } from 'react-router-dom'

import Typography from '../../components/Typography'
import Button from '../../components/Button'

const Home = () => {
  return (
    <div className='flex flex-col items-center h-full'>
      <Typography text={'Home'} style={{ marginBottom: 72 }} />
      <Link to={'/auth/login'} relative='/'>
        <Button type='red' title='Login Page' />
      </Link>
      <div className='my-8'></div>
      <Link to={'/auth/register'} relative='/'>
        <Button type='red' title='Register Page' />
      </Link>
      <div className='my-8'></div>
      <Link to={'/report'} relative='/'>
        <Button type='red' title='Report Page' />
      </Link>
      <div className='my-8'></div>
      <Link to={'/install'} relative='/'>
        <Button type='red' title='Installment Page' />
      </Link>
    </div>
  )
}

export default Home
