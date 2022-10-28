import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'

import Button from '../../components/Button'
import Typography from '../../components/Typography'
import Popup from '../../components/Popup'
import '../../index.css'
import useHook from './hook'

const Auth = () => {
  const { form, type, created, error, changeHandler, onRegister, onLogin } = useHook()
  return (
    <div className='flex justify-center flex-col mx-auto w-5/6'>
      {type === 'login' ? (
        <>
          <TextField
            id='standard-username'
            label='Username'
            name='username'
            type='text'
            placeholder='Enter Your Username'
            variant='standard'
            className='!mb-14'
            value={form.username}
            onChange={(e) => changeHandler(e)}
            helperText={error.username}
            error={error.username}
          />
          <TextField
            id='standard-password1'
            label='Password'
            name='password'
            type='password'
            placeholder='Enter Your Password'
            variant='standard'
            className='!mb-14'
            value={form.password}
            onChange={(e) => changeHandler(e)}
            helperText={error.password}
            error={error.password}
          />
          <Typography
            text={error.detail}
            type='error'
            style={{ marginBottom: 15, textAlign: 'center' }}
          />
          <Button onClick={onLogin} className='mb-9 w-auto mx-auto' title='LOGIN' type='red' />
          <Link exact to='/auth/register' className='mx-auto'>
            <Button className='mb-20 w-auto' title='REGISTER' type='blue' />
          </Link>
          <Typography
            style={{ fontWeight: 400 }}
            text='Is this your first time to login? Register first.'
          />
        </>
      ) : (
        <>
          <TextField
            id='standard-firstname'
            name='first_name'
            label='Firstname'
            placeholder='Enter Your Firstname'
            type='text'
            variant='standard'
            className='!mb-14'
            value={form.first_name}
            onChange={(e) => changeHandler(e)}
            helperText={error.first_name}
            error={error.first_name}
          />
          <TextField
            id='standard-lastname'
            name='last_name'
            label='Lastname'
            placeholder='Enter Your Lastname'
            type='text'
            variant='standard'
            className='!mb-14'
            value={form.last_name}
            onChange={(e) => changeHandler(e)}
            helperText={error.last_name}
            error={error.last_name}
          />
          <TextField
            id='standard-username'
            name='username'
            label='Username'
            placeholder='Enter Your Username'
            type='text'
            variant='standard'
            className='!mb-14'
            value={form.username}
            onChange={(e) => changeHandler(e)}
            helperText={error.username}
            error={error.username}
          />
          <TextField
            id='standard-email'
            name='email'
            label='Email'
            placeholder='Enter Your Email'
            type='email'
            variant='standard'
            className='!mb-14'
            value={form.email}
            onChange={(e) => changeHandler(e)}
            helperText={error.email}
            error={error.email}
          />
          <TextField
            id='standard-password'
            name='password'
            label='Password'
            placeholder='Enter Your Password'
            type='password'
            variant='standard'
            className='!mb-14'
            value={form.password}
            onChange={(e) => changeHandler(e)}
            helperText={error.password}
            error={error.password}
          />
          <TextField
            id='standard-password2'
            name='password2'
            label='Confirm Password'
            placeholder='Confirm Your Password'
            type='password'
            variant='standard'
            className='!mb-14'
            value={form.password2}
            onChange={(e) => changeHandler(e)}
            helperText={error.password2}
            error={error.password2}
          />
          <Button onClick={onRegister} className='w-auto mx-auto' title='REGISTER' type='blue' />
        </>
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
