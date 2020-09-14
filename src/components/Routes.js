import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';
import Search from '../pages/search';

function Routes() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/" component={Home}/>
            <Route path="/search" component={Search}/>
        </BrowserRouter>
    );
}

export default Routes;
