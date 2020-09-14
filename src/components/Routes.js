import React from 'react';
import {Route, Switch, Router} from 'react-router';

import Login from '../pages/login';
import Register from '../pages/register';
import Search from '../pages/search';
import Home from '../pages/home';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

import {history} from '../history';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={Login} exact path="/login"/>
      <Route component={Register} exact path="/register"/>
      <PrivateRoute component={Search} exact path="/search" />
      <Route component={Home} exact path="/"/>
      <Route component={NotFound}/>
    </Switch>

  </Router>
)

export default Routes;
