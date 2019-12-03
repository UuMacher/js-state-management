import { createAction, props } from "@ngrx/store";

export const increment = createAction(
    "[Counter] Increment",
    props<{ number: number }>()
);

export const decrement = createAction(
    "[Counter] Decrement",
    props<{ number: number }>()
);

export const reset = createAction("[Counter] Reset");
