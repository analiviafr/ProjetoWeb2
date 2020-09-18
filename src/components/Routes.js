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
      <Route path="/ProjetoWeb2/login" exact component={Login}/>
      <Route path="/ProjetoWeb2/register" exact component={Register}/>
      <Route path="/ProjetoWeb2/search" exact component={Search}/>
      <Route component={NotFound}/>
  </BrowserRouter>
)

export default Routes;
