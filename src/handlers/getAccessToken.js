import axios from 'axios'

async function getAccessToken(refreshToken) {
  try {
    const response = await axios.post(import.meta.env.VITE_BASE_API + 'users/token/refresh/', {
      refresh: refreshToken,
    })
    localStorage.setItem('access_token', response.data.access)
  } catch (error) {
    throw new Error(error)
  }
}

export default getAccessToken
