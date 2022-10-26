import { useEffect, useState } from 'react'
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
  const [form, setForm] = useState({
    username: '',
    first_name: '', // eslint-disable-line
    last_name: '', // eslint-disable-line
    email: '',
    password: '',
    password2: '',
  })

  const { type } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (type === 'login') setCreated(false)
    setForm({
      username: '',
      first_name: '', // eslint-disable-line
      last_name: '', // eslint-disable-line
      email: '',
      password: '',
      password2: '',
    })
    setError([])
  }, [type])

  const changeHandler = (event) => {
    let formCopy = { ...form }
    formCopy[event.target.name] = event.target.value
    setForm(formCopy)
  }

  const validation = () => {
    let regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
    for (let key in form) {
      if (form[key] === '') {
        let obj = {}
        obj[key] = 'This field cannot be blank'
        setError((err) => {
          return { ...err, ...obj }
        })
      } else {
        let obj = {}
        obj[key] = null
        setError((err) => {
          return { ...err, ...obj }
        })
      }
    }
    if (form.email !== '') {
      if (!form.email.match(regex)) {
        setError({ ...error, email: 'Email address is not valid' })
      }
    }
    if (form.password !== '' && form.password2 !== '') {
      if (form.password !== form.password2) {
        setError({ ...error, password: 'Password fields are not matching' })
      }
    }
    if (
      error.email !== null ||
      error.first_name !== null ||
      error.last_name !== null ||
      error.password !== null ||
      error.password2 !== null ||
      error.username !== null
    ) {
      return false
    } else {
      return true
    }
  }

  const onRegister = async () => {
    try {
      if (validation()) {
        const response = await axios.post(import.meta.env.VITE_BASE_API + 'users/register/', form)
        if (response.status === 201 && response.statusText === 'Created') setCreated(true)
      }
    } catch (error) {
      setError(error.response.data)
    }
  }

  const onLogin = async () => {
    try {
      const response = await axios.post(import.meta.env.VITE_BASE_API + 'users/login/', {
        username: form.username,
        password: form.password,
      })
      if (response.status === 200 && response.statusText === 'OK') {
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('refresh_token', response.data.refresh_token)
        navigate('/home')
      }
    } catch (error) {
      setError(error.response.data)
    }
  }

  return { form, type, created, error, changeHandler, onRegister, onLogin }
}

export default useHook
