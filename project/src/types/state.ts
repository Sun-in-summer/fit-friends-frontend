import { store } from '../store';
import { AuthorizationStatus, UserRole } from '../const';
import { UserAuthData } from './user-data';
import { BasicUserInfo, ExtendedUser } from './user.interface';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  isAuthorized: boolean;
  role: UserRole;
  userAuthInfo: UserAuthData | null;
  userId: string | null;
  user: ExtendedUser | null;
  isUserFullInfoLoading: boolean;
  isUserLoadingError: boolean;
  basicUserInfo: BasicUserInfo | null;
  isUserRegistering: boolean;
  isQuestionnaireSending: boolean;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
