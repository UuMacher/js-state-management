import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./actions";

export const initialState = {
    counter: 0
};

const _reducer = createReducer(
    initialState,
    on(increment, (state, payload) => ({
        ...state,
        counter: state.counter + payload.number
    })),
    on(decrement, (state, payload) => ({
        ...state,
        counter: state.counter - payload.number
    })),
    on(reset, state => ({ ...state, counter: 0 }))
);

export function reducer(state, action) {
    return _reducer(state, action);
}
