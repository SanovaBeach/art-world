import React from 'react'
import {Header, Info} from '../components'

const HomePage = () => {
  document.title = 'Art World | Home'
  return (
    <React.Fragment>
      <Header />
      <Info />
    </React.Fragment>
  )
}

export default HomePage