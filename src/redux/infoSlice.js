import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {getSingleData} from './collectionSlice'

const baseUrl = 'https://api.harvardartmuseums.org/'
const apiKey = process.env.REACT_APP_KEY

export const getInfoAsync = createAsyncThunk(
  'info/getInfoAsync',
  async (type = 'person') => {
    const response = await axios.get(`${baseUrl}person?apikey=${apiKey}`)
    const data = response.data.records[
      Math.floor(Math.random() * response.data.records.length - 1)
    ]
    
    
    return {data}
  }
)

const infoSlice = createSlice({
  name: 'info',
  initialState: {
    data: {},
    infoLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getInfoAsync.fulfilled]: (state, action) => {
      state.data = action.payload.data
      state.infoLoading = false
    }
  }

})

export default infoSlice.reducer