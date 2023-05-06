import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';


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


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
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
    />
  </React.StrictMode>,
);
