import React from 'react'
import {Collections, Contents} from '../components'

const CollectionPage = () => {
  document.title = 'Art World | Collections'
  

  return (
    <React.Fragment>
      <Collections />
      <Contents />
    </React.Fragment>
  )
}

export default CollectionPage