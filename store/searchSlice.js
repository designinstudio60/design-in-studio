// store/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  type: 'all',
  page: 1,
  results: [],
  isLoading: false,
  error: null,
  totalHits: 0,
  relatedTags: [],
  showFilters: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchParams: (state, action) => {
      const { query, type, page } = action.payload;
      state.query = query;
      state.type = type || 'all';
      state.page = page || 1;
    },
    setResults: (state, action) => {
      state.results = action.payload.results;
      state.totalHits = action.payload.totalHits;
    },
    setRelatedTags: (state, action) => {
      state.relatedTags = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    toggleFilters: (state) => {
      state.showFilters = !state.showFilters;
    },
    clearResults: (state) => {
      state.results = [];
      state.totalHits = 0;
      state.relatedTags = [];
    },
  },
});

export const {
  setSearchParams,
  setResults,
  setRelatedTags,
  setLoading,
  setError,
  toggleFilters,
  clearResults,
} = searchSlice.actions;

export default searchSlice.reducer;