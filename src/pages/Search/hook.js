import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHref, useNavigate } from 'react-router-dom'

const useHook = () => {
  const [input, setInput] = useState('')
  const [notFound, setNotFound] = useState(false)
  const location = useHref()
  const navigate = useNavigate()

  useEffect(() => {
    // async function getSerialNumbers() {
    // try {
    //   const response = await axios.get(import.meta.env.VITE_BASE_API + 'report/', {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    //     },
    //   })
    //   if (response.status === 200 && response.statusText === 'OK') {
    //     setDevices(
    //       response.data.map((data) => {
    //         return { ...data, label: data.serial_num }
    //       }),
    //     )
    //   }
    // } catch (error) {
    //   throw new Error(error)
    // }
    // }
    // getSerialNumbers()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BASE_API + `install/?SerialNumber=${input}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        },
      )
      if (response.status === 200 && response.data.length > 0) {
        localStorage.setItem('device', JSON.stringify(response.data[0]))
        navigate(`${location}/${input}`)
      } else {
        setNotFound(true)
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  return { input, setInput, getData, notFound, setNotFound }
}

export default useHook
