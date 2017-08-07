import React from 'react';
import {render} from 'react-dom';
import './helpers';
// style
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'

import App from './components/App'

import {Provider} from 'react-redux';
import store from './store/index';
import {AppContainer} from 'react-hot-loader';

import registerServiceWorker from './registerServiceWorker';

render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>
    , document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default; // eslint-disable-line global-require
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}