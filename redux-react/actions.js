export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const increment = number => ({
    type: INCREMENT,
    number
});

export const decrement = number => ({
    type: DECREMENT,
    number
});

export const reset = () => ({
    type: RESET
});
