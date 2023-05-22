import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import TrainingCard from '../../components/training-card/training-card';
import ErrorScreen from '../error-screen/error-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilteredTrainings, getTrainingsData, getTrainingsErrorStatus } from '../../store/training-data/selector';
import { fetchTrainingsAction } from '../../store/api-actions';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE, MAX_TRAININGS_QTY_PER_PAGE } from '../../const';
import TrainingCatalogueFilter from '../../components/training-catalogue-filter/training-catalogue-filter';

type TrainingCatalogueScreenProps = {
  trainingCatalogueTrainingsQty: number;
}

function TrainingCatalogueScreen({ trainingCatalogueTrainingsQty }: TrainingCatalogueScreenProps): JSX.Element {

  const hasError = useAppSelector(getTrainingsErrorStatus);
  const trainings = useAppSelector(getTrainingsData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!trainings || trainings.length === 0) {
      dispatch(fetchTrainingsAction());
    }
  }, [dispatch, trainings]);

  const filteredTrainings = useAppSelector(getFilteredTrainings);

  const [page, setPage] = useState(DEFAULT_PAGE);
  const pagesCount = Math.ceil(filteredTrainings.length / MAX_TRAININGS_QTY_PER_PAGE);

  const handleShowMoreButtonClick = () => {
    setPage((prevState) => prevState < pagesCount ? prevState + 1 : prevState);
  };

  const handleUpToTopButtonClick = () => {
    window.scrollTo(0, 0);
  };

  if (hasError) {
    return (
      <ErrorScreen />
    );
  }

  if (!trainings) {
    return (
      <div>Loading...</div>
    );
  }


  return (
    <div className="wrapper">
      <Helmet>
        <title>FitFriends. Каталог тренировок</title>
      </Helmet>
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Каталог тренировок</h1>
              <div className="gym-catalog-form">
                <h2 className="visually-hidden">Мои тренировки Фильтр</h2>
                <div className="gym-catalog-form__wrapper">
                  <button
                    className="btn-flat btn-flat--underlined gym-catalog-form__btnback"
                    type="button"
                    onClick={() => navigate(AppRoute.Main)}
                  >
                    <svg width="14" height="10" aria-hidden="true">
                      <use xlinkHref="/sprites.svg#arrow-left"></use>
                    </svg><span>Назад</span>
                  </button>
                  <h3 className="gym-catalog-form__title">Фильтры</h3>
                  <TrainingCatalogueFilter />
                </div>
              </div>
              <div className="training-catalog">
                <ul className="training-catalog__list">
                  {trainings.map((item) => <TrainingCard key={item.id} item={item} />)}
                </ul>
                <div className="show-more training-catalog__show-more">
                  {
                    page >= pagesCount
                      ? (
                        <button
                          onClick={handleUpToTopButtonClick}
                          className={`btn show-more__button ${pagesCount <= 1 ? 'visually-hidden' : ''}`}
                          type="button"
                        >
                          Вернуться в начало
                        </button>
                      )
                      : (
                        <button
                          onClick={handleShowMoreButtonClick}
                          className="btn show-more__button show-more__button--more"
                          type="button"
                        >
                          Показать еще
                        </button>
                      )
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

  );
}

export default TrainingCatalogueScreen;
