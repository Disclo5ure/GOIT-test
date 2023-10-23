import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    [deleteContact.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
