import { useEffect, useState } from 'react';


import { useAppDispatch, useAppSelector } from '../../hooks';
import { buyTrainingAction, fetchMyOrdersAction } from '../../store/api-actions';
import { Training } from '../../types/training.interface';
import { PaymentMethod } from '../../types/payment-method.enum';
import { OrderType } from '../../types/order-type.enum';
import { getUser } from '../../store/user-process/selector';

type ModalBuyTrainingProps = {
  training: Training;
  onModalOpen: (state: boolean) => void;
};

function ModalBuyTraining({ training, onModalOpen }: ModalBuyTrainingProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentWay, setPaymentWay] = useState<PaymentMethod | null>(null);
  const [paymentWayError, setPaymentWayError] = useState('');

  const user = useAppSelector(getUser);
  const userId = user?.id;

  useEffect(() => {
    if (training.price) {
      setTotalPrice(quantity * training.price);
    }
  }, [quantity, training.price]);

  const handleMinusButtonClick = () => {
    setQuantity((prevState) => prevState > 1 ? prevState - 1 : prevState);
  };

  const handlePlusButtonClick = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const buyTraining = async () => {
    if (training.price && paymentWay) {
      await dispatch(buyTrainingAction({
        orderType: OrderType.OneTimeTraining,
        trainingId: training.id,
        price: training.price,
        quantity,
        amount: totalPrice,
        paymentWay: paymentWay,
        userId: userId as string,

      }));
      await dispatch(fetchMyOrdersAction());
    }
  };

  const handleBuyButtonClick = () => {
    if (!paymentWay) {
      setPaymentWayError('Выберите способ оплаты');
    } else {
      buyTraining();
      onModalOpen(false);
    }
  };

  return (
    <main>
      <div className="popup-form popup-form--buy">
        <section className="popup">
          <div className="popup__wrapper">
            <div className="popup-head">
              <h2 className="popup-head__header">Купить тренировку</h2>
              <button
                onClick={() => onModalOpen(false)}
                className="btn-icon btn-icon--outlined btn-icon--big" type="button" aria-label="close"
              >
                <svg width="20" height="20" aria-hidden="true">
                  <use xlinkHref="/sprites.svg#icon-cross"></use>
                </svg>
              </button>
            </div>
            <div className="popup__content popup__content--purchases">
              <div className="popup__product">
                <div className="popup__product-image">
                  <picture>
                    <img src={training.backgroundImage} width="98" height="80" alt="" />
                  </picture>
                </div>
                <div className="popup__product-info">
                  <h3 className="popup__product-title">
                    {training.title}
                  </h3>
                  <p className="popup__product-price">
                    {`${training.price ?? ''} ₽`}
                  </p>
                </div>
                <div className="popup__product-quantity">
                  <p className="popup__quantity">Количество</p>
                  <div className="input-quantity">
                    <button
                      onClick={handleMinusButtonClick}
                      className="btn-icon btn-icon--quantity" type="button" aria-label="minus"
                    >
                      <svg width="12" height="12" aria-hidden="true">
                        <use xlinkHref="/sprites.svg#icon-minus"></use>
                      </svg>
                    </button>
                    <div className="input-quantity__input">
                      <label>
                        <input
                          value={quantity}
                          size={2} type="number" readOnly
                        />
                      </label>
                    </div>
                    <button
                      onClick={handlePlusButtonClick}
                      className="btn-icon btn-icon--quantity" type="button" aria-label="plus"
                    >
                      <svg width="12" height="12" aria-hidden="true">
                        <use xlinkHref="/sprites.svg#icon-plus"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <section
                className={`
                    payment-method
                    ${!paymentWay && paymentWayError ? 'custom-input--error' : ''}
                  `}
              >
                <h4 className="payment-method__title">Выберите способ оплаты</h4>
                <ul className="payment-method__list">
                  <li className="payment-method__item">
                    <div className="btn-radio-image">
                      <label>
                        <input
                          onChange={() => setPaymentWay(PaymentMethod.Visa)}
                          type="radio" name="payment-purchases" aria-label="Visa."
                        />
                        <span className="btn-radio-image__image">
                          <svg width="58" height="20" aria-hidden="true">
                            <use xlinkHref="/sprites.svg#visa-logo"></use>
                          </svg>
                        </span>
                      </label>
                    </div>
                  </li>
                  <li className="payment-method__item">
                    <div className="btn-radio-image">
                      <label>
                        <input
                          onChange={() => setPaymentWay(PaymentMethod.Mir)}
                          type="radio" name="payment-purchases" aria-label="Мир."
                        />
                        <span className="btn-radio-image__image">
                          <svg width="66" height="20" aria-hidden="true">
                            <use xlinkHref="/sprites.svg#mir-logo"></use>
                          </svg>
                        </span>
                      </label>
                    </div>
                  </li>
                  <li className="payment-method__item">
                    <div className="btn-radio-image">
                      <label>
                        <input
                          onChange={() => setPaymentWay(PaymentMethod.Umoney)}
                          type="radio" name="payment-purchases" aria-label="Iomoney."
                        />
                        <span className="btn-radio-image__image">
                          <svg width="106" height="24" aria-hidden="true">
                            <use xlinkHref="/sprites.svg#iomoney-logo"></use>
                          </svg>
                        </span>
                      </label>
                    </div>
                  </li>
                </ul>
                {
                  (!paymentWay && paymentWayError)
                  && (
                    <span className="custom-input__error">
                      {paymentWayError}
                    </span>
                  )
                }
              </section>
              <div className="popup__total">
                <p className="popup__total-text">Итого</p>
                <svg className="popup__total-dash" width="310" height="2" aria-hidden="true">
                  <use xlinkHref="/sprites.svg#dash-line"></use>
                </svg>
                <p className="popup__total-price">
                  {`${totalPrice}`}
                  &nbsp;₽
                </p>
              </div>
              <div className="popup__button">
                <button
                  onClick={handleBuyButtonClick}
                  className="btn"
                  type="button"
                >
                  Купить
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ModalBuyTraining;
