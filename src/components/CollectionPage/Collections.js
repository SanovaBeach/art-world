import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {filterDataAsync} from '../../redux/collectionSlice'



const Collections = () => {
  const [search, setSearch] = useState('')
  const {searchInput} = useSelector((state) => state.collections)
  const dispatch = useDispatch()
  const filters = ['Classification', 'Work Type', 'Technique/Medium', 'Period', 'Place', 'Century', 'Culture', 'Gallery']

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  useEffect(()=> {
    dispatch(filterDataAsync(search))
  }, [search])


  return (
    <React.Fragment>
      <div className='Collections container'>
        <h1 className="Collections__title">Browse Our Collections</h1>
        <input 
          type="text" 
          className='Collections__search' 
          placeholder='Search by keyworld, title, artist.'
          value={search}
          onChange={handleSearch}
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
      
    </React.Fragment>
  )
}

export default Collections