import React from 'react'
import {BeatLoader} from 'react-spinners'

const Loading = ({loading}) => {
  return (
    <div className='loading'>
      <BeatLoader  loading={loading} />
    </div>
  )
}

export default Loading