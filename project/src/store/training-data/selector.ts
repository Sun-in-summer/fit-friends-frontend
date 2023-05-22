import { State } from '../../types/state';
import { Training } from '../../types/training.interface';
import { NameSpace } from '../store-const';

export const getTrainingsData = (state: State): Training[] => state[NameSpace.Trainings].trainings;
export const getTrainingsDataLoadingStatus = (state: State): boolean => state[NameSpace.Trainings].isTrainingsDataLoading;
export const getTrainingsErrorStatus = (state: State): boolean => state[NameSpace.Trainings].trainingsHasError;
export const getFilteredTrainings = (state: State): Training[] => state[NameSpace.Trainings].filteredTrainings;
