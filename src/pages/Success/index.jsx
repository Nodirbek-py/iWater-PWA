import React from 'react'
import { Link } from 'react-router-dom'

import Typography from '../../components/Typography'
import Button from '../../components/Button'

const Success = () => {
  return (
    <div className='flex flex-col justify-center items-center relative mx-auto w-5/6 mt-32 h-96'>
      <Typography text='SUCCESS' type='error' style={{ marginBottom: 140 }} />
      <Link to='/welcome'>
        <Button title='HOME' type='red' />
      </Link>
    </div>
  )
}

export default Success
