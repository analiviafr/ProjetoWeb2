import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Login from '../pages/login';

function Routes() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route path="/login" component={Login}/>
        </BrowserRouter>
    );
}

export default Routes;
