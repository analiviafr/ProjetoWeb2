import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import NotFound from './NotFound';

function Routes() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route component={NotFound}/>
        </BrowserRouter>
    );
}

export default Routes;
