import PropTypes from 'prop-types'

const Typography = ({ text, type, style }) => {
  switch (type) {
    case 'error':
      return (
        <p style={style} className='text-red-500 text-center font-medium'>
          {text}
        </p>
      )
    case 'info':
      return (
        <p style={style} className='text-zinc-500 text-xs'>
          {text}
        </p>
      )
    case 'blue':
      return (
        <p style={style} className='text-blueDark font-medium'>
          {text}
        </p>
      )
    default:
      return (
        <p style={style} className='font-medium'>
          {text}
        </p>
      )
  }
}

Typography.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
}

export default Typography
