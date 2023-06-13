import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../api/slice'
// import postReducer from '../features/goals/goalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // posts: postReducer,
  },
})