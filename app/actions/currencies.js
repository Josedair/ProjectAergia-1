// This variable is set to the string. This will make it easier to refactor things
// If it is undefined, then we know we spelled something incorrectly
// It's easier to find where the errors comes from this way
export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
export const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';

// This will be a function that we want to return an object from
// Every action will return an object with a type property on it
export const swapCurrency = () => 
(
    {
        // This is a variable
        type: SWAP_CURRENCY,
    }
);

export const changeCurrencyAmount = amount =>
(
    {
        type: CHANGE_CURRENCY_AMOUNT,
        // parseFloat allows us make sure that we're getting the exact amount in
        amount: parseFloat(amount),
    }
);

// We want to know what the new currency is that will be the new base currency
export const changeBaseCurrency = currency =>
(
    {
        type: CHANGE_BASE_CURRENCY,
        // We want to pass the currency on to the reducer so it knows which currency should actually be the base
        // currency now. We pass it as part of the payload like this:
        currency,
    }
);

export const changeQuoteCurrency = currency =>
(
    {
        type: CHANGE_QUOTE_CURRENCY,
        // We want to pass the currency on to the reducer so it knows which currency should actually be the base
        // currency now. We pass it as part of the payload like this:
        currency,
    }
);