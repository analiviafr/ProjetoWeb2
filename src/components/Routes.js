import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import Search from '../pages/search';
import Home from '../pages/home';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/ProjetoWeb2/login" component={Login}/>
      <Route exact path="/ProjetoWeb2/register" component={Register}/>
      <PrivateRoute path="/ProjetoWeb2/search" component={Search}  />
      <Route exact path="/ProjetoWeb2" component={Home} />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)

export default Routes;
