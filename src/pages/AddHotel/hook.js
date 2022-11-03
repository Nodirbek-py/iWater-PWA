import axios from 'axios'
import { useState } from 'react'

const useHook = () => {
  const [created, setCreated] = useState(false)
  const addHotel = async (data) => {
    try {
      const response = await axios.post(import.meta.env.VITE_BASE_API + 'hotel/detail/', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      if (response.status === 201 && response.statusText === 'Created') {
        setCreated(true)
      }
    } catch (error) {
      throw new Error(error)
    }
  }
  return { addHotel, created }
}

export default useHook
