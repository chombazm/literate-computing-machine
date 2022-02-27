import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
  isError: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserStart: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.isError = '';
    },
    getUserFailed: (state, { payload }) => {
      state.isLoading = false;
      state.user = '';
      state.isError = payload;
    }
  }
});

const { reducer, actions } = userSlice;
export const { getUserStart, getUserSuccess, getUserFailed } = actions;
export default reducer;
