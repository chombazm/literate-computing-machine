import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoadingAdminAdd: false,
  isAdminAdded: false,
  isErrorAdminAdd: false,
  addedAmin: null
};

export const addAdminSlice = createSlice({
  name: 'addAdmin',
  initialState,
  reducers: {
    addAdminStart: (state) => {
      state.isLoadingAdminAdd = true;
    },
    addAdminSuccess: (state, { payload }) => {
      state.isLoadingAdminAdd = false;
      state.isAdminAdded = true;
      state.addedAmin = payload;
    },
    addAdminFailure: (state, { payload }) => {
      state.isLoadingAdminAdd = false;
      state.isErrorAdminAdd = payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addAdminStart, addAdminSuccess, addAdminFailure } = addAdminSlice.actions;

export default addAdminSlice.reducer;
