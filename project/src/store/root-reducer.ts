import { combineReducers } from '@reduxjs/toolkit';
import { selectLocationOptionProcess } from './select-location-option-process/select-location-option-process';
import { NameSpace } from './store-const';
import { trainingData } from './training-data/training-data';
import { userProcess } from './user-process/user-process';
import { gymsData } from './gyms-data/gyms-data';
import { reviewsData } from './review-data/review-data';
import { selectSortOptionProcess } from './select-sort-option-process/select-sort-option-process';

export const rootReducer = combineReducers({
  [NameSpace.Trainings]: trainingData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Gyms]: gymsData.reducer,
  [NameSpace.SelectedLocationOption]: selectLocationOptionProcess.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.SelectedUsersSortOption]: selectSortOptionProcess.reducer,
});
