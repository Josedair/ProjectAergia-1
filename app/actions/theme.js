export const CHANGE_PRIMARY_COLOR = 'CHANGE_PRIMARY_COLOR';

export const changePrimaryColor = color => 
(
    {
        type: CHANGE_PRIMARY_COLOR,
        // The actual color we want to change it to
        color,
    }
);