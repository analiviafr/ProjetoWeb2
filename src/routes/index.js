import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';

function Routes() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </BrowserRouter>
    );
}

export default Routes;
