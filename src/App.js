// App component
import React from 'react'
import './App.css'
import Header from './components/Header'
import Hues from './containers/Hues'

export default () => {
  return (
    <React.Fragment>
      <Header />
      <Hues />
    </React.Fragment>
  )
}
