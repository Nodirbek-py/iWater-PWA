import React from 'react'
import PropTypes from 'prop-types'

const Typography = ({ text, type }) => {
  switch (type) {
    case 'error':
      return <p className='text-red-600 text-center font-medium'>{text}</p>
    case 'info':
      return <p className='text-zinc-500 text-xs'>{text}</p>
    case 'blue':
      return <p className='text-blueDark font-medium'>{text}</p>
    default:
      return <p className='font-medium'>{text}</p>
  }
}

Typography.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}

export default Typography
