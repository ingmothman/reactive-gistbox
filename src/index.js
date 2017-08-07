import React from 'react';
import {render} from 'react-dom';
import './helpers';
// style
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'

import App from './components/App'

import {Provider} from 'react-redux';
import store from './store/index';

import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();