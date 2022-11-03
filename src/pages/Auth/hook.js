import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const useHook = () => {
  const [created, setCreated] = useState(false)
  const [error, setError] = useState({
    email: null,
    first_name: null, // eslint-disable-line
    last_name: null, // eslint-disable-line
    password: null,
    password2: null,
    username: null,
  })
  const { type } = useParams()
  const navigate = useNavigate()

  const onRegister = async (data) => {
    try {
      const response = await axios.post(import.meta.env.VITE_BASE_API + 'users/register/', data)
      if (response.status === 201 && response.statusText === 'Created') setCreated(true)
    } catch (error) {
      setError(error.response.data)
    }
  }

  const onLogin = (data) => {
    axios
      .post(import.meta.env.VITE_BASE_API + 'users/login/', data)
      .then((res) => {
        if (res.status === 200) {
          navigate('/home')
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setError(err.response.data)
        } else {
          setError({ detail: err.response.data.detail })
        }
      })
  }

  return { type, created, error, onRegister, onLogin }
}

export default useHook
