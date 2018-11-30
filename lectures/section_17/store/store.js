// eslint-disable-next-line import/no-unresolved
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
    },
    getters: {
        doubleCounter: state => state.counter * 2,
    },
    mutations: {
        // eslint-disable-next-line no-param-reassign
        increment: (state) => { state.counter += 1; },
        // eslint-disable-next-line no-param-reassign
        decrement: (state) => { state.counter -= 1; },
    },
});
