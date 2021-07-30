/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import routes from '../constants/routes.json';
import PrivateRoute from './PrivateRoute';
import HomePage from '../pages/home/HomePage';
import AboutUsPage from '../pages/about-us/AboutUsPage';
import ContactUsPage from '../pages/contact-us/ContactUsPage';
import FleetPage from '../pages/fleet/FleetPage';


export default function Routes() {

  
  return (
    <Router>
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route exact path={routes.ABOUT_US} component={AboutUsPage} />
        <Route exact path={routes.FLEET} component={FleetPage} />
        <Route exact path={routes.CONTACT_US} component={ContactUsPage} />
        <Route exact path={routes.ROOT}>
            <Redirect to={routes.HOME} />
        </Route>
        </Switch>
    </Router>
  );
}
