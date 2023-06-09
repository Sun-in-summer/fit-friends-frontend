import { Review } from '../../types/review.interface';

type ReviewCardProps = {
  review: Review;
}

function ReviewCard({ review }: ReviewCardProps): JSX.Element {


  return (
    <li className="reviews-side-bar__item">
      <div className="review">
        <div className="review__user-info">
          <div className="review__user-photo">
            <picture>
              <source type="image/webp" srcSet="../img/content/avatars/users/photo-1.webp, img/content/avatars/users/photo-1@2x.webp 2x" /><img src="../img/content/avatars/users/photo-1.png" srcSet="../img/content/avatars/users/photo-1@2x.png 2x" width="64" height="64" alt="Изображение пользователя" />
            </picture>
          </div><span className="review__user-name">{review.userId}</span>
          <div className="review__rating">
            <svg width="16" height="16" aria-hidden="true">
              <use xlinkHref="/sprites.svg#icon-star"></use>
            </svg><span>5</span>
          </div>
        </div>
        <p className="review__comment">{review.text}</p>
      </div>
    </li>
  );
}

export default ReviewCard;
