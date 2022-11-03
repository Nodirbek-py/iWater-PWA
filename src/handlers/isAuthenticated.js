import jwtDecode from 'jwt-decode'

import getAccessToken from './getAccessToken'

function isAuthenticated() {
  let accessToken = localStorage.getItem('access_token')
  let refreshToken = localStorage.getItem('refresh_token')

  if (!accessToken || !refreshToken) {
    return false
  } else if (jwtDecode(accessToken).exp * 1000 > new Date().getTime()) {
    return true
  } else {
    if (
      jwtDecode(refreshToken).exp * 1000 > new Date().getTime() &&
      jwtDecode(accessToken).exp * 1000 <= new Date().getTime()
    ) {
      getAccessToken(refreshToken).then((res) => {
        if (res.response.status === 201 || res.response.status === 200) {
          return true
        } else {
          return false
        }
      })
    } else {
      return false
    }
  }
}

export default isAuthenticated
