// Shade component
import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import copyStringToClipboard from '../../helpers/copyStringToClipboard'
import Name from './Name'
import Hex from './Hex'


const Shade = ({ hues, hue, shade, pos }) => {
  const { text, hex } = hues[hue][shade]

  const shadeClass = `Hue_Shade ${
    text === 'dark' ? 'Hue_Shade--dark' : 'Hue_Shade--light'
  }`
  
  const styles = { backgroundColor: hex }

  const handleClick = e => {
    copyStringToClipboard(hex.toLowerCase())
    const child = e.currentTarget.children[1]
    child.style.fontStyle = 'italic'
    child.innerText = 'Copied to clipboard'
    setTimeout(() => {
      child.style.fontStyle = 'inherit'
      child.innerText = hex.toLowerCase()
    }, 1000)
  }

  return (
    <div
      className={shadeClass}
      style={styles}
      onClick={handleClick}
    >
      <Name pos={pos} hue={hue} shade={shade} />
      <Hex hex={hex.toLowerCase()} />
    </div>
  )
}

Shade.propTypes = {
  hues: PropTypes.object.isRequired,
  hue: PropTypes.string.isRequired,
  shade: PropTypes.string.isRequired,
  pos: PropTypes.number.isRequired
}

export default Shade
