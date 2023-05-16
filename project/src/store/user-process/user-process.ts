import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, UserRole, } from '../../const';
import { UserProcess } from '../../types/state';
import { checkAuthAction, fetchUser, loginAction, registerUserAction, sendQuestionnaireAction } from '../api-actions';
import { NameSpace } from '../store-const';
import { setUserBasicInfo } from '../action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isAuthorized: false,
  role: UserRole.Coach,
  userAuthInfo: null,
  userId: null,
  user: null,
  isUserLoadingError: false,
  isUserFullInfoLoading: false,
  basicUserInfo: null,
  isUserRegistering: false,
  isQuestionnaireSending: false,


};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isAuthorized = true;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAuthorized = false;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isAuthorized = true;
      })
      .addCase(loginAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAuthorized = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAuthorized = false;
      })
      .addCase(setUserBasicInfo, (state, action) => {
        state.basicUserInfo = action.payload;
      })
      .addCase(fetchUser.fulfilled, (state, action)=>{
        state.user = action.payload;
        state.isUserFullInfoLoading = false;

      })
      .addCase(fetchUser.pending, (state, action)=>{
        state.isUserFullInfoLoading = true;
        state.isUserLoadingError = false;

      })
      .addCase(fetchUser.rejected, (state, action)=>{
        state.isUserFullInfoLoading = false;
        state.isUserLoadingError = true;
      })
      .addCase(registerUserAction.pending, (state) => {
        state.isUserRegistering = true;
      })
      .addCase(registerUserAction.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isUserRegistering = false;
      })
      .addCase(registerUserAction.rejected, (state, { payload }) => {
        state.isUserRegistering = false;
      })
      .addCase(sendQuestionnaireAction.pending, (state) => {
        state.isQuestionnaireSending = true;
      })
      .addCase(sendQuestionnaireAction.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isQuestionnaireSending = false;
      })
      .addCase(sendQuestionnaireAction.rejected, (state) => {
        state.isQuestionnaireSending = false;
      });


  }
});
