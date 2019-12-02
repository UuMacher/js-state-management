import Vuex from 'vuex';

import { isPrime } from './prime';

export default new Vuex.Store({
    state: {
        count: 0 
    },
    mutations: {
        increment(state, number) {
            state.count = state.count + number;
        },
        decrement(state, number) {
            state.count = state.count - number;
        },
        reset(state) {
            state.count = 0;
        }
    },
    getters: {
        isPrime: state => {
            return isPrime(state.count);
        }
    }
});
