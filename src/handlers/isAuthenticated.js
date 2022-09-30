import jwtDecode from 'jwt-decode'

import getAccessToken from './getAccessToken'

function isAuthenticated() {
  let accessToken = localStorage.getItem('access_token')
  let refreshToken = localStorage.getItem('refresh_token')

  if (!accessToken || !refreshToken) {
    return false
  } else {
    let isExpired = jwtDecode(accessToken).exp * 1000 <= new Date().getTime()
    if (isExpired) {
      getAccessToken().then(() => {
        return true
      })
    } else {
      return true
    }
  }
}

export default isAuthenticated
