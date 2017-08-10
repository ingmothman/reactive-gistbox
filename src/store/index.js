import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const enhancer = applyMiddleware(
    // logger,
    thunk,
);

const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default createStore(
    reducers,
    reduxDevToolsExtension,
    enhancer
);