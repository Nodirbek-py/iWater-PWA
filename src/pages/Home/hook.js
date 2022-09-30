import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import isAuthenticated from '../../handlers/isAuthenticated'

const useHook = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthenticated) navigate('/auth/login')
  }, [])
}

export default useHook
