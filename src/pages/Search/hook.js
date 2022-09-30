import { useEffect, useState } from 'react'
import axios from 'axios'

const useHook = () => {
  const [devices, setDevices] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    async function getSerialNumbers() {
      try {
        const response = await axios.get(import.meta.env.VITE_BASE_API + 'report/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        })
        if (response.status === 200 && response.statusText === 'OK') {
          setDevices(
            response.data.map((data) => {
              return { ...data, label: data.serial_num }
            }),
          )
        }
      } catch (error) {
        throw new Error(error)
      }
    }
    getSerialNumbers()
  }, [])

  return { devices, input, setInput }
}

export default useHook
