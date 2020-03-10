import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY, CHANGE_BASE_CURRENCY, CHANGE_QUOTE_CURRENCY } from '../actions/currencies';

// const initialState = 
// {
//     baseCurrency: 'USD',
//     quoteCurrency: 'GBP',
//     amount: 100,
//     conversions: {},
// };

const initialState = {
    baseCurrency: 'USD',
    quoteCurrency: 'GBP',
    amount: 100,
    conversions: {
      USD: {
        isFetching: false,
        base: 'USD',
        date: '2017-05-31',
        rates: {
          AUD: 1.3416,
          BGN: 1.743,
          BRL: 3.2515,
          CAD: 1.3464,
          CHF: 0.97104,
          CNY: 6.813,
          CZK: 23.547,
          DKK: 6.6302,
          GBP: 0.77858,
          HKD: 7.7908,
          HRK: 6.6068,
          HUF: 273.77,
          IDR: 13308,
          ILS: 3.5431,
          INR: 64.463,
          JPY: 110.86,
          KRW: 1118.4,
          MXN: 18.765,
          MYR: 4.281,
          NOK: 8.4117,
          NZD: 1.4071,
          PHP: 49.77,
          PLN: 3.7173,
          RON: 4.0687,
          RUB: 56.774,
          SEK: 8.6942,
          SGD: 1.3829,
          THB: 34.07,
          TRY: 3.5366,
          ZAR: 13.133,
          EUR: 0.89119,
        },
      },
    },
  };

const setConversions = (state, action) =>
{
    let conversion = 
    {
        isFetching: true,
        date: '',
        rates: {},
    };

    // We want to check for the existence of a conversion already. If we already made a request in the past
    // just show the user the rates we already have cached
    if (state.conversions[action.currency])
    {
        // If the conversions already exist, we'll just copy what's already there
        conversion = state.conversions[action.currency];
    }

    return {
        ...state.conversions,
        [action.currency]: conversion,
    }
}

// State can either be an existing state in our application
// Or we can specify an initial state
const reducer = (state = initialState, action) =>
{
    // action.type is unique for each action going out
    switch (action.type)
    {
        case CHANGE_CURRENCY_AMOUNT:
            return{
                // Use destructuring syntax. This will copy all the information already
                // in state into this new object. We're creating new information, not modifying our inputs,
                // instead, we're creating outputs based off of our inputs
                ...state,
                // We want to have checks in place in case action.amount does not exist.
                amount: action.amount || 0,
            };
        case SWAP_CURRENCY:
            return {
                ...state,
                baseCurrency: state.quoteCurrency,
                quoteCurrency: state.baseCurrency,
            }
        case CHANGE_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.currency,
                conversions: setConversions(state, action),
            }
        case CHANGE_QUOTE_CURRENCY:
            return {
                ...state,
                quoteCurrency: action.currency,
                conversions: setConversions(state, action),
            }
        // Only return state without modifying it at all
        default:
            return state;
    }
};


export default reducer;