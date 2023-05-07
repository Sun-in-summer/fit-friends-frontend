import { Link } from 'react-router-dom';

function Logo():JSX.Element {
  return (
    <Link className="header__logo" to='/' aria-label="Переход на главную">
      <svg width="187" height="70" aria-hidden="true">
        <use xlinkHref="/sprites.svg#logo"></use>
      </svg>
    </Link>
  );
}

export default Logo;
