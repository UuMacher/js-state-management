import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { increment, decrement, reset } from "./actions";
import { getCount, getDoubleCount, getIsPrime } from "./selectors";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    counter$: Observable<number>;
    doubleCounter$: Observable<number>;
    isPrime$: Observable<boolean>;

    constructor(private store: Store<{ count: number }>) {
        this.counter$ = store.pipe(select(getCount));
        this.doubleCounter$ = store.pipe(select(getDoubleCount));
        this.isPrime$ = store.pipe(select(getIsPrime));
    }

    onIncrement() {
        this.store.dispatch(increment({ number: 1 }));
    }

    onDecrement() {
        this.store.dispatch(decrement({ number: 1 }));
    }

    onReset() {
        this.store.dispatch(reset());
    }
}
