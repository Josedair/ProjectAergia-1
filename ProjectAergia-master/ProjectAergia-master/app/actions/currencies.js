// This variable is set to the string. This will make it easier to refactor things
// If it is undefined, then we know we spelled something incorrectly
// It's easier to find where the errors comes from this way
export const SWAP_CURRENCY = 'SWAP_CURRENCY';

// This will be a function that we want to return an object from
// Every action will return an object with a type property on it
export const swapCurrency = () => 
(
    {
        // This is a variable
        type: SWAP_CURRENCY,
    }
)