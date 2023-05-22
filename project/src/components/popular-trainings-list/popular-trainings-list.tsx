import { NavLink } from 'react-router-dom';
import { AppRoute, DEFAULT_END_POPULAR_INDEX, DEFAULT_START_POPULAR_INDEX } from '../../const';
import TrainingCard from '../training-card/training-card';
import usePopularTrainings from '../../hooks/usePopularTrainings/usePopularTrainings';
import { useAppDispatch } from '../../hooks';
import { useEffect, useState } from 'react';
import { fetchTrainingsAction } from '../../store/api-actions';


function PopularTrainingsList(): JSX.Element {

  const dispatch = useAppDispatch();
  const popularTrainings = usePopularTrainings();

  useEffect(() => {
    if (!popularTrainings || popularTrainings.length === 0) {
      dispatch(fetchTrainingsAction());
    }
  }, [dispatch, popularTrainings]);


  const [startIndex, setStartIndex] = useState(DEFAULT_START_POPULAR_INDEX);
  const [endIndex, setEndIndex] = useState(DEFAULT_END_POPULAR_INDEX);

  const popularItems = popularTrainings.slice(startIndex, endIndex);

  const handleNextButtonControl = () => {
    setStartIndex((prevState) => startIndex + 3 < popularTrainings.length ? startIndex + 1 : startIndex);
    setEndIndex((prevState) => startIndex + 3 < popularTrainings.length ? endIndex + 1 : endIndex);

  };

  const handlePrevButtonControl = () => {
    setStartIndex((prevState) => startIndex - 1 > 0 ? startIndex - 1 : 0);
    setEndIndex((prevState) => startIndex - 1 >= 0 ? endIndex - 1 : endIndex);
  };
  return (
    <section className="popular-trainings">
      <div className="container">
        <div className="popular-trainings__wrapper">
          <div className="popular-trainings__title-wrapper">
            <h2 className="popular-trainings__title">Популярные тренировки</h2>
            <NavLink
              className="btn-flat popular-trainings__button"
              type="button"
              to={AppRoute.TrainingsCatalogue}
            ><span>Смотреть все</span>
              <svg width="14" height="10" aria-hidden="true">
                <use xlinkHref="/sprites.svg#arrow-right"></use>
              </svg>
            </NavLink>
            <div className="popular-trainings__controls">
              <button
                className="btn-icon popular-trainings__control"
                type="button"
                aria-label="previous"
                onClick={handlePrevButtonControl}
              >
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="/sprites.svg#arrow-left"></use>
                </svg>
              </button>
              <button
                className="btn-icon popular-trainings__control"
                type="button"
                aria-label="next"
                onClick={handleNextButtonControl}
              >
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="/sprites.svg#arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
          <ul className="popular-trainings__list">

            {popularItems.map((item) => <TrainingCard key={item.id} item={item} />)}


          </ul>
        </div>
      </div>
    </section>


  );
}

export default PopularTrainingsList;
