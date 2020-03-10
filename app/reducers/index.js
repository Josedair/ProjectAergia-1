import { combineReducers } from 'redux';

import currencies from './currencies';
import theme from './theme';

// It's a function. The first parameter will be all the reducers we
// want to pass to it. 
export default combineReducers
(
    {
        currencies,
        theme,
    }
);