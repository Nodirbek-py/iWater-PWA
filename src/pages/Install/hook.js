import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const useHook = () => {
  const [tab, setTab] = useState('step1')
  const [loading, setLoading] = useState(true)
  const [device, setDevice] = useState()
  const [form, setForm] = useState({
    installDate: '',
    roomNumber: '',
  })
  const { id } = useParams()

  const changeHandler = (e) => {
    let formCopy = { ...form }
    formCopy[e.target.name] = e.target.value
    setForm(formCopy)
  }
  useEffect(() => {
    async function getSerialNumbers() {
      try {
        const response = await axios.get(import.meta.env.VITE_BASE_API + 'install', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        })
        if (response.status === 200 && response.statusText === 'OK') {
          setDevice(response.data.find((device) => device.serial_num === id))
        }
      } catch (error) {
        throw new Error(error)
      }
    }
    getSerialNumbers().then(() => setLoading(false))
  }, [])

  const installDevice = async () => {
    /* eslint-disable */
    let data = {
      user: jwtDecode(localStorage.getItem('access_token')).user_id,
      serial_num: device.serial_num,
      room_num: device.room_num || form.roomNumber,
      installation_date: form.installDate,
      is_device_installed: 1,
    }
    /* eslint-enable */

    try {
      const response = await axios.post(import.meta.env.VITE_BASE_API + 'install', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      console.log(response)
      if (response.status === 201 && response.statusText === 'Created') setTab('step3')
    } catch (error) {
      throw new Error(error)
    }
  }

  return { form, device, loading, changeHandler, tab, setTab, setForm, installDevice }
}

export default useHook
