import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthorized: false,
    authErrors: [],
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
      state.authErrors = state.authErrors.concat(payload);
    },
  },
});

export const { setUser, clearUser, setAuthError } = authSlice.actions;

export default authSlice.reducer;
