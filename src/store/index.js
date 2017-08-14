import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middlewares = [
    thunk,
];

// Logger must be the last middleware in chain
if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
        collapsed: true,
    });
    middlewares.push(logger);
}
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
export default createStore(
    reducers,
    enhancer
);


