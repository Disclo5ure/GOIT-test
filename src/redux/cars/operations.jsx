import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://65358be1c620ba9358ec8ca6.mockapi.io/cars';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (props, thunkAPI) => {
    const { page, limit } = props;
    try {
      const response = await axios.get(
        `${baseURL}?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchNewCars = createAsyncThunk(
  'cars/fetchNew',
  async (props, thunkAPI) => {
    const { page, limit } = props;
    try {
      const response = await axios.get(
        `${baseURL}?page=${page}&limit=${limit}`
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchFilteredCars = createAsyncThunk(
  'cars/fetchFiltered',
  async (make, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}?search=${make}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
