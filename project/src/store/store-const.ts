import { Gym } from '../types/gym.interface';
import { Review } from '../types/review.interface';
import { Training } from '../types/training.interface';

export enum NameSpace {
  SelectedLocationOption = 'SelectedLocationOption',
  Data ='Data',
  User ='User',
  Trainings = 'Trainings',//детально или даты хватит?
  Reviews = 'Reviews',
  Gyms = 'Gyms',
  Orders = 'Orders',
  SelectedUsersSortOption = 'SelectedUsersSortOption',
}

export type TrainingData = {
  trainings: Training[];
  isTrainingsDataLoading: boolean;
  trainingsHasError: boolean;
  filteredTrainings: Training[];
  selectedTraining: Training | undefined;
  isSelectedTrainingLoading: boolean;
  isSelectedTrainingErrorLoading: boolean;
  coachTrainings: Training[];
  filteredCoachTrainings: Training[] | undefined;
  isCoachTrainingsDataLoading: boolean;
  coachTrainingsHasError: boolean;
  isFilteredCoachTrainingsDataLoading: boolean;
 filteredCoachTrainingsHasError: boolean;
};

export type ReviewsData = {
  reviews: Review[];
  isReviewsDataLoading: boolean;
  isReviewsErrorLoading: boolean;
  isReviewSent: boolean;
  isSendingReviewError: boolean;
};

export type GymsData = {
  gyms: Gym[];
  isGymsDataLoading: boolean;
  gymsHasError: boolean;
};

export type SelectLocationOptionProcess = {
  activeLocationOption: string;
}
