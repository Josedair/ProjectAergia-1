// Function we're gonna call to create the store
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from '../reducers';

// We only want this to work in development, not production
const middleware = [];
if (process.env.NODE_ENV === 'development')
{
    // This tells it to only use it when we're in a development environment
    middleware.push(logger);
}

// createStore expects a series of reducer functions as the first argument
export default createStore(reducers, applyMiddleware(...middleware));
