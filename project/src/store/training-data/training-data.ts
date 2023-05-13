import {createSlice} from '@reduxjs/toolkit';

import { NameSpace, TrainingData } from '../store-const';
import { fetchTrainingsAction } from '../api-actions';

const initialState: TrainingData = {
  trainings: [],
  isTrainingsDataLoading: false,
  trainingsHasError: false,
};

export const trainingData = createSlice({
  name: NameSpace.Trainings,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTrainingsAction.pending, (state) => {
        state.isTrainingsDataLoading = true;
      })
      .addCase(fetchTrainingsAction.fulfilled, (state, action) => {
        state.trainings = action.payload;
        state.isTrainingsDataLoading = false;
      })
      .addCase(fetchTrainingsAction.rejected, (state) => {
        state.isTrainingsDataLoading = false;
        state.trainingsHasError = true;
      });
  }
});
