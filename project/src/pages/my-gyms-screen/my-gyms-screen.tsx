import GymCard from '../../components/gym-card/gym-card';
import Header from '../../components/header/header';

type MyGymsScreenProps ={
  myGymsGymsQty: number;
}

function MyGymsScreen({myGymsGymsQty}: MyGymsScreenProps): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="my-gyms">
          <div className="container">
            <div className="my-gyms__wrapper">
              <button className="btn-flat my-gyms__back" type="button">
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="/sprites.svg#arrow-left"></use>
                </svg><span>Назад</span>
              </button>
              <div className="my-gyms__title-wrapper">
                <h1 className="my-gyms__title">Мои залы</h1>
                <div className="custom-toggle custom-toggle--switch custom-toggle--switch-right" data-validate-type="checkbox">
                  <label>
                    <input type="checkbox" value="user-agreement-1" name="user-agreement"/>
                    <span className="custom-toggle__icon">
                      <svg width="9" height="6" aria-hidden="true">
                        <use xlinkHref="/sprites.svg#arrow-check"></use>
                      </svg>
                    </span>
                    <span className="custom-toggle__label">Только рядом</span>
                  </label>
                </div>
              </div>
              <ul className="my-gyms__list">
                {Array.from({length: myGymsGymsQty}, (_v, k)=> <GymCard key={k} screen='my-gyms'/>)}
              </ul>
              <div className="show-more my-gyms__show-more">
                <button className="btn show-more__button show-more__button--more" type="button">Показать еще</button>
                <button className="btn show-more__button show-more__button--to-top" type="button">Вернуться в начало</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

  );
}

export default MyGymsScreen;
