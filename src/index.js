import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import routes from './routes';

import 'styles/app.scss';
import GoToTopButton from 'components/base/GoToTopButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
      {routes.map((route, index) =>
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          children={route.element}
        />
      )}
      </Switch>
      <GoToTopButton />
      <Footer />
    </Router>
  </React.StrictMode>
);
