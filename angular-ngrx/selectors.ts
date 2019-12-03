import { createSelector } from "@ngrx/store";
import { isPrime } from "./prime";

export const getCount = state => {
    return state.reducer.counter;
};

export const getDoubleCount = createSelector(
    getCount,
    count => {
        return count * 2;
    }
);

export const getIsPrime = createSelector(
    getCount,
    count => {
        return isPrime(count);
    }
);
