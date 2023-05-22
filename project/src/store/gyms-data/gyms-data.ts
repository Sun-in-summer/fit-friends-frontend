import {createSlice} from '@reduxjs/toolkit';
import { GymsData, NameSpace } from '../store-const';
import { fetchGymsAction } from '../api-actions';

const initialState: GymsData = {
  gyms: [],
  isGymsDataLoading: false,
  gymsHasError: false,
};

export const gymsData = createSlice({
  name: NameSpace.Gyms,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGymsAction.pending, (state) => {
        state.isGymsDataLoading = true;
      })
      .addCase(fetchGymsAction.fulfilled, (state, action) => {
        state.gyms = action.payload;
        state.isGymsDataLoading = false;
      })
      .addCase(fetchGymsAction.rejected, (state) => {
        state.isGymsDataLoading = false;
        state.gymsHasError = true;
      });
  }
});
