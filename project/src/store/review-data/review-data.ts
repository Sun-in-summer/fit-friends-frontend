import {createSlice} from '@reduxjs/toolkit';

import { NameSpace, ReviewsData } from '../store-const';
import { sendReviewAction, fetchReviewsAction } from '../api-actions';

const initialState: ReviewsData = {
  reviews: [],
  isReviewsDataLoading: false,
  isReviewsErrorLoading: false,
  isReviewSent: false,
  isSendingReviewError:  false
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsDataLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsDataLoading = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsDataLoading = false;
        state.isReviewsErrorLoading = true;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.isReviewSent = false;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.isReviewSent = true;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.isReviewSent = false;
        state.isSendingReviewError = true;
      });
  }
});
