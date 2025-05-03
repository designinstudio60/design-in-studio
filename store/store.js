// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import themeReducer from './themeSlice';
import servicesReducer from './servicesSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    theme: themeReducer,
    services: servicesReducer,
    ui: uiReducer
  },
});