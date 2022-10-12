import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const useHook = () => {
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('report')
  const [device, setDevice] = useState()
  const [form, setForm] = useState({
    showerCount: '',
    waterSaved: '',
    description: '',
    dateOfIssue: '',
    turnOnDate: '',
  })
  const { id } = useParams()
  const navigate = useNavigate()

  const changeHandler = (e) => {
    let formCopy = { ...form }
    formCopy[e.target.name] = e.target.value
    setForm(formCopy)
  }

  useEffect(() => {
    async function getSerialNumbers() {
      try {
        const response = await axios.get(import.meta.env.VITE_BASE_API + 'report/', {
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

  const sendReport = async () => {
    /* eslint-disable */
    let data = {
      user: jwtDecode(localStorage.getItem('access_token')).user_id,
      serial_num: device.serial_num,
      room_num: device.room_num,
      total_shower_count: Number(form.showerCount),
      total_water_saved: form.waterSaved + 'L',
      date_of_issue: form.dateOfIssue,
      complaint_description: form.description,
    }
    /* eslint-enable */
    try {
      const response = await axios.post(import.meta.env.VITE_BASE_API + 'report/', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      if (response.status === 201 && response.statusText === 'Created') navigate('/success')
    } catch (error) {
      throw new Error(error)
    }
  }

  const turnOff = async () => {
    /* eslint-disable */
    let data = {
      user: jwtDecode(localStorage.getItem('access_token')).user_id,
      serial_num: device.serial_num,
      room_num: device.room_num,
      off_on: 1,
      turn_on_date: form.turnOnDate,
    }
    /* eslint-enable */
    try {
      const response = await axios.post(import.meta.env.VITE_BASE_API + 'device/on_off/', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      if (response.status === 201 && response.statusText === 'Created') navigate('/success')
    } catch (error) {
      throw new Error(error)
    }
  }

  const deactivate = async () => {
    /* eslint-disable */
    let data = {
      user: jwtDecode(localStorage.getItem('access_token')).user_id,
      serial_num: device.serial_num,
      room_num: device.room_num,
      is_device_installed: 0,
    }
    /* eslint-enable */
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_API + 'is_device/installed/',
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        },
      )
      if (response.status === 201 && response.statusText === 'Created') navigate('/success')
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    loading,
    device,
    changeHandler,
    form,
    setForm,
    sendReport,
    tab,
    setTab,
    turnOff,
    deactivate,
  }
}

export default useHook
