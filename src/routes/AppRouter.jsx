/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import routes from '../constants/routes.json';
import PrivateRoute from './PrivateRoute';
import HomePage from '../pages/HomePage';
import AboutUsPage from '../pages/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage';


export default function Routes() {

  
  return (
    <Router>
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route exact path={routes.ABOUT_US} component={AboutUsPage} />
        <Route exact path={routes.CONTACT_US} component={ContactUsPage} />
        <Route exact path={routes.ROOT}>
            <Redirect to={routes.HOME} />
        </Route>
        </Switch>
    </Router>
  );
}
