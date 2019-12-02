import './style.css';

import Vue from 'vue';
import Vuex, { mapGetters } from 'vuex';

Vue.use(Vuex);

import { Output } from './Output';
import store from './store';

const app = new Vue({
    el: '#app',
    store,
    components: { Output },
    computed: {
        ...mapGetters(['isPrime']),
        count() {
            return store.state.count;
        },
        doubled() {
            return store.state.count * 2;
        }
    },
    methods: {
        onIncrement() {
            this.$store.commit('increment', 1);
        },
        onDecrement() {
            this.$store.commit('decrement', 1);
        },
        onReset() {
            this.$store.commit('reset');
        }
    },
    template: `
    <div>
      <Output label="Counter" :value="count"></Output>
      <Output label="Counter * 2" :value="doubled"></Output>
      <Output label="Is prime number?" :value="isPrime"></Output>
      <Button @click="onIncrement">Increment (+)</Button>
      <Button @click="onDecrement">Decrement (-)</Button>
      <Button @click="onReset">Reset</Button>
    </div>
  `
});
