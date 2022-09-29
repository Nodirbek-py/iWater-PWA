import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import axios from 'axios'

const useHook = () => {
  const [accessToken] = useState(localStorage.getItem('access_token'))
  const [refreshToken] = useState(localStorage.getItem('refresh_token'))
  const [isExpired, setIsExpired] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    async function getAccessToken() {
      try {
        const response = await axios.post(import.meta.env.VITE_BASE_API + 'users/token/refresh/', {
          refresh: refreshToken,
        })
        localStorage.setItem('access_token', response.data.access)
        setIsExpired(false)
      } catch (error) {
        throw new Error(error)
      }
    }
    if (!accessToken || !refreshToken) {
      navigate('/auth/login')
      setIsExpired(false)
    } else {
      if (jwtDecode(accessToken).exp * 1000 <= new Date().getTime()) {
        setIsExpired(true)
        getAccessToken()
      } else {
        setIsExpired(false)
        navigate('/home')
      }
    }
  }, [])
  return { isExpired }
}

export default useHook
