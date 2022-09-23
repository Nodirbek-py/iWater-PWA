import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {
  const error = useRouteError()
  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>
        <i>
          {error.status} | {error.statusText || error.message}
        </i>
      </p>
    </div>
  )
}

export default NotFound
