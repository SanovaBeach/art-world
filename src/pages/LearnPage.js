import React from 'react'
import {Navbar, Info} from '../components'
import {learnInfo, learnInfo2, learnInfo3, learnInfo4} from './LearnInfo'

const LearnPage = () => {
  document.title = "la Galerie d'Or | Learn"
  return (
    <React.Fragment>
      <Navbar />
      <Info {...learnInfo} />
      <Info {...learnInfo2} />
      <Info {...learnInfo3} />
      <Info {...learnInfo4} />
    </React.Fragment>
  )
}

export default LearnPage