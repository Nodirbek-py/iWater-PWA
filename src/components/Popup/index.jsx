import React from 'react'
import PropTypes from 'prop-types'

const Popup = ({ children }) => {
  return (
    <div className='top-0 left-0 fixed w-full h-full bg-slate-600/50 backdrop-blur-xl z-50 flex items-center justify-center p-10'>
      <div className='py-8 px-16 rounded-xl shadow-md shadow-white bg-white'>{children}</div>
    </div>
  )
}

Popup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default Popup
