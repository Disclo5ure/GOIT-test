import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://connections-api.herokuapp.com/users';

const setToken = token => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.Authorization = ``;
};

export const logIn = createAsyncThunk(
  'authorization/logIn',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}/login`, user);
      console.log(response);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'authorization/logOut',
  async (_, thunkAPI) => {
    try {
      await axios.post(`${baseURL}/logout`);
      clearToken();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const register = createAsyncThunk(
  'authorization/register',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}/signup`, user);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refresh = createAsyncThunk('refresh', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  if (!token) {
    return thunkAPI.rejectWithValue('Token doesnt exist');
  }
  setToken(token);
  try {
    const response = await axios.get(`${baseURL}/current`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
