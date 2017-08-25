import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middlewares = [
  thunk,
];

let composeEnhancers = compose;
if (process.env.NODE_ENV !== 'production') {
  // Logger must be the last middleware in chain
  middlewares.push(createLogger({ collapsed: true }));

  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares));
export default createStore(
  reducers,
  enhancer,
);
