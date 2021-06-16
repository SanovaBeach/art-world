import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import collectionReducer from './collectionSlice'

import thunk from 'redux-thunk'

const middleware = [...getDefaultMiddleware(), thunk]

export default configureStore({
  reducer: {
    collections: collectionReducer,
  },
  middleware
})

