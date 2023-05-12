import {createReducer} from '@reduxjs/toolkit';
import { loadTrainings, requireAuthorization, setActiveLocationOption, setError, setTrainingsDataLoadingStatus } from './action';
import { AuthorizationStatus, UserRole } from '../const';
import { Training } from '../types/training.interface';

type InitialState = {
  activeLocationOption: string;
  trainings: Training[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  role: string;
  isTrainingsDataLoading: boolean;
}


const initialState: InitialState = {
  activeLocationOption: '',
  trainings: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isTrainingsDataLoading: false,
  role: UserRole.Coach
};

// const newLocationOption = LocationTitles.Pionerskaya;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveLocationOption, (state, action) => {
      state.activeLocationOption = action.payload;
    })
    .addCase(loadTrainings, (state, action)=>{
      state.trainings = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setTrainingsDataLoadingStatus, (state, action) => {
      state.isTrainingsDataLoading = action.payload;
    });
});

export {reducer};
