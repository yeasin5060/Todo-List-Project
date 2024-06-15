import { configureStore } from '@reduxjs/toolkit'
import userdetails from '../createslice/userdetails'

export const store = configureStore({
  reducer: {
    userdata : userdetails
  },
})