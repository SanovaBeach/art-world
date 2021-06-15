import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getInfoAsync} from '../../redux/infoSlice'
import Loading from '../Loading/Loading'

const Info = () => {
  const dispatch = useDispatch()
  const {data, infoLoading} = useSelector((state)=> state.info)

  useEffect(()=> {
    dispatch(getInfoAsync())

  }, [dispatch])
 
  

  if(infoLoading) {
    return <Loading />
  }


  return (
    <React.Fragment>
      Info 
    </React.Fragment>
  )
}

export default Info