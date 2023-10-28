import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchFilteredCars, fetchNewCars } from './operations';

const carsInitialState = {
  cars: [],
  newCarsNumber: 0,
  favorites: [],
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload
      );
    },
  },
  extraReducers: {
    [fetchCars.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cars = action.payload;
      state.newCarsNumber = action.payload.length;
    },
    [fetchNewCars.fulfilled]: (state, action) => {
      state.isLoading = false;
      action.payload.forEach(car => state.cars.push(car));
      state.newCarsNumber = action.payload.length;
    },
    [fetchFilteredCars.pending]: state => {
      state.isLoading = true;
    },
    [fetchFilteredCars.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cars = action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
