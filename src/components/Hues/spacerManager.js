// SpacerManager class
import React from 'react'
import Spacer from '../Spacer'

class SpacerManager {
  constructor(hues) {
    this.hues = hues
  }

  numOfHuesPerRow = () => {
    return this.hues.reduce((huesPerRow, hueEl, index, hueEls) => {
      const currentTop = hueEl.offsetTop
      const firstTop = hueEls[0].offsetTop
      if (index > 0 && currentTop !== firstTop) return huesPerRow
      else return huesPerRow + 1
    }, 0)
  }

  numOfSpacersNeeded = huesPerRow => {
    return huesPerRow - this.lastRowLength(huesPerRow)
  }

  lastRowLength = huesPerRow => {
    return this.hues.length % huesPerRow || huesPerRow
  }

  update = (count = -1, spacers = []) => {
    if (count === 0) return spacers
    else if (count === -1)
      return this.update(this.numOfSpacersNeeded(this.numOfHuesPerRow()))
    else
      return this.update(count - 1, [...spacers, <Spacer key={count} />])
  }
}

export default SpacerManager
