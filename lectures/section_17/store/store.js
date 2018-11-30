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
        increment: (state, value) => { state.counter += value; },
        // eslint-disable-next-line no-param-reassign
        decrement: (state, value) => { state.counter -= value; },
    },
    actions: {
        increment: ({ commit }, payload) => {
            setTimeout(() => {
                commit('increment', payload.by);
            }, payload.time);
        },
        decrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by);
            }, payload.time);
        },
    },
});
