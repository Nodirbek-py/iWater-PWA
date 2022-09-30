import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import getAccessToken from '../../handlers/getAccessToken'

const useHook = () => {
  const [accessToken] = useState(localStorage.getItem('access_token'))
  const [refreshToken] = useState(localStorage.getItem('refresh_token'))
  const [isExpired, setIsExpired] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      navigate('/auth/login')
      setIsExpired(false)
    } else {
      if (jwtDecode(accessToken).exp * 1000 <= new Date().getTime()) {
        setIsExpired(true)
        getAccessToken(refreshToken).then(() => setIsExpired(false))
      } else {
        setIsExpired(false)
        navigate('/home')
      }
    }
  }, [])
  return { isExpired }
}

export default useHook
