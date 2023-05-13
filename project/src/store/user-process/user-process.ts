import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, UserRole, } from '../../const';
import { UserProcess } from '../../types/state';
import { checkAuthAction, fetchUser, loginAction } from '../api-actions';
import { NameSpace } from '../store-const';
import { setUserId } from '../action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isAuthorized: false,
  role: UserRole.Coach,
  userInfo: null,
  userId: null,
  user: null,
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
      .addCase(setUserId, (state, action) => {
        state.userId = action.payload;
      })
      .addCase(fetchUser.fulfilled, (state, action)=>{
        state.user = action.payload;
      })
      .addCase(fetchUser.pending, (state, action)=>{
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action)=>{
        state.user = action.payload;
      });

  }
});
