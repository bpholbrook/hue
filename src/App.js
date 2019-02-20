// App component
import React from 'react'
import './App.css'
import Header from './components/Header'
import Hues from './containers/Hues'
import Footer from './components/Footer'

export default () => {
  return (
    <React.Fragment>
      <Header />
      <Hues />
      <Footer />
    </React.Fragment>
  )
}
