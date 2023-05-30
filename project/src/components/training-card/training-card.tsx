import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Training } from '../../types/training.interface';

type TrainingCardProps = {
  item: Training;
}
function TrainingCard({ item }: TrainingCardProps): JSX.Element {

  const id = item.id as number;

  return (

    <li className="popular-trainings__item">
      <div className="thumbnail-training">
        <div className="thumbnail-training__inner">
          <div className="thumbnail-training__image">
            <picture>
              <source type="image/webp"
                srcSet="/img/content/thumbnails/training-06.webp, /img/content/thumbnails/training-06@2x.webp 2x"
              />
              <img src="/img/content/thumbnails/training-06.jpg"
                srcSet="/img/content/thumbnails/training-06@2x.jpg 2x" width="330" height="190" alt=""
              />
            </picture>
          </div>
          <p className="thumbnail-training__price"><span className="thumbnail-training__price-value">{item.price}</span><span>₽</span>
          </p>
          <h3 className="thumbnail-training__title">{item.title}</h3>
          <div className="thumbnail-training__info">
            <ul className="thumbnail-training__hashtags-list">
              <li className="thumbnail-training__hashtags-item">
                <div className="hashtag thumbnail-training__hashtag"><span>#{item.trainingType}</span></div>
              </li>
              <li className="thumbnail-training__hashtags-item">
                <div className="hashtag thumbnail-training__hashtag"><span>#{item.calories}</span></div>
              </li>
            </ul>
            <div className="thumbnail-training__rate">
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="/sprites.svg#icon-star"></use>
              </svg>
              <span className="thumbnail-training__rate-value">{item.rating}</span>
            </div>
          </div>
          <div className="thumbnail-training__text-wrapper">
            <p className="thumbnail-training__text">{item.description}</p>
          </div>
          <div className="thumbnail-training__button-wrapper">
            <NavLink className="btn btn--small thumbnail-training__button-catalog" to={AppRoute.Training.replace(':id', id.toString())}>Подробнее</NavLink>
            <NavLink className="btn btn--small btn--outlined thumbnail-training__button-catalog" to={AppRoute.Reviews.replace(':id', id.toString())}>Отзывы</NavLink>
          </div>
        </div>
      </div>
    </li>

  );
}

export default TrainingCard;
