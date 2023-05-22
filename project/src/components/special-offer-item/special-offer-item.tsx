import { DEFAULT_DISCOUNT_SPECIAL_OFFER_TRAINING, DEFAULT_SPECIAL_OFFERS_LENGTH, DEFAULT_SPECIAL_OFFERS_MIDDLE, DEFAULT_START_INDEX } from '../../const';
import { Training } from '../../types/training.interface';


type SpecialOffersItemProps = {
  item: Training;
  activeSliderPosition: number;
  setActiveSliderPosition: (state: number) => void;
  index: number;
}

function SpecialOffersItem({ item, index, activeSliderPosition, setActiveSliderPosition }: SpecialOffersItemProps): JSX.Element {


  return (
    <li className={`special-offers__item ${index === activeSliderPosition ? 'is-active' : ''}`}>
      <aside className="promo-slider">
        <div className="promo-slider__overlay"></div>
        <div className="promo-slider__image">
          <img src="img/content/promo-1.png" srcSet="img/content/promo-1@2x.png 2x" width="1040" height="469" alt="promo" />
        </div>
        <div className="promo-slider__header">
          <h3 className="promo-slider__title">{item.title}</h3>
          <div className="promo-slider__logo">
            <svg width="74" height="74" aria-hidden="true">
              <use xlinkHref="/sprites.svg#logotype"></use>
            </svg>
          </div>
        </div><span className="promo-slider__text">{item.description}</span>
        <div className="promo-slider__bottom-container">
          <div className="promo-slider__slider-dots">
            <button
              className={`promo-slider__slider-dot ${activeSliderPosition === DEFAULT_START_INDEX ? 'promo-slider__slider-dot--active' : ''}`}
              aria-label="первый слайд"
              id='0'
              onClick={() => setActiveSliderPosition(DEFAULT_START_INDEX)}
            >
            </button>
            <button
              className={`promo-slider__slider-dot ${activeSliderPosition === DEFAULT_SPECIAL_OFFERS_MIDDLE ? 'promo-slider__slider-dot--active' : ''}`}
              aria-label="второй слайд"
              id='1'
              onClick={() => setActiveSliderPosition(DEFAULT_SPECIAL_OFFERS_MIDDLE)}
            >

            </button>
            <button
              className={`promo-slider__slider-dot ${activeSliderPosition === DEFAULT_SPECIAL_OFFERS_LENGTH - 1 ? 'promo-slider__slider-dot--active' : ''}`}
              aria-label="третий слайд"
              id='2'
              onClick={() => setActiveSliderPosition(DEFAULT_SPECIAL_OFFERS_LENGTH - 1)}
            >

            </button>
          </div>
          <div className="promo-slider__price-container">
            <p className="promo-slider__price">{Math.ceil(item.price * DEFAULT_DISCOUNT_SPECIAL_OFFER_TRAINING)} ₽</p>
            <p className="promo-slider__sup">за занятие</p>
            <p className="promo-slider__old-price">{item.price} ₽</p>
          </div>
        </div>
      </aside>
    </li>
  );
}

export default SpecialOffersItem;
