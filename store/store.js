import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import servicesReducer from './servicesSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    services: servicesReducer,
  },
})