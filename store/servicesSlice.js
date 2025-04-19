import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  services: [
    {
      name: "Resumes",
      image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=240&h=192",
    },
    {
      name: "Album Covers",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=240&h=192",
    },
    {
      name: "Flyers",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=240&h=192",
    },
    {
      name: "Instagram Stories",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=240&h=192",
    },
    {
      name: "Facebook Posts",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=240&h=192",
    },
    {
      name: "Logos",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=240&h=192",
    },
  ],
  loading: false,
  error: null
}

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    // Add reducers here if needed
  },
})

export default servicesSlice.reducer