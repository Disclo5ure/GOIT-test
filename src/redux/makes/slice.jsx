import { createSlice } from '@reduxjs/toolkit';
import { fetchMakes } from './operations';

const makesInitialState = {
  makes: [],
};

const makesSlice = createSlice({
  name: 'makes',
  initialState: makesInitialState,
  extraReducers: {
    [fetchMakes.fulfilled]: (state, action) => {
      state.makes = action.payload;
    },
  },
});

export const makesReducer = makesSlice.reducer;
