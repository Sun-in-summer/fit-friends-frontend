import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, UserRole, } from '../../const';
import { UserProcess } from '../../types/state';
import { checkAuthAction, fetchFilteredUsersAction, fetchManyUsersAction, fetchSelectedUserAction, fetchUser, loginAction, registerUserAction, sendQuestionnaireAction, updateUserAction } from '../api-actions';
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
  isQuestionnaireSent: false,
  isUserUpdating: false,
  isCompanyUsersLoading: false,
  isCompanyUsersLoadingError: false,
  usersForCompany: [],
  isFilteredUsersDataLoading : false,
  filteredUsersHasError : false,
  filteredUsers: [],
  isSelectedUserErrorLoading: false,
  selectedUser: undefined,
  isSelectedUserLoading: false,


};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isAuthorized = true;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAuthorized = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
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
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(registerUserAction.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isUserRegistering = false;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(registerUserAction.rejected, (state, { payload }) => {
        state.isUserRegistering = false;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(sendQuestionnaireAction.pending, (state) => {
        state.isQuestionnaireSending = true;
        state.isQuestionnaireSent = false;
      })
      .addCase(sendQuestionnaireAction.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isQuestionnaireSending = false;
        state.isQuestionnaireSent = true;
      })
      .addCase(sendQuestionnaireAction.rejected, (state) => {
        state.isQuestionnaireSending = false;
        state.isQuestionnaireSent = false;
      })
      .addCase(updateUserAction.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isUserUpdating = false;
      })
      .addCase(updateUserAction.rejected, (state, { payload }) => {
        state.isUserUpdating = false;
      })
      .addCase(updateUserAction.pending, (state) => {
        state.isUserUpdating = true;
      })
      .addCase(fetchManyUsersAction.fulfilled, (state, action)=>{
        state.usersForCompany = action.payload;
        state.isCompanyUsersLoading = false;

      })
      .addCase(fetchManyUsersAction.pending, (state, action)=>{
        state.isCompanyUsersLoading = true;
        state.isCompanyUsersLoadingError = false;

      })
      .addCase(fetchManyUsersAction.rejected, (state, action)=>{
        state.isCompanyUsersLoading = false;
        state.isCompanyUsersLoadingError = true;
      })
      .addCase(fetchFilteredUsersAction.pending, (state) => {
        state.isFilteredUsersDataLoading = true;
      })
      .addCase(fetchFilteredUsersAction.fulfilled, (state, action) => {
        state.filteredUsers = action.payload;
        state.isFilteredUsersDataLoading = false;
      })
      .addCase(fetchFilteredUsersAction.rejected, (state) => {
        state.isFilteredUsersDataLoading = false;
        state.filteredUsersHasError = true;
      })
      .addCase(fetchSelectedUserAction.pending, (state)=> {
        state.isSelectedUserLoading = true;
        state.isSelectedUserErrorLoading = false;
      })
      .addCase(fetchSelectedUserAction.fulfilled, (state, action)=> {
        state.selectedUser = action.payload;
        state.isSelectedUserLoading = false;
      })
      .addCase(fetchSelectedUserAction.rejected, (state, )=> {
        state.isSelectedUserLoading = false;
        state.isSelectedUserErrorLoading = true;
      });
  }
});
