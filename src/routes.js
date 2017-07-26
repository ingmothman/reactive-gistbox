import React from 'react';
import App from './components/App'
import {Router, Route} from 'react-router';
import {createHashHistory} from 'history'
const history = createHashHistory()

export default (
    <Router history={history}>
        <Route path="/:categoryId/:itemId" component={App}>
            <Route path="/:categoryId" component={App}>
                <Route exact path="/" component={App}/>
            </Route>
        </Route>

    </Router>
);