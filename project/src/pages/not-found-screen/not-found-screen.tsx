import Header from '../../components/header/header';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';


function NotFoundScreen(): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>FitFriends. Страница не найдена</title>
      </Helmet>
      <Header />
      <section className="not-found__no-page">
        <div className="not found__status-wrapper tabs__content">
          <img className ="not-found__picture" src='img/not-found.jpg' alt="error 404"/>
          <h1 className="not-found__status">Page not found</h1>
          <Link to={AppRoute.Root} className="not-found__status-description">Return to the homepage</Link>
        </div>
      </section>
    </div>
  );
}

export default NotFoundScreen;
