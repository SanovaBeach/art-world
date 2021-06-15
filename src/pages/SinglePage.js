import React from 'react'
import {SingleData} from '../components'

const SinglePage = () => {
  document.title = 'Art World'

  return (
    <React.Fragment>
      <SingleData />
    </React.Fragment>
  )
}

export default SinglePage