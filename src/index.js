import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Provider } from 'react-redux';

import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import GoToTopButton from 'components/base/GoToTopButton';
import routes from './routes';
import { store } from 'store';

import 'styles/app.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>
);
