// Name component
import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Name = ({pos, hue, shade}) => {
  return (
    <span className='Hue_Shade_Name'>
      {pos === 0 ? `${hue === 'default' ? shade : `${hue} ${shade}`}` : shade}
    </span>
  )
}

Name.propTypes = {
  pos: PropTypes.number.isRequired,
  hue: PropTypes.string.isRequired,
  shade: PropTypes.string.isRequired
}

export default Name