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
    } else if (jwtDecode(accessToken).exp * 1000 > new Date().getTime()) {
      setIsExpired(false)
      navigate('/home')
    } else {
      if (
        jwtDecode(refreshToken).exp * 1000 > new Date().getTime() &&
        jwtDecode(accessToken).exp * 1000 <= new Date().getTime()
      ) {
        setIsExpired(true)
        getAccessToken(refreshToken).then((res) => {
          if (res.response.status === 201 || res.response.status === 200) {
            setIsExpired(false)
            navigate('/home')
          } else {
            setIsExpired(false)
            navigate('/auth/login')
          }
        })
      } else {
        setIsExpired(false)
        navigate('/auth/login')
      }
    }
  }, [])
  return { isExpired }
}

export default useHook
