import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Contact from './components/contact/Contact';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/contact' component={Contact} />
    </Switch>
)