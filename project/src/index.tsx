import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { trainings } from './mocks/trainings';
import { users } from './mocks/users';
import { gyms } from './mocks/gyms';
import { reviews } from './mocks/reviews';
import {store} from './store';
import { Provider } from 'react-redux';
import { checkAuthAction, fetchTrainingsAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';


const Setting = {
  PopularTrainingsQty: 4,
  LookForCompanyUsersQty: 4,
  SpecialForYouItemsQty: 3,
  TrainingCatalogueTrainingsQty: 12,
  TrainingsScreenReviewsQty: 6,
  GymCatalogueScreenGymsQty: 12,
  UserCatalogueScreenUsersQty: 20,
  UserCardScreenTrainingsQty: 4,
  MyGymsGymsQty: 6
} as const;


store.dispatch(fetchTrainingsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider
      store ={store}
    >
      <ToastContainer />
      <App
        popularTrainingsQty={Setting.PopularTrainingsQty}
        lookForCompanyUsersQty={Setting.LookForCompanyUsersQty}
        specialForYouItemsQty={Setting.SpecialForYouItemsQty}
        trainingCatalogueTrainingsQty ={Setting.TrainingCatalogueTrainingsQty}
        trainingsScreenReviewsQty= {Setting.TrainingsScreenReviewsQty}
        gymCatalogueScreenGymsQty= {Setting.GymCatalogueScreenGymsQty}
        userCatalogueScreenUsersQty ={Setting.UserCatalogueScreenUsersQty}
        userCardScreenTrainingsQty = {Setting.UserCardScreenTrainingsQty}
        myGymsGymsQty ={Setting.MyGymsGymsQty}
        trainings = {trainings}
        users = {users}
        gyms = {gyms}
        reviews ={reviews}

      />

    </Provider>
  </React.StrictMode>,
);
