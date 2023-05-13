import { State } from '../../types/state';
import { Training } from '../../types/training.interface';
import { NameSpace } from '../store-const';

export const getTrainings = (state: State): Training[] => state[NameSpace.Trainings].trainings;

export const getTrainingsDataLoadingStatus = (state: State): boolean => state[NameSpace.Trainings].isTrainingsDataLoading;


export const getErrorStatus = (state: State): boolean => state[NameSpace.Trainings].trainingsHasError;
