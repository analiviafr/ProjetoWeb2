import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import Search from '../pages/search';
import Home from '../pages/home';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

function Routes() {
  return(
    <div>
      <BrowserRouter basename=process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <PrivateRoute path="/search" component={Search}  />
          <Route exact path="/" component={Home} />
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
/src/components/Routes.js
  Line 12:25:  Parsing error: Unexpected token

  10 |
  11 | const Routes = () => (
> 12 |   <BrowserRouter process.env.PUBLIC_URL}>
     |                         ^
  13 |     <Switch>
  14 |       <Route exact path="/login" component={Login}/>
  15 |       <Route exact path="/register" component={Register}/>
