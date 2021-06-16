import React from 'react'
import {Collections, Navbar} from '../components'

const CollectionPage = () => {
  document.title = 'la Galerie d\'Or | Collections'
  

  return (
    <React.Fragment>
      <Navbar />
      <Collections />
    </React.Fragment>
  )
}

export default CollectionPage