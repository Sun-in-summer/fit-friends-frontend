import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import PopularTrainingsList from '../../components/popular-trainings-list/popular-trainings-list';
import SpecialForYouList from '../../components/special-for-you-list/special-for-you-list';
import LookForCompanyList from '../../components/look-for-company-list/look-for-company-list';
import SpecialOffers from '../../components/special-offers/special-offers';


type IndexScreenProps = {
  popularTrainingsQty: number;
  lookForCompanyUsersQty: number;
  specialForYouItemsQty: number;
}

function IndexScreen({ popularTrainingsQty, lookForCompanyUsersQty, specialForYouItemsQty }: IndexScreenProps): JSX.Element {
  return (
    <div className="wrapper">
      <Helmet>
        <title>FitFriends. Добро пожаловать!</title>
      </Helmet>
      <Header />
      <main>
        <h1 className="visually-hidden">FitFriends — Время находить тренировки, спортзалы и друзей спортсменов</h1>
        <SpecialForYouList />
        <SpecialOffers />
        <PopularTrainingsList />
        <LookForCompanyList />
      </main>
    </div>

  );
}

export default IndexScreen;
