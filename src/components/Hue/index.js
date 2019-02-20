// Hue component
import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Shade from '../Shade'

const Hue = ({ hues, hue }) => {
  const shadeComponents = Object.keys(hues[hue]).map((shade, key) => (
    <Shade key={key} pos={key} hues={hues} hue={hue} shade={shade} />
  ))
  return (
    <div className='Hue'>{shadeComponents}</div>
  )
}

Hue.propTypes = {
  hues: PropTypes.object.isRequired,
  hue: PropTypes.string.isRequired
}

export default Hue
