// Hues component
import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Hue from '../Hue'

const Hues = ({ hues }) => {

  const hueComponents = Object.keys(hues).map((hue, key) => (
    <Hue hues={hues} hue={hue} key={key} />
  ))

  return (
    <div className='Hues'>
      {hueComponents}
    </div>
  )
}

Hues.propTypes = {
  hues: PropTypes.object.isRequired
}

export default Hues
