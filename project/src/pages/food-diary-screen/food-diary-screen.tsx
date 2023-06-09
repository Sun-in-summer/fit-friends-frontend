function FoodDiaryScreen(): JSX.Element {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <a className="header__logo" href="index.html" aria-label="Переход на главную">
            <svg width="187" height="70" aria-hidden="true">
              <use xlinkHref="/sprites.svg#logo"></use>
            </svg>
          </a>
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <a className="main-nav__link is-active" href="#" aria-label="На главную">
                  <svg width="18" height="18" aria-hidden="true">
                    <use xlinkHref="/sprites.svg#icon-home"></use>
                  </svg>
                </a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#" aria-label="Личный кабинет">
                  <svg width="16" height="18" aria-hidden="true">
                    <use xlinkHref="/sprites.svg#icon-user"></use>
                  </svg>
                </a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#" aria-label="Друзья">
                  <svg width="22" height="16" aria-hidden="true">
                    <use xlinkHref="/sprites.svg#icon-friends"></use>
                  </svg>
                </a>
              </li>
              <li className="main-nav__item main-nav__item--notifications">
                <a className="main-nav__link" href="#" aria-label="Уведомления">
                  <svg width="14" height="18" aria-hidden="true">
                    <use xlinkHref="/sprites.svg#icon-notification"></use>
                  </svg>
                </a>
                <div className="main-nav__dropdown">
                  <p className="main-nav__label">Оповещения</p>
                  <ul className="main-nav__sublist">
                    <li className="main-nav__subitem">
                      <a className="notification is-active" href="#">
                        <p className="notification__text">Катерина пригласила вас на&nbsp;тренировку</p>
                        <time className="notification__time" dateTime="2023-12-23 12:35">23 декабря, 12:35</time>
                      </a>
                    </li>
                    <li className="main-nav__subitem">
                      <a className="notification is-active" href="#">
                        <p className="notification__text">Никита отклонил приглашение на&nbsp;совместную тренировку</p>
                        <time className="notification__time" dateTime="2023-12-22 09:22">22 декабря, 09:22</time>
                      </a>
                    </li>
                    <li className="main-nav__subitem">
                      <a className="notification is-active" href="#">
                        <p className="notification__text">Татьяна добавила вас в&nbsp;друзья</p>
                        <time className="notification__time" dateTime="2023-12-18 18:50">18 декабря, 18:50</time>
                      </a>
                    </li>
                    {/* <li className="main-nav__subitem"><a className="notification" href="#">
                        <p className="notification__text">Наталья приняла приглашение на&nbsp;совместную тренировку</p>
                        <time className="notification__time" dateTime="2023-12-14 08:15">14 декабря, 08:15</time></a>
                    </li> */}
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div className="search">
            <form action="#" method="get">
              <label><span className="search__label">Поиск</span>
                <input type="search" name="search" />
                <svg className="search__icon" width="20" height="20" aria-hidden="true">
                  <use xlinkHref="/sprites.svg#icon-search"></use>
                </svg>
              </label>
              <ul className="search__list">
                <li className="search__item"><a className="search__link" href="#">Бокс</a></li>
                <li className="search__item"><a className="search__link is-active" href="#">Бег</a></li>
                <li className="search__item"><a className="search__link" href="#">Аэробика</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
              </ul>
            </form>
          </div>
        </div>
      </header>
      <main>
        <div className="inner-page inner-page--no-sidebar">
          <div className="container">
            <div className="inner-page__wrapper">
              <button className="btn-flat inner-page__back" type="button">
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="/sprites.svg#arrow-left"></use>
                </svg><span>Назад</span>
              </button>
              <div className="inner-page__content">
                <section className="food-diary">
                  <div className="food-diary__wrapper">
                    <h1 className="food-diary__title">Дневник питания</h1>
                    <div className="food-diary__block">
                      <div className="food-diary__sidebar">
                        <svg className="food-diary__icon" width="21" height="18" aria-hidden="true">
                          <use xlinkHref="/sprites.svg#icon-book"></use>
                        </svg>
                        <ul className="food-diary__list">
                          <li className="food-diary__item"><span>Завтрак</span></li>
                          <li className="food-diary__item"><span>Обед</span></li>
                          <li className="food-diary__item"><span>Ужин</span></li>
                          <li className="food-diary__item"><span>Перекус</span></li>
                        </ul>
                        <p className="food-diary__total">Итого</p>
                      </div>
                      <div className="food-diary__content">
                        <form action="#" method="get">
                          <table className="food-diary__table">
                            <tr className="food-diary__row food-diary__row--head">
                              <th className="food-diary__cell food-diary__cell--head">пн</th>
                              <th className="food-diary__cell food-diary__cell--head">вт</th>
                              <th className="food-diary__cell food-diary__cell--head">ср</th>
                              <th className="food-diary__cell food-diary__cell--head">чт</th>
                              <th className="food-diary__cell food-diary__cell--head">пт</th>
                              <th className="food-diary__cell food-diary__cell--head">сб</th>
                              <th className="food-diary__cell food-diary__cell--head">вс</th>
                            </tr>
                            <tr className="food-diary__row">
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="620" />
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="620" />
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="620" />
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="620" />
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="620"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="620"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="620"/>
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr className="food-diary__row">
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="810"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="810"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="810"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="810"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="810"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="810"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="810"/>
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr className="food-diary__row">
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="770"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="770"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="770"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="770"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="770"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="770"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="770"/>
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr className="food-diary__row">
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="390"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="390"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="390"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="390"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="390"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="390"/>
                                  </label>
                                </div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__input">
                                  <label>
                                    <input type="number" name="calories" value="390"/>
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr className="food-diary__row">
                              <td className="food-diary__cell">
                                <div className="food-diary__total-value"><span>2 590</span></div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__total-value"><span>2 590</span></div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__total-value"><span>2 590</span></div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__total-value"><span>2 590</span></div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__total-value"><span>2 590</span></div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__total-value"><span>2 590</span></div>
                              </td>
                              <td className="food-diary__cell">
                                <div className="food-diary__total-value"><span>2 590</span></div>
                              </td>
                            </tr>
                          </table>
                        </form>
                      </div>
                    </div>
                    <div className="total food-diary__total-per-week">
                      <div className="total__title-wrapper">
                        <div className="total__title">Итого за неделю</div>
                        <svg className="total__icon" width="30" height="30" aria-hidden="true">
                          <use xlinkHref="/sprites.svg#icon-chart-with-arrow"></use>
                        </svg>
                      </div>
                      <p className="total__number">18 130</p>
                    </div>
                    <button className="btn food-diary__button" type="button">Сохранить</button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default FoodDiaryScreen;
