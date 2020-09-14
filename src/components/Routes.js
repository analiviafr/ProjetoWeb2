import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import Search from '../pages/search';
import Home from '../pages/home';

function Routes() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/search" component={Search}/>
            <Route path="/home" component={Home}/>


        </BrowserRouter>
    );
}

export default Routes;
