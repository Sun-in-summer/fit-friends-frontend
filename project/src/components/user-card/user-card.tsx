type UserCardProps = {
  role: string;
  topstatus: boolean;
  screen: string;
}

function UserCard({role, topstatus, screen}: UserCardProps): JSX.Element {
  return (
    <li className={`${screen}__item`}>
      <div className={`thumbnail-user thumbnail-user--role-${role} thumbnail-user--dark`}>
        <div className="thumbnail-user__image">
          <picture>
            <source type="image/webp" srcSet="img/content/thumbnails/user-04.webp, img/content/thumbnails/user-04@2x.webp 2x"/><img src="img/content/thumbnails/user-04.jpg" srcSet="img/content/thumbnails/user-04@2x.jpg 2x" width="82" height="82" alt=""/>
          </picture>
        </div>
        <div className="thumbnail-user__top-status thumbnail-user__top-status--role-user">
          <svg width="12" height="12" aria-hidden="true">
            <use xlinkHref="/sprites.svg#icon-crown"></use>
          </svg>
        </div>
        <div className="thumbnail-user__header">
          <h3 className="thumbnail-user__name">Диана</h3>
          <div className="thumbnail-user__location">
            <svg width="14" height="16" aria-hidden="true">
              <use xlinkHref="/sprites.svg#icon-location"></use>
            </svg>
            <address className="thumbnail-user__location-address">Невский проспект</address>
          </div>
        </div>
        <ul className="thumbnail-user__hashtags-list">
          <li className="thumbnail-user__hashtags-item">
            <div className="hashtag thumbnail-user__hashtag"><span>#пилатес</span></div>
          </li>
        </ul>
        <a className="btn btn--outlined btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
      </div>
    </li>
  );
}

export default UserCard;
