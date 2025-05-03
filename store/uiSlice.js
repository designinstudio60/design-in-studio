// store/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    }
  }
});

export const { toggleMenu } = uiSlice.actions;
export default uiSlice.reducer;