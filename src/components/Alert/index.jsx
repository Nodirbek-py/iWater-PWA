import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'
import infoIcon from '../../assets/icons/info.svg'

const Alert = ({ title, body }) => {
  return (
    <div className='p-4 border border-sky-400 rounded flex justify-between min-h-min min-w-full'>
      <div className='w-1/12 mr-3'>
        <img src={infoIcon} alt='Info icon' />
      </div>
      <div className='w-11/12'>
        <div className='flex items-center justify-between w-full'>
          <Typography text={title} type='blue' />
          <Typography style={{ fontSize: 14 }} text='Note' type='blue' />
        </div>
        <div>
          <Typography style={{ marginTop: 8 }} text={body} type='info' />
        </div>
      </div>
    </div>
  )
}

Alert.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
}

export default Alert
