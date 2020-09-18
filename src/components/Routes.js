import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register/index';
import Search from '../pages/search';
import Home from '../pages/home';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/ProjetoWeb2/login" component={Login}/>
      <Route exact path="/ProjetoWeb2/register" component={Register}/>
      <PrivateRoute path="/ProjetoWeb2/search" component={Search}/>
      <Route exact path="/" exact component={Home}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)

export default Routes;
