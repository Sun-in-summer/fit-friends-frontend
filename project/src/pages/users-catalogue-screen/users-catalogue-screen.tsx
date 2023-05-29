import { useMemo, useState } from 'react';
import Header from '../../components/header/header';
import UserCard from '../../components/user-card/user-card';
import { DEFAULT_PAGE, MAX_USERS_QTY_PER_PAGE } from '../../const';

import { useAppSelector } from '../../hooks';
import { getFilteredUsersData, getUsersData } from '../../store/user-process/selector';
import UsersCatalogueFilter from '../../components/users-catalogue-filter/users-catalogue-filter';
import { getSortedUsers } from '../../utils/utils';
import { getActiveSortOption } from '../../store/select-sort-option-process/selector';
import { ExtendedUser } from '../../types/user.interface';


function UsersCatalogueScreen(): JSX.Element {

  const users = useAppSelector(getUsersData);
  const [page, setPage] = useState(DEFAULT_PAGE);

  const activeSortOption = useAppSelector(getActiveSortOption);

  let filteredUsers = useAppSelector(getFilteredUsersData);


  const handleShowMoreButtonClick = () => {
    setPage((prevState) => prevState < pagesCount ? prevState + 1 : prevState);
  };

  const handleUpToTopButtonClick = () => {
    window.scrollTo(0, 0);
  };

  if (filteredUsers === undefined || filteredUsers.length === 0) {
    filteredUsers = users;
  }

  const pagesCount = Math.ceil(filteredUsers.length / MAX_USERS_QTY_PER_PAGE);

  const sortedUsers = useMemo(() => getSortedUsers(filteredUsers as ExtendedUser[], activeSortOption), [activeSortOption, filteredUsers]);


  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Каталог пользователей</h1>
              <div className="user-catalog-form">
                <h2 className="visually-hidden">Каталог пользователя</h2>
                <div className="user-catalog-form__wrapper">
                  <button className="btn-flat btn-flat--underlined user-catalog-form__btnback" type="button">
                    <svg width="14" height="10" aria-hidden="true">
                      <use xlinkHref="#arrow-left"></use>
                    </svg><span>Назад</span>
                  </button>
                  <h3 className="user-catalog-form__title">Фильтры</h3>
                  <UsersCatalogueFilter />
                </div>
              </div>
              <div className="inner-page__content">
                <div className="users-catalog">
                  <ul className="users-catalog__list">
                    {sortedUsers.map((item) => <UserCard key={item.id} screen='users-catalogue' topstatus={false} item={item} />)}

                  </ul>
                  <div className="show-more users-catalog__show-more">
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

export default UsersCatalogueScreen;
