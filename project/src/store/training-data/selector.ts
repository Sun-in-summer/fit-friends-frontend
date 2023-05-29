import { State } from '../../types/state';
import { Training } from '../../types/training.interface';
import { NameSpace } from '../store-const';

export const getTrainingsData = (state: State): Training[] => state[NameSpace.Trainings].trainings;
export const getTrainingsDataLoadingStatus = (state: State): boolean => state[NameSpace.Trainings].isTrainingsDataLoading;
export const getTrainingsErrorStatus = (state: State): boolean => state[NameSpace.Trainings].trainingsHasError;
export const getFilteredTrainings = (state: State): Training[] => state[NameSpace.Trainings].filteredTrainings;

export const getSelectedTrainingData = (state: State): Training | undefined => state[NameSpace.Trainings].selectedTraining;
export const getSelectedTrainingLoadingStatus = (state: State): boolean => state[NameSpace.Trainings].isSelectedTrainingLoading;
export const getSelectedTrainingErrorLoadingStatus = (state: State): boolean => state[NameSpace.Trainings].isSelectedTrainingErrorLoading;

export const getCoachTrainingsData = (state: State): Training[] => state[NameSpace.Trainings].coachTrainings;
export const getFilteredCoachTrainingsData = (state: State): Training[] | undefined => state[NameSpace.Trainings].filteredCoachTrainings;
