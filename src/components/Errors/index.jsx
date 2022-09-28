import React from 'react'
import PropTypes from 'prop-types'

const Errors = ({ errors }) => {
  return (
    <ul className='mt-5 list-disc'>
      {errors.map((error, i) => (
        <li key={i} className='text-red-500 text-xs my-2'>
          {error}
        </li>
      ))}
    </ul>
  )
}

Errors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
}

export default Errors
