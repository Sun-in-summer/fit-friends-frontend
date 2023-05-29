import { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import TrainingCard from '../../components/training-card/training-card';
import TrainingCatalogueFilter from '../../components/training-catalogue-filter/training-catalogue-filter';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCoachTrainingsData, getFilteredCoachTrainingsData, getTrainingsErrorStatus } from '../../store/training-data/selector';
import { fetchCoachTrainingsAction } from '../../store/api-actions';
import { AppRoute, DEFAULT_PAGE, MAX_TRAININGS_QTY_PER_PAGE } from '../../const';
import ErrorScreen from '../error-screen/error-screen';
import { useNavigate } from 'react-router-dom';


function MyTrainingsScreen(): JSX.Element {

  const hasError = useAppSelector(getTrainingsErrorStatus);
  const navigate = useNavigate();

  const trainingsOfCoach = useAppSelector(getCoachTrainingsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!trainingsOfCoach || trainingsOfCoach.length === 0) {
      dispatch(fetchCoachTrainingsAction());
    }
  }, [dispatch, trainingsOfCoach]);

  let filteredCoachTrainings = useAppSelector(getFilteredCoachTrainingsData);
  const [page, setPage] = useState(DEFAULT_PAGE);

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

  if (!trainingsOfCoach) {
    return (
      <div>Loading...</div>
    );
  }

  if (filteredCoachTrainings === undefined || filteredCoachTrainings.length === 0) {

    filteredCoachTrainings = trainingsOfCoach;

  }

  const pagesCount = Math.ceil(filteredCoachTrainings.length / MAX_TRAININGS_QTY_PER_PAGE);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Мои тренировки</h1>


              <div className="my-training-form">
                <h2 className="visually-hidden">Мои тренировки Фильтр</h2>
                <div className="my-training-form__wrapper">
                  <button
                    className="btn-flat btn-flat--underlined my-training-form__btnback"
                    type="button"
                    onClick={() => navigate(AppRoute.CoachProfile)}
                  >
                    <svg width="14" height="10" aria-hidden="true">
                      <use xlinkHref="/sprites.svg#arrow-left"></use>
                    </svg><span>Назад</span>
                  </button>
                  <h3 className="my-training-form__title">фильтры</h3>
                  <TrainingCatalogueFilter />
                </div>
              </div>

              <div className="inner-page__content">
                <div className="my-trainings">
                  <ul className="my-trainings__list">
                    {trainingsOfCoach.slice(0, page * MAX_TRAININGS_QTY_PER_PAGE).map((item) => <TrainingCard key={item.id} item={item} />)}
                  </ul>
                  <div className="show-more my-trainings__show-more">
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
          </div>
        </section>
      </main>
    </div>

  );
}

export default MyTrainingsScreen;
