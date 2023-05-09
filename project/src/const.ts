export enum AppRoute {
  Test ='/test',
  Root = '/',
  Login = '/login',
  Register = '/register',
  Questionnaire = '/questionnaire/role',
  CoachQuestionnaire = '/questionnaire/coach',
  CoachProfile = '/coach-profile',
  CreateTraining = '/create-training',
  CoachTrainings = '/coach-trainings',
  CoachOrders ='/coach-orders',
  MyFriends ='/my-friends',
  UserQuestionnaire = '/questionnaire/user',
  Main = '/main',
  TrainingsCatalogue = '/trainings',
  Training = '/trainings/:id',
  UserProfile = '/user/profile',
  MyPurchases = '/user/purchases',
  MyGyms = '/user/my-gyms',
  TrainingsDiary = '/user/trainings-diary',
  FoodDiary = '/user/food-diary',
  GymsCatalogue = '/gyms',
  Gym = '/gyms/:id',
  GymLocation = '/gyms/location/:id',
  UsersCatalogue = '/users',
  User = '/user/:id'
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

