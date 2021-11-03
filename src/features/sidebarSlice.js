import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isVisible: true,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.isVisible = !state.isVisible;
    },
    openSidebar: (state, action) => {
      state.isVisible = true;
    },
    closeSidebar: (state, action) => {
      state.isVisible = false;
    },
  },
});

export const { toggleSidebar, openSidebar, closeSidebar } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
