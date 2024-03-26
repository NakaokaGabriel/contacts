import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Contact } from "@/types/contacts.types";

import { RootState } from '../index';

const initialState: { value: string, group: Contact['group'] } = {
  value: '',
  group: 'Todos'
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    group: (state, action: PayloadAction<Contact['group']>) => {
      state.group = action.payload
    },
  }
});

export const { search, group } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.value;
export const selectGroup = (state: RootState) => state.search.group;

export default searchSlice.reducer;