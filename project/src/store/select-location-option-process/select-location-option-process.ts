import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, SelectLocationOptionProcess, } from '../store-const';

const initialState: SelectLocationOptionProcess = {
  activeLocationOption: ''
};

export const selectLocationOptionProcess = createSlice({
  name: NameSpace.SelectedLocationOption,
  initialState,
  reducers: {
    setActiveLocationOption: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.activeLocationOption = action.payload;
    }
  },
});

export const {setActiveLocationOption} = selectLocationOptionProcess.actions;
