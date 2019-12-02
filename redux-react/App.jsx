import React from 'react';
import Button from './Button';
import Output from './Output';
import { increment, decrement, reset } from './actions';
import { isPrime } from './selectors';

import { connect } from 'react-redux';

const App = ({ value, isPrime, decrement, increment, reset }) => {
    return (
        <main>
            <Output label="Counter" value={value} />
            <Output label="Counter * 2" value={value * 2} />
            <Output label="Is prime number?" value={String(isPrime)} />
            <Button onClick={increment}>Increment (+)</Button>
            <Button onClick={decrement}>Decrement (+)</Button>
            <Button onClick={reset}>Reset</Button>
        </main>
    );
};

const mapStateToProps = state => ({
    value: state.counter,
    isPrime: isPrime(state.counter)
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment(1)),
    decrement: () => dispatch(decrement(1)),
    reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
