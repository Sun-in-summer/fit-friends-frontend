import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, SelectLocationOptionProcess, } from '../store-const';
import { setActiveLocationOption } from '../action';

const initialState: SelectLocationOptionProcess = {
  activeLocationOption: ''
};

export const selectLocationOptionProcess = createSlice({
  name: NameSpace.SelectedLocationOption,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setActiveLocationOption, (state, action) => {
        state.activeLocationOption = action.payload;
      });
  }
});


