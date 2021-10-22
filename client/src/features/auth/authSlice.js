import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthorized: false,
    authErrors: [],
    profileErrors: [],
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.isAuthorized = true;
    },
    clearUser: (state, action) => {
      state.user = null;
      state.isAuthorized = false;
    },
    setAuthError: (state, { payload }) => {
      state.user = null;
      state.isAuthorized = false;
      state.authErrors = state.authErrors.concat({
        ...payload,
        timestamp: new Date().toLocaleString(),
      });
    },
    updateUserProfile: (state, { payload }) => {
      state.user = payload;
    },
    saveUserProfileError: (state, { payload }) => {
      state.profileErrors.push({
        ...payload,
        timestamp: new Date().toLocaleString(),
      });
    },
  },
});

export const {
  setUser,
  clearUser,
  setAuthError,
  updateUserProfile,
  saveUserProfileError,
} = authSlice.actions;

export default authSlice.reducer;
