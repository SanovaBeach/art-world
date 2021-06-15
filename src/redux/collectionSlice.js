import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'https://api.harvardartmuseums.org/'
const apiKey = process.env.REACT_APP_KEY


// get data 
export const getCollectionsAsync = createAsyncThunk(
    'collections/getCollections',
    async (size=20, page=1) => {
      const response = await axios.get(
        `${baseUrl}object?size=${size}&page=${page}&sort=rank&apikey=${apiKey}`) 
      const data = response.data.records
      const info = response.data.info
    console.log('getCollectionsAsync working')

      return {data, info}
    }
  )

// get single data
export const getSingleData = createAsyncThunk(
  'collections/getSingleData',
  async (id) => {
    const response = await axios.get(`${baseUrl}object/${id}?apikey=${apiKey}`)
    const data = response.data
    return {data}
  }
)

// load more pagination
export const fetchMore = createAsyncThunk(
  'collections/fetchMore',
  async (size, page) => {
    const response = await axios.get(`${baseUrl}object?size=${size}&page=${page}&sort=rank&apikey=${apiKey}`)
    const data = response.data.records
    const info = response.data.info
    return {data, info}
  }
)
// 
export const fetchMoreWithQuery = createAsyncThunk(
  'collections/fetchMore',
  async (size, page, query) => {
    const response = await axios.get(`${baseUrl}object?q=${query}&size=${size}&page=${page}&sort=rank&apikey=${apiKey}`)
    const data = response.data.records
    const info = response.data.info
    return {data, info, query}

  }
)

// filtering data

export const filterDataAsync = createAsyncThunk(
  'collections/filterData',
  async (query) => {
    const response = await axios.get(`https://api.harvardartmuseums.org/object?q=${query}&size=30&apikey=${apiKey}`)
    const data = response.data.records
    const info = response.data.info
    console.log('filter data working')
    console.log('info', response.data)
    return {data, info}
  }
)

const collectionSlice = createSlice({
  name:'collection',
  initialState: {
    collections: [],
    singleData: {},
    singleLoading: true,
    size: '',
    page: '',
    loading: true,
    info: {},
    searchInput:'',
    filterData: []
  },
  reducers: {},
  extraReducers: {
    [getCollectionsAsync.pending]: (state, action) => {
      state.loading = true
    },
    [getCollectionsAsync.fulfilled]: (state, action) => {
      // state.collections.push(action.payload.data)
      state.collections = action.payload.data
      state.info = action.payload.info
      state.loading = false
    },
    [fetchMore.fulfilled]: (state, action) => {
       state.collections = action.payload.data
       // action.collections = action.payload.data
    },
    [getSingleData.pending]: (state) => {
      state.loading = true
    },
    [getSingleData.fulfilled]: (state, action) => {
      state.singleData = action.payload.data
      state.singleLoading = false
    },
    [filterDataAsync.pending]: (state) => {
      state.loading = true
    },
    [filterDataAsync.fulfilled]: (state, action) => {
      state.loading = false
      state.collections = action.payload.data
      state.info = action.payload.info
      state.searchInput = action.payload.query
    },
    [fetchMoreWithQuery.fulfilled]: (state, action) => {
      state.collections = action.payload.data
    }
  }
})


export default collectionSlice.reducer