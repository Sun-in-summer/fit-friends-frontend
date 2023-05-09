import {createReducer} from '@reduxjs/toolkit';
import { LocationTitles } from '../const';
import { setActiveLocationOption } from './action';


const initialState = {
  activeLocationOption: LocationTitles.Petrogradskaya
};

// const newLocationOption = LocationTitles.Pionerskaya;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveLocationOption, (state, action) => {
      state.activeLocationOption = action.payload;
    });
});

export {reducer};
