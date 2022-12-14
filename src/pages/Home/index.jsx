import { Link } from 'react-router-dom'

import Typography from '../../components/Typography'
import Button from '../../components/Button'
import useHook from './hook'

const Home = () => {
  useHook()
  return (
    <div className='flex flex-col items-center h-full relative mx-auto w-5/6'>
      <Typography text='WHAT WOULD YOU LIKE TO DO TODAY?' style={{ marginBottom: 150 }} />
      <Link to={'/report'} relative='/' className='!my-8'>
        <Button type='red' title='Report Bug' />
      </Link>
      <Link to={'/install'} relative='/'>
        <Button type='red' title='Installation' />
      </Link>
    </div>
  )
}

export default Home
