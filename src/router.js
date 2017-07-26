import React from 'react';
import App from './components/App'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="profile/:username" component={Profile} />
            <IndexRoute component={Home} />
        </Route>
    </Router>
);