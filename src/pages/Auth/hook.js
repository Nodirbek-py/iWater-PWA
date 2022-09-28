import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

  useEffect(() => {
    if (type === 'login') setCreated(false)
  }, [type])

  const changeHandler = (event) => {
    let formCopy = { ...form }
    formCopy[event.target.name] = event.target.value
    setForm(formCopy)
  }

  const onRegister = async () => {
    try {
      const response = await axios.post(import.meta.env.VITE_BASE_API + 'users/register/', form)
      if (response.status === 201 && response.statusText === 'Created') setCreated(true)
    } catch (error) {
      let errors = []
      for (let keys in error.response.data) {
        errors.push(error.response.data[keys])
      }
      setError(errors)
    }
  }
  return { type, created, error, changeHandler, onRegister }
}

export default useHook
