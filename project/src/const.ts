export const TRAINING_SERVICE_BACKEND_URL = 'http://localhost:3333/api';
export const USER_SERVICE_BACKEND_URL = 'http://localhost:3332/api';

export enum AppRoute {
  Test ='/test',
  Root = '/',
  Login = '/login',
  Register = '/register',
  Questionnaire = '/questionnaire/role',
  CoachQuestionnaire = '/questionnaire/coach',
  CoachProfile = '/profile/coach',
  UserProfile ='profile/user',
  CreateTraining = '/create-training',
  CoachTrainings = '/coach-trainings',
  CoachOrders ='/coach-orders',
  MyFriends ='/my-friends',
  UserQuestionnaire = '/questionnaire/user',
  Main = '/main',
  TrainingsCatalogue = '/trainings',
  Training = '/trainings/:id',
  MyPurchases = '/user/purchases',
  MyGyms = '/user/my-gyms',
  TrainingsDiary = '/user/trainings-diary',
  FoodDiary = '/user/food-diary',
  GymsCatalogue = '/gyms',
  Gym = '/gyms/:id',
  GymLocation = '/gyms/location/:id',
  UsersCatalogue = '/users',
  User = '/user/:id',
  Notifications = '/notifications'
}

export enum APIRoute {
  Trainings = '/trainings',
  Auth = '/auth',
  Reviews = '/reviews',
  Login = '/login',
  Logout = '/logout',

}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export const enum UserRole {
  User = 'user',
  Coach = 'coach',
}

export const GenderNames = {
  Female: 'Женский',
  Male: 'Мужской',
  Unknown:'Неважно',
};


export const LocationTitles = {
  Pionerskaya: 'Пионерская',
  Petrogradskaya:  'Петроградская',
  Udelnaya:  'Удельная',
  Zvezdnaya:  'Звёздная',
  Sportivnaya: 'Спортивная',
};


