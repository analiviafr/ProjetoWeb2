import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import Search from '../pages/search';
import Home from '../pages/home';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Home}/>
      <Route path="/ProjetoWeb2/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/search" component={Search}/>
      <Route component={NotFound}/>
  </BrowserRouter>
)

export default Routes;
