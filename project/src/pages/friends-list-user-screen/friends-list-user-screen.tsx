import FriendsListItem from '../../components/friends-list-item/friends-list-item';
import Header from '../../components/header/header';

function FriendsListUserScreen(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="friends-list">
          <div className="container">
            <div className="friends-list__wrapper">
              <button className="btn-flat friends-list__back" type="button">
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="/sprites.svg#arrow-left"></use>
                </svg><span>Назад</span>
              </button>
              <div className="friends-list__title-wrapper">
                <h1 className="friends-list__title">Мои друзья</h1>
                {/* <div className="custom-toggle custom-toggle--switch custom-toggle--switch-right" data-validate-type="checkbox">
                  <label>
                    <input type="checkbox" value="user-agreement-1" name="user-agreement"><span className="custom-toggle__icon">
                      <svg width="9" height="6" aria-hidden="true">
                        <use xlinkHref="/sprites.svg#arrow-check"></use>
                      </svg></span><span className="custom-toggle__label">Только онлайн</span>
                  </label>
                </div> */}
              </div>
              <ul className="friends-list__list">
                <FriendsListItem/>
                <FriendsListItem/>
                <FriendsListItem/>
                <FriendsListItem/>
                <FriendsListItem/>
                <FriendsListItem/>
                <FriendsListItem/>
                <FriendsListItem/>
                <FriendsListItem/>
              </ul>
              <div className="show-more friends-list__show-more">
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

export default FriendsListUserScreen;
