import React from 'react';
import {BrowserRouter, Switch, Route, HashRouter} from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import Search from '../pages/search';
import Home from '../pages/home';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <HashRouter basename='/ProjetoWeb2' hashType='noslash'>
    <Switch>
      <Route exact path="/ProjetoWeb2/#login" component={Login}/>
      <Route exact path="/ProjetoWeb2/#register" component={Register}/>
      <PrivateRoute path="/ProjetoWeb2/#search" component={Search}/>
      <Route exact path="/" component={Home}/>
      <Route component={NotFound}/>
    </Switch>
  </HashRouter>
)

export default Routes;
