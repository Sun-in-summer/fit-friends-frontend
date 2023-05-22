import { NavLink } from 'react-router-dom';
import { Training } from '../../types/training.interface';
import { AppRoute } from '../../const';

type SpecialForYouItemProps = {
  item: Training;
}

function SpecialForYouItem({ item }: SpecialForYouItemProps): JSX.Element {


  const id = item.id as number;

  return (
    <li className="special-for-you__item">
      <div className="thumbnail-preview">
        <div className="thumbnail-preview__image">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/thumbnails/preview-03.webp, img/content/thumbnails/preview-03@2x.webp 2x"
            />
            <img src="img/content/thumbnails/preview-03.jpg"
              srcSet="img/content/thumbnails/preview-03@2x.jpg 2x"
              width="452" height="191" alt=""
            />
          </picture>
        </div>
        <div className="thumbnail-preview__inner">
          <h3 className="thumbnail-preview__title">{item.trainingType}</h3>
          <div className="thumbnail-preview__button-wrapper">
            <NavLink className="btn btn--small thumbnail-preview__button" to={AppRoute.Training.replace(':id', id.toString())}>Подробнее</NavLink>
          </div>
        </div>
      </div>
    </li>
  );
}

export default SpecialForYouItem;
