import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchJSON } from 'utils/functions';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const resp = await fetchJSON('/users/authenticate', {
        method: 'POST',
        body: credentials,
      });
      if (resp instanceof Object) {
        return thunkAPI.fulfillWithValue(resp);
      } else {
        return thunkAPI.rejectWithValue(resp);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isAuthenticated: false,
  },
  reducers: {
    logoutUser: (state, action) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
