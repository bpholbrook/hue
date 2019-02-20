// Hues component
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import debounce from '../../helpers/debounce'
import Hue from '../Hue'
import Spacers from './spacerManager'

const Hues = ({ hues }) => {
  const huesElement = useRef()
  const [spacerComponents, setSpacerComponents] = useState([])

  const handleResizeEvents = callback => {
    window.addEventListener('resize', () => callback())
    return window.removeEventListener('resize', () => callback())
  }

  useEffect(() => {
    const children = new Array(...huesElement.current.children)
    const spacers = new Spacers(children)
    setSpacerComponents(spacers.update())
    return handleResizeEvents(debounce(() => setSpacerComponents(spacers.update()), 250))
  }, [])

  const hueComponents = Object.keys(hues).map((hue, key) => (
    <Hue hues={hues} hue={hue} key={key} />
  ))

  return (
    <div className='Hues' ref={huesElement}>
      {hueComponents}
      {spacerComponents}
    </div>
  )
}

Hues.propTypes = {
  hues: PropTypes.object.isRequired
}

export default Hues
