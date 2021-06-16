import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {filterDataAsync} from '../../redux/collectionSlice'

import Contents from './Contents'


const Collections = () => {
  const [search, setSearch] = useState('')

  const dispatch = useDispatch()
  const filters = ['Classification', 'Work Type', 'Technique/Medium', 'Period', 'Place', 'Century', 'Culture', 'Gallery']

  function handleSearch(event) {
    if(event.key === 'Enter')
      dispatch(filterDataAsync(search))
  }


  return (
    <React.Fragment>
      <div className='Collections container'>
        <h1 className="Collections__title">Browse Our Collections</h1>
        <input 
          type="text" 
          className='Collections__search' 
          placeholder='Search by keyworld, title, artist.'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyPress={handleSearch}
        />
        <div className="Collections__filters">
          {filters.map((filter, index)=> (
            <button 
              key={index} 
              className='Collections__filters--filter'
            >
              {filter}
            </button>
          ))}
        </div>
        <hr className='hline' />
      </div>
      <Contents search={search} />
      
    </React.Fragment>
  )
}

export default Collections