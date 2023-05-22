import { NavLink } from 'react-router-dom';
import { ExtendedUser } from '../../types/user.interface';
import { AppRoute } from '../../const';

type UserCardProps = {
  topstatus: boolean;
  screen: string;
  item: ExtendedUser;
}

function UserCard({ item, topstatus, screen }: UserCardProps): JSX.Element {
  const id = item.id as string;
  return (
    <li className={`${screen}__item`}>
      <div className={`thumbnail-user thumbnail-user--role-${item.role} thumbnail-user--dark`}>
        <div className="thumbnail-user__image">
          <picture>
            <source type="image/webp" srcSet="img/content/thumbnails/user-04.webp, img/content/thumbnails/user-04@2x.webp 2x" /><img src="img/content/thumbnails/user-04.jpg" srcSet="img/content/thumbnails/user-04@2x.jpg 2x" width="82" height="82" alt="" />
          </picture>
        </div>
        <div className="thumbnail-user__top-status thumbnail-user__top-status--role-user">
          <svg width="12" height="12" aria-hidden="true">
            <use xlinkHref="/sprites.svg#icon-crown"></use>
          </svg>
        </div>
        <div className="thumbnail-user__header">
          <h3 className="thumbnail-user__name">{item.firstname}</h3>
          <div className="thumbnail-user__location">
            <svg width="14" height="16" aria-hidden="true">
              <use xlinkHref="/sprites.svg#icon-location"></use>
            </svg>
            <address className="thumbnail-user__location-address">{item.place}</address>
          </div>
        </div>
        <ul className="thumbnail-user__hashtags-list">
          <li className="thumbnail-user__hashtags-item">
            <div className="hashtag thumbnail-user__hashtag"><span>#{item.trainingType}</span></div>
          </li>
        </ul>
        <NavLink className="btn btn--outlined btn--dark-bg btn--medium thumbnail-user__button" to={AppRoute.User.replace(':id', id)}>Подробнее</NavLink>
      </div>
    </li>
  );
}

export default UserCard;
