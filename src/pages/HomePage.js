import React from 'react'
import {Header, Info, Navbar} from '../components'
import {HomeInfo, HomeInfo2, HomeInfo3} from './HomeInfo'

const HomePage = () => {
  document.title = 'la Galerie d\'Or | Home'
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Info {...HomeInfo} />
      <Info {...HomeInfo2} />
      <Info {...HomeInfo3} />
    </React.Fragment>
  )
}

export default HomePage