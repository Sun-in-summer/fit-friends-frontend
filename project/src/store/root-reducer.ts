import { combineReducers } from '@reduxjs/toolkit';
import { selectLocationOptionProcess } from './select-location-option-process/select-location-option-process';
import { NameSpace } from './store-const';
import { trainingData } from './training-data/training-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Trainings]: trainingData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.SelectedLocationOption]: selectLocationOptionProcess.reducer,
});
