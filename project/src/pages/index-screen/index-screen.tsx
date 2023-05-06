import Header from '../../components/header/header';
import PopularTrainingsList from '../../components/popular-trainings-list/popular-trainings-list';
import SpecialForYouList from '../../components/special-for-you-list/special-for-you-list';
import UserCard from '../../components/user-card/user-card';


type IndexScreenProps = {
  popularTrainingsQty: number;
  lookForCompanyUsersQty: number;
  specialForYouItemsQty: number;
}

function IndexScreen({popularTrainingsQty, lookForCompanyUsersQty, specialForYouItemsQty}: IndexScreenProps): JSX.Element {
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <h1 className="visually-hidden">FitFriends — Время находить тренировки, спортзалы и друзей спортсменов</h1>
        <SpecialForYouList specialForYouItemsQty= {specialForYouItemsQty}/>
        <section className="special-offers">
          <div className="container">
            <div className="special-offers__wrapper">
              <h2 className="visually-hidden">Специальные предложения</h2>
              <ul className="special-offers__list">
                <li className="special-offers__item is-active">
                  <aside className="promo-slider">
                    <div className="promo-slider__overlay"></div>
                    <div className="promo-slider__image">
                      <img src="img/content/promo-1.png" srcSet="img/content/promo-1@2x.png 2x" width="1040" height="469" alt="promo"/>
                    </div>
                    <div className="promo-slider__header">
                      <h3 className="promo-slider__title">Fitball</h3>
                      <div className="promo-slider__logo">
                        <svg width="74" height="74" aria-hidden="true">
                          <use xlinkHref="/sprites.svg#logotype"></use>
                        </svg>
                      </div>
                    </div><span className="promo-slider__text">Горячие предложения на тренировки на фитболе</span>
                    <div className="promo-slider__bottom-container">
                      <div className="promo-slider__slider-dots">
                        <button className="promo-slider__slider-dot--active promo-slider__slider-dot" aria-label="первый слайд"></button>
                        <button className="promo-slider__slider-dot" aria-label="второй слайд"></button>
                        <button className="promo-slider__slider-dot" aria-label="третий слайд"></button>
                      </div>
                      <div className="promo-slider__price-container">
                        <p className="promo-slider__price">1600 ₽</p>
                        <p className="promo-slider__sup">за занятие</p>
                        <p className="promo-slider__old-price">2000 ₽</p>
                      </div>
                    </div>
                  </aside>
                </li>
                <li className="special-offers__item">
                  <aside className="promo-slider">
                    <div className="promo-slider__overlay"></div>
                    <div className="promo-slider__image"><img src="img/content/promo-2.png" srcSet="img/content/promo-2@2x.png 2x" width="1040" height="469" alt="promo"/>
                    </div>
                    <div className="promo-slider__header">
                      <h3 className="promo-slider__title">Fleksbend</h3>
                      <div className="promo-slider__logo">
                        <svg width="74" height="74" aria-hidden="true">
                          <use xlinkHref="/sprites.svg#logotype"></use>
                        </svg>
                      </div>
                    </div><span className="promo-slider__text">Горячие предложения на&nbsp;Тренировки с&nbsp;резинкой для фитнеса</span>
                    <div className="promo-slider__bottom-container">
                      <div className="promo-slider__slider-dots">
                        <button className="promo-slider__slider-dot" aria-label="первый слайд"></button>
                        <button className="promo-slider__slider-dot--active promo-slider__slider-dot" aria-label="второй слайд"></button>
                        <button className="promo-slider__slider-dot" aria-label="третий слайд"></button>
                      </div>
                      <div className="promo-slider__price-container">
                        <p className="promo-slider__price">2400 ₽</p>
                        <p className="promo-slider__sup">за занятие</p>
                        <p className="promo-slider__old-price">2800 ₽</p>
                      </div>
                    </div>
                  </aside>
                </li>
                <li className="special-offers__item">
                  <aside className="promo-slider">
                    <div className="promo-slider__overlay"></div>
                    <div className="promo-slider__image"><img src="img/content/promo-3.png" srcSet="img/content/promo-3@2x.png 2x" width="1040" height="469" alt="promo"/>
                    </div>
                    <div className="promo-slider__header">
                      <h3 className="promo-slider__title">Full Body Stretch</h3>
                      <div className="promo-slider__logo">
                        <svg width="74" height="74" aria-hidden="true">
                          <use xlinkHref="/sprites.svg#logotype"></use>
                        </svg>
                      </div>
                    </div><span className="promo-slider__text">Горячие предложения на&nbsp;Комплекс упражнений на&nbsp;растяжку всего тела для новичков</span>
                    <div className="promo-slider__bottom-container">
                      <div className="promo-slider__slider-dots">
                        <button className="promo-slider__slider-dot" aria-label="первый слайд"></button>
                        <button className="promo-slider__slider-dot" aria-label="второй слайд"></button>
                        <button className="promo-slider__slider-dot--active promo-slider__slider-dot" aria-label="третий слайд"></button>
                      </div>
                      <div className="promo-slider__price-container">
                        <p className="promo-slider__price">1800 ₽</p>
                        <p className="promo-slider__sup">за занятие</p>
                        <p className="promo-slider__old-price">2200 ₽</p>
                      </div>
                    </div>
                  </aside>
                </li>
              </ul>
              <div className="thumbnail-spec-gym">
                <div className="thumbnail-spec-gym__image">
                  <picture>
                    <source type="image/webp" srcSet="img/content/thumbnails/nearest-gym-01.webp, img/content/thumbnails/nearest-gym-01@2x.webp 2x"/><img src="img/content/thumbnails/nearest-gym-01.jpg" srcSet="img/content/thumbnails/nearest-gym-01@2x.jpg 2x" width="330" height="190" alt=""/>
                  </picture>
                </div>
                <p className="thumbnail-spec-gym__type">Ближайший зал</p>
                <div className="thumbnail-spec-gym__header">
                  <h3 className="thumbnail-spec-gym__title">атлетика</h3>
                  <div className="thumbnail-spec-gym__location">
                    <svg width="14" height="16" aria-hidden="true">
                      <use xlinkHref="/sprites.svg#icon-location"></use>
                    </svg>
                    <address className="thumbnail-spec-gym__location-address">м. Московская</address>
                  </div>
                </div>
                <div className="thumbnail-spec-gym__button-wrapper">
                  <a className="btn btn--small thumbnail-spec-gym__button" href="#">Подробнее</a>
                  <a className="btn btn--small btn--outlined thumbnail-spec-gym__button" href="#">Все залы</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PopularTrainingsList popularTrainingsQty ={popularTrainingsQty}/>
        <section className="look-for-company">
          <div className="container">
            <div className="look-for-company__wrapper">
              <div className="look-for-company__title-wrapper">
                <h2 className="look-for-company__title">Ищут компанию для тренировки</h2>
                <button className="btn-flat btn-flat--light look-for-company__button" type="button"><span>Смотреть все</span>
                  <svg width="14" height="10" aria-hidden="true">
                    <use xlinkHref="/sprites.svg#arrow-right"></use>
                  </svg>
                </button>
                <div className="look-for-company__controls">
                  <button className="btn-icon btn-icon--outlined look-for-company__control" type="button" aria-label="previous">
                    <svg width="16" height="14" aria-hidden="true">
                      <use xlinkHref="/sprites.svg#arrow-left"></use>
                    </svg>
                  </button>
                  <button className="btn-icon btn-icon--outlined look-for-company__control" type="button" aria-label="next">
                    <svg width="16" height="14" aria-hidden="true">
                      <use xlinkHref="/sprites.svg#arrow-right"></use>
                    </svg>
                  </button>
                </div>
              </div>
              <ul className="look-for-company__list">
                {Array.from({length: lookForCompanyUsersQty}, (_v, k) => <UserCard key={k} role ='user' screen='look-for-company' topstatus/> )}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>

  );
}

export default IndexScreen;
