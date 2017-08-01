import React from 'react';
import {render} from 'react-dom';
import './helpers';
// style
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'

import App from './components/App'

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history'


import registerServiceWorker from './registerServiceWorker';

render(
    <BrowserRouter history={createBrowserHistory()}>
        <Switch>
            <Route exact path="/:categoryId/:itemId" component={App}/>
            <Route exact path="/:categoryId" component={App}/>
            <Route exact path="/" component={App}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();