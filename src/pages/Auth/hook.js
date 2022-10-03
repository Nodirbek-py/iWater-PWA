import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const useHook = () => {
  const [created, setCreated] = useState(false)
  const [error, setError] = useState([])
  const [form, setForm] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  })

  const { type } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (type === 'login') setCreated(false)
    setForm({
      username: '',
      email: '',
      password1: '',
      password2: '',
    })
    setError([])
  }, [type])

  const changeHandler = (event) => {
    let formCopy = { ...form }
    formCopy[event.target.name] = event.target.value
    setForm(formCopy)
  }

  const onRegister = async () => {
    try {
      const response = await axios.post(import.meta.env.VITE_BASE_API + 'users/register', form)
      if (response.status === 201 && response.statusText === 'Created') setCreated(true)
    } catch (error) {
      let errors = []
      for (let keys in error.response.data) {
        errors.push(error.response.data[keys])
      }
      setError(errors)
    }
  }

  const onLogin = async () => {
    try {
      const response = await axios.post(import.meta.env.VITE_BASE_API + 'users/login', {
        email: form.email,
        password: form.password1,
      })
      if (response.status === 200 && response.statusText === 'OK') {
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('refresh_token', response.data.refresh_token)
        navigate('/home')
      }
    } catch (error) {
      let errors = []
      for (let keys in error.response.data) {
        errors.push(error.response.data[keys])
      }
      setError(errors)
    }
  }

  return { form, type, created, error, changeHandler, onRegister, onLogin }
}

export default useHook
