import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { fetchManyUsersAction } from '../../store/api-actions';
import { AppRoute, DEFAULT_END_COMPANY_INDEX, DEFAULT_START_COMPANY_INDEX } from '../../const';
import useCompany from '../../hooks/useCompany/useCompany';
import UserCard from '../user-card/user-card';
import { NavLink } from 'react-router-dom';
import { getCompanyUsersLoadingErrorStatus, getCompanyUsersLoadingStatus } from '../../store/user-process/selector';


function LookForCompanyList(): JSX.Element {

  const dispatch = useAppDispatch();
  const usersForCompany = useCompany();


  const isCompanyUsersLoadingError = useAppSelector(getCompanyUsersLoadingErrorStatus);
  const isCompanyUsersLoading = useAppSelector(getCompanyUsersLoadingStatus);

  useEffect(() => {
    if ((!usersForCompany || usersForCompany.length === 0) && (!isCompanyUsersLoadingError && !isCompanyUsersLoading)) {
      dispatch(fetchManyUsersAction());
    }
  }, [dispatch, usersForCompany, isCompanyUsersLoadingError, isCompanyUsersLoading]);


  const [startIndex, setStartIndex] = useState(DEFAULT_START_COMPANY_INDEX);
  const [endIndex, setEndIndex] = useState(DEFAULT_END_COMPANY_INDEX);

  const companyItems = usersForCompany.slice(startIndex, endIndex);


  const handleNextButtonControl = () => {
    setStartIndex((prevState) => startIndex + 3 < usersForCompany.length ? startIndex + 1 : startIndex);
    setEndIndex((prevState) => startIndex + 3 < usersForCompany.length ? endIndex + 1 : endIndex);


  };

  const handlePrevButtonControl = () => {
    setStartIndex((prevState) => startIndex - 1 > 0 ? startIndex - 1 : 0);
    setEndIndex((prevState) => startIndex - 1 >= 0 ? endIndex - 1 : endIndex);

  };

  return (

    <section className="look-for-company">
      <div className="container">
        <div className="look-for-company__wrapper">
          <div className="look-for-company__title-wrapper">
            <h2 className="look-for-company__title">Ищут компанию для тренировки</h2>
            <NavLink
              className="btn-flat btn-flat--light look-for-company__button"
              type="button"
              to={AppRoute.UsersCatalogue}
            >
              <span>Смотреть все</span>
              <svg width="14" height="10" aria-hidden="true">
                <use xlinkHref="/sprites.svg#arrow-right"></use>
              </svg>
            </NavLink>
            <div className="look-for-company__controls">
              <button
                className="btn-icon btn-icon--outlined look-for-company__control"
                type="button"
                aria-label="previous"
                onClick={handlePrevButtonControl}
              >
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="/sprites.svg#arrow-left"></use>
                </svg>
              </button>
              <button
                className="btn-icon btn-icon--outlined look-for-company__control"
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
          <ul className="look-for-company__list">
            {companyItems.map((item) => <UserCard key={item.id} item={item} screen='look-for-company' topstatus />)}
          </ul>
        </div>
      </div>
    </section>

  );
}

export default LookForCompanyList;
