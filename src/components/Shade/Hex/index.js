// Hex component
import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Hex = ({hex}) => {
  return (
    <span className='Hue_Shade_Hex'>{hex}</span>
  )
}

Hex.propTypes = {
  hex: PropTypes.string.isRequired
}

export default Hex