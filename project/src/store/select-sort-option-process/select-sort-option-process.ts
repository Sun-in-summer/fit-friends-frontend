import {createSlice} from '@reduxjs/toolkit';
import { UserRole } from '../../const';
import { NameSpace } from '../store-const';


export type SelectSortOptionProcess = {
  activeSortOption: string;
};

const initialState: SelectSortOptionProcess = {
  activeSortOption: UserRole.User,

};

export const selectSortOptionProcess = createSlice({
  name: NameSpace.SelectedUsersSortOption,
  initialState,
  reducers: {
    setActiveSortOption: (state, action) => {
      state.activeSortOption = action.payload as string;
    },
  },
});

export const {setActiveSortOption} = selectSortOptionProcess.actions;
