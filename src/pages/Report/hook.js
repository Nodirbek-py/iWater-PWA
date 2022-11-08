import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

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

  const sendReport = async () => {
    /* eslint-disable */
    let data = {
      user: jwtDecode(localStorage.getItem('access_token')).user_id,
      serial_num: device.SerialNumber,
      room_num: device.Room_No,
      total_shower_count: Number(form.showerCount),
      total_water_saved: Number(form.waterSaved),
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
      SerialNumber: device.SerialNumber,
      Room_No: device.Room_No,
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
      SerialNumber: device.SerialNumber,
      Room_no: device.Room_No,
      Is_Device_Installed: 0,
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
