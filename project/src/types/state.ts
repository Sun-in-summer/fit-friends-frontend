import { store } from '../store';
import { AuthorizationStatus, UserRole } from '../const';
import { UserData } from './user-data';
import { ExtendedUser } from './user.interface';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  isAuthorized: boolean;
  role: UserRole;
  userInfo: UserData | null;
  userId: string | null;
  user: ExtendedUser | null;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
