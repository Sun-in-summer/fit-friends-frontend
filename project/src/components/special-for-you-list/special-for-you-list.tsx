import { useEffect, useState } from 'react';
import { DEFAULT_END_INDEX, DEFAULT_START_INDEX } from '../../const';
import { useAppDispatch } from '../../hooks';
import SpecialForYouItem from '../special-for-you-item/special-for-you-item';
import { fetchTrainingsAction } from '../../store/api-actions';
import useSelectedTypesTrainings from '../../hooks/useSelectedTypesTrainings/useSelectedTypesTrainings';


function SpecialForYouList(): JSX.Element {

  const dispatch = useAppDispatch();
  const specialTrainings = useSelectedTypesTrainings();

  const [startIndex, setStartIndex] = useState(DEFAULT_START_INDEX);
  const [endIndex, setEndIndex] = useState(DEFAULT_END_INDEX);

  const specialForYouItems = specialTrainings.slice(startIndex, endIndex);


  const handleNextButtonControl = () => {
    setStartIndex((prevState) => startIndex + 3 < specialTrainings.length ? startIndex + 1 : startIndex);
    setEndIndex((prevState) => startIndex + 3 < specialTrainings.length ? endIndex + 1 : endIndex);

  };

  const handlePrevButtonControl = () => {
    setStartIndex((prevState) => startIndex - 1 > 0 ? startIndex - 1 : 0);
    setEndIndex((prevState) => startIndex - 1 >= 0 ? endIndex - 1 : endIndex);
  };

  useEffect(() => {
    if (!specialTrainings || specialTrainings.length === 0) {
      dispatch(fetchTrainingsAction());
    }
  }, [dispatch, specialTrainings]);

  return (
    <section className="special-for-you">
      <div className="container">
        <div className="special-for-you__wrapper">
          <div className="special-for-you__title-wrapper">
            <h2 className="special-for-you__title">Специально подобрано для вас</h2>
            <div className="special-for-you__controls">
              <button
                className="btn-icon special-for-you__control"
                type="button"
                aria-label="previous"
                onClick={handlePrevButtonControl}
              >
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="/sprites.svg#arrow-left"></use>
                </svg>
              </button>
              <button
                className="btn-icon special-for-you__control"
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
          <ul className="special-for-you__list">
            {specialForYouItems.map((item) => <SpecialForYouItem key={item.id} item={item} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialForYouList;
