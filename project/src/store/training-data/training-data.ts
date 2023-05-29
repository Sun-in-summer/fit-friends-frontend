import {createSlice} from '@reduxjs/toolkit';

import { NameSpace, TrainingData } from '../store-const';
import { fetchCoachTrainingsAction, fetchFilteredCoachTrainingsAction, fetchFilteredTrainingsAction, fetchSelectedTrainingAction, fetchTrainingsAction } from '../api-actions';

const initialState: TrainingData = {
  trainings: [],
  isTrainingsDataLoading: false,
  trainingsHasError: false,
  filteredTrainings: [],
  selectedTraining: undefined,
  isSelectedTrainingLoading: false,
  isSelectedTrainingErrorLoading: false,
  coachTrainings: [],
  filteredCoachTrainings: undefined,
  isCoachTrainingsDataLoading:  false,
  coachTrainingsHasError: false,
  isFilteredCoachTrainingsDataLoading: false,
  filteredCoachTrainingsHasError: false,

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
      })
      .addCase(fetchFilteredTrainingsAction.fulfilled, (state, action) => {
        state.filteredTrainings = action.payload;
      })
      .addCase(fetchSelectedTrainingAction.pending, (state)=> {
        state.isSelectedTrainingLoading = true;
        state.isSelectedTrainingErrorLoading = false;
      })
      .addCase(fetchSelectedTrainingAction.fulfilled, (state, action)=> {
        state.selectedTraining = action.payload;
        state.isSelectedTrainingLoading = false;
      })
      .addCase(fetchSelectedTrainingAction.rejected, (state, )=> {
        state.isSelectedTrainingLoading = false;
        state.isSelectedTrainingErrorLoading = true;
      })
      .addCase(fetchCoachTrainingsAction.pending, (state) => {
        state.isCoachTrainingsDataLoading = true;
      })
      .addCase(fetchCoachTrainingsAction.fulfilled, (state, action) => {
        state.coachTrainings = action.payload;
        state.isCoachTrainingsDataLoading = false;
      })
      .addCase(fetchCoachTrainingsAction.rejected, (state) => {
        state.isCoachTrainingsDataLoading = false;
        state.coachTrainingsHasError = true;
      })
      .addCase(fetchFilteredCoachTrainingsAction.pending, (state) => {
        state.isFilteredCoachTrainingsDataLoading = true;
      })
      .addCase(fetchFilteredCoachTrainingsAction.fulfilled, (state, action) => {
        state.filteredCoachTrainings = action.payload;
        state.isFilteredCoachTrainingsDataLoading = false;
      })
      .addCase(fetchFilteredCoachTrainingsAction.rejected, (state) => {
        state.isFilteredCoachTrainingsDataLoading = false;
        state.filteredCoachTrainingsHasError = true;
      });
  }
});
