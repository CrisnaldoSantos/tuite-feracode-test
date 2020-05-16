import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Timeline from './pages/Timeline';
import Settings from './pages/Setting';
//localStorage.getItem('tuite-token')!==null? Timeline : Login
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/" component={Timeline} />
            </Switch>
        </BrowserRouter>
    );
}