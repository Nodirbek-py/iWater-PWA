import { useEffect, useState } from 'react'
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

  const changeHandler = (e) => {
    let formCopy = { ...form }
    formCopy[e.target.name] = e.target.value
    setForm(formCopy)
  }
  useEffect(() => {
    let device = JSON.parse(localStorage.getItem('device'))
    setDevice(device)
    setLoading(false)
  }, [])

  const installDevice = async () => {
    /* eslint-disable */
    let data = {
      user: jwtDecode(localStorage.getItem('access_token')).user_id,
      SerialNumber: device.SerialNumber,
      Room_No: device.Room_No || form.roomNumber,
      installation_date: form.installDate,
      Registration_DateTime: form.installDate,
      Is_Device_Installed: 1,
    }
    /* eslint-enable */

    try {
      const response = await axios.post(import.meta.env.VITE_BASE_API + 'install/', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      if (response.status === 201 && response.statusText === 'Created') setTab('step3')
    } catch (error) {
      throw new Error(error)
    }
  }

  return { form, device, loading, changeHandler, tab, setTab, setForm, installDevice }
}

export default useHook
