import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://65358be1c620ba9358ec8ca6.mockapi.io/make';

export const fetchMakes = createAsyncThunk(
  'makes/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
