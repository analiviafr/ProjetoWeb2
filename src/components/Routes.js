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
      <Route exact path="/#login" component={Login}/>
      <Route exact path="/#register" component={Register}/>
      <PrivateRoute path="/#search" component={Search}/>
      <Route exact path="/" component={Home}/>
      <Route component={NotFound}/>
  </HashRouter>
)

export default Routes;
