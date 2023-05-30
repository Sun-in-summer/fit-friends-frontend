import { useState } from 'react';
import { DEFAULT_PAGE, MAX_CERTIFICATES_PER_PAGE } from '../../const';
import Certificate from '../certificate/certificate';

type ModalCertificatesProps = {
  certificates: string | undefined;
  setModalOpened: (prevState: boolean) => void;
};

function ModalCertificates({ certificates, setModalOpened }: ModalCertificatesProps): JSX.Element {

  const certificatesArray = [];
  certificatesArray.push(certificates);

  const [certificatesPage, setCertificatesPage] = useState(1);

  const handleLeftArrowButtonClick = () => {
    setCertificatesPage((prevState) => prevState > 1 ? prevState - 1 : prevState);
  };

  const handleRightArrowButtonClick = () => {
    const pagesCount = certificates?.length !== undefined ? Math.ceil(certificates.length / MAX_CERTIFICATES_PER_PAGE) : DEFAULT_PAGE;
    setCertificatesPage((prevState) => prevState < pagesCount ? prevState + 1 : prevState);
  };

  return (
    <main>
      <div className="popup-form">
        <section className="popup">
          <h2 className="visually-hidden">Слайдер с сертификатами.</h2>
          <div className="popup__wrapper">
            <div className="popup-head">
              <h2 className="popup-head__header">Сертификаты</h2>
              <button
                onClick={() => setModalOpened(false)}
                className="btn-icon btn-icon--outlined btn-icon--big" type="button" aria-label="close"
              >
                <svg width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-cross"></use>
                </svg>
              </button>
            </div>
            <div className="popup__content popup__content--certificates">
              <div className="popup__slider-buttons">
                <button
                  onClick={handleLeftArrowButtonClick}
                  className="btn-icon popup__slider-btn popup__slider-btn--prev" type="button" aria-label="prev"
                >
                  <svg width="16" height="14" aria-hidden="true">
                    <use xlinkHref="#arrow-left"></use>
                  </svg>
                </button>
                <button
                  onClick={handleRightArrowButtonClick}
                  className="btn-icon popup__slider-btn popup__slider-btn--next" type="button" aria-label="next"
                >
                  <svg width="16" height="14" aria-hidden="true">
                    <use xlinkHref="#arrow-right"></use>
                  </svg>
                </button>
              </div>
              <ul className="popup__slider-list">
                {
                  (certificatesArray !== undefined && certificatesArray.length !== undefined) ? certificatesArray.slice((certificatesPage - 1) * MAX_CERTIFICATES_PER_PAGE, ((certificatesPage - 1) * MAX_CERTIFICATES_PER_PAGE) + MAX_CERTIFICATES_PER_PAGE).map((certificateItem) => (
                    <li key={certificateItem} className="popup__slide popup__slide--current">
                      <div className="popup__slide-img">
                        <Certificate />
                      </div>
                    </li>
                  )) : null
                }

              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ModalCertificates;
