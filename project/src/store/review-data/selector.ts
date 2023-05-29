import { Review } from '../../types/review.interface';
import { State } from '../../types/state';
import { NameSpace } from '../store-const';

export const getReviewsData = (state: State): Review[] => state[NameSpace.Reviews].reviews;
export const getReviewsDataLoadingStatus = (state: State): boolean => state[NameSpace.Reviews].isReviewsDataLoading;
export const getReviewErrorLoadingStatus = (state: State): boolean => state[NameSpace.Reviews].isReviewsErrorLoading;


