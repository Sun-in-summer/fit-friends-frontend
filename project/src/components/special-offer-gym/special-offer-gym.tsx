import { NavLink } from 'react-router-dom';
import useNearestGym from '../../hooks/useNearestGym/useNearestGym';
import { AppRoute } from '../../const';
import { getGymsDataLoadingStatus } from '../../store/gyms-data/selector';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchGymsAction } from '../../store/api-actions';


function SpecialOfferGym(): JSX.Element {


  const dispatch = useAppDispatch();
  const gym = useNearestGym();

  const isGymsDataLoading = useAppSelector(getGymsDataLoadingStatus);


  useEffect(() => {

    if (gym === undefined) {
      dispatch(fetchGymsAction());
    }
  }, [dispatch, gym, isGymsDataLoading]);


  let id;

  if (gym !== undefined) {
    id = gym.id as number;
  } else { id = 1; }

  return (
    <div className="thumbnail-spec-gym">
      <div className="thumbnail-spec-gym__image">
        <picture>
          <source type="image/webp" srcSet="img/content/thumbnails/nearest-gym-01.webp, img/content/thumbnails/nearest-gym-01@2x.webp 2x" /><img src="img/content/thumbnails/nearest-gym-01.jpg" srcSet="img/content/thumbnails/nearest-gym-01@2x.jpg 2x" width="330" height="190" alt="" />
        </picture>
      </div>
      <p className="thumbnail-spec-gym__type">Ближайший зал</p>
      <div className="thumbnail-spec-gym__header">
        <h3 className="thumbnail-spec-gym__title">{gym !== undefined ? gym.name : ''}</h3>
        <div className="thumbnail-spec-gym__location">
          <svg width="14" height="16" aria-hidden="true">
            <use xlinkHref="/sprites.svg#icon-location"></use>
          </svg>
          <address className="thumbnail-spec-gym__location-address">м. {gym !== undefined ? gym.location : ''}</address>
        </div>
      </div>
      <div className="thumbnail-spec-gym__button-wrapper">
        <NavLink className="btn btn--small thumbnail-spec-gym__button" to={AppRoute.Gym.replace(':id', id.toString())}>Подробнее</NavLink>
        <NavLink className="btn btn--small btn--outlined thumbnail-spec-gym__button" to={AppRoute.GymsCatalogue}>Все залы</NavLink>
      </div>
    </div>
  );
}

export default SpecialOfferGym;
