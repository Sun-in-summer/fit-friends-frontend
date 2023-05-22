import { useEffect, useState } from 'react';
import { DEFAULT_SPECIAL_OFFERS_LENGTH, DEFAULT_START_INDEX } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import useSpecialOffersTrainings from '../../hooks/useSpecialOffersTrainings/useSpecialOffersTrainings';
import SpecialOffersItem from '../special-offer-item/special-offer-item';
import { getTrainingsDataLoadingStatus, getTrainingsErrorStatus } from '../../store/training-data/selector';
import { fetchTrainingsAction } from '../../store/api-actions';
import SpecialOfferGym from '../special-offer-gym/special-offer-gym';


function SpecialOffers(): JSX.Element {

  const dispatch = useAppDispatch();

  const specialOffers = useSpecialOffersTrainings();
  const trainingsHasError = useAppSelector(getTrainingsErrorStatus);
  const isTrainingsDataLoading = useAppSelector(getTrainingsDataLoadingStatus);

  const specialOffersSliced = specialOffers.slice(DEFAULT_START_INDEX, DEFAULT_SPECIAL_OFFERS_LENGTH);

  const [activeSliderPosition, setActiveSliderPosition] = useState(0);

  useEffect(() => {
    if ((!specialOffers || specialOffers.length === 0) && (!trainingsHasError && !isTrainingsDataLoading)) {
      dispatch(fetchTrainingsAction());
    }
  }, [dispatch, specialOffers, trainingsHasError, isTrainingsDataLoading]);

  return (
    <section className="special-offers">
      <div className="container">
        <div className="special-offers__wrapper">
          <h2 className="visually-hidden">Специальные предложения</h2>
          <ul className="special-offers__list">
            {
              specialOffersSliced.map((item, index) => (
                <SpecialOffersItem
                  key={item.id}
                  item={item}
                  index={index}
                  activeSliderPosition={activeSliderPosition}
                  setActiveSliderPosition={setActiveSliderPosition}
                />
              ))
            }
          </ul>
          <SpecialOfferGym />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
