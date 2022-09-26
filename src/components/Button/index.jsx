import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ title, type, className }) => {
  return type === 'red' ? (
    <button
      className={
        'py-2 px-6 text-white font-medium hover:bg-red-500 bg-red-600 transition duration-300 border-none outline-none shadow-lg rounded uppercase ' +
        className
      }
    >
      {title}
    </button>
  ) : (
    <button
      className={
        'py-2 px-6 text-white hover:bg-blueLight font-medium bg-blue transition duration-300  border-none outline-none shadow-lg rounded uppercase ' +
        className
      }
    >
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
}

export default Button
