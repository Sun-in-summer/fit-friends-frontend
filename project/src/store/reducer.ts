import {createReducer} from '@reduxjs/toolkit';
import { loadTrainings, requireAuthorization, setActiveLocationOption } from './action';
import { AuthorizationStatus } from '../const';
import { Training } from '../types/training.interface';

type InitialState = {
  activeLocationOption: string;
  trainings: Training[];
  authorizationStatus: AuthorizationStatus;
}


const initialState: InitialState = {
  activeLocationOption: '',
  trainings: [],
  authorizationStatus: AuthorizationStatus.Unknown
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
    });
});

export {reducer};
