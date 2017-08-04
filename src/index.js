import React from 'react';
import {render} from 'react-dom';
import './helpers';
// style
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'

import App from './components/App'

import registerServiceWorker from './registerServiceWorker';

render(
    <App/>
    , document.getElementById('root'));
registerServiceWorker();