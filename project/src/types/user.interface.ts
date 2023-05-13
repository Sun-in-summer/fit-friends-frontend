// import { Coach } from './user-role.types/coach.type';
// import { Trainee } from './user-role.types/trainee.type';


export interface BasicUser {
  id?: string ;
  firstname: string;
  email: string;
  avatar: string;
  passwordHash?: string;
  gender: string;
  dateBirth?: string;
  role: string;
  place: string;
  createdAt?: string;
  myFriends?: string[];
  trainingLevel: string;
  trainingType: string[];
  favoriteGyms?: number[];
  isEmailVerified?: boolean;
  isReadyToGetNotifications?: boolean;
  favoriteCoaches?: string[];
  sentRequestForFriends: string[];
  gotRequestForFriends?: string[];
}


// export interface User extends BasicUser {
//   traineeOrCoach: Trainee | Coach;
// }


// export interface TraineeUser extends BasicUser {
//   trainingTime?: string;
//   caloriesToDrop?: number;
//   caloriesToSpendPerDay?: number;
//   isReadyForTraining?: boolean;
// }

// export interface CoachUser extends BasicUser {
//   certificate?: string;
//   credits?: string;
//   isReadyToTrainPersonally?: boolean;
// }

export interface ExtendedUser extends BasicUser {
  certificate?: string;
  credits?: string;
  isReadyToTrainPersonally?: boolean;
  trainingTime?: string;
  caloriesToDrop?: number;
  caloriesToSpendPerDay?: number;
  isReadyForTraining?: boolean;
}


// export type User = {
//   id?: string ;
//   firstname: string;
//   email: string;
//   avatar: string;
//   passwordHash?: string;
//   gender: string;
//   dateBirth?: string;
//   role: string;
//   place: string;
//   createdAt?: string;
//   myFriends?: string[];
//   trainingLevel: string;
//   trainingType: string[];
//   favoriteGyms?: number[];
//   isEmailVerified?: boolean;
//   isReadyToGetNotifications?: boolean;
//   favoriteCoaches?: string[];
//   sentRequestForFriends: string[];
//   gotRequestForFriends?: string[];
//   certificate?: string;
//   credits?: string;
//   isReadyToTrainPersonally?: boolean;
//   trainingTime?: string;
//   caloriesToDrop?: number;
//   caloriesToSpendPerDay?: number;
//   isReadyForTraining?: boolean;
// }
