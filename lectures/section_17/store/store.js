// eslint-disable-next-line import/no-unresolved
import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        value: 0,
    },
    getters: {
        value: state => state.value,
    },
    mutations: {
        updateValue: (state, payload) => {
            // eslint-disable-next-line no-param-reassign
            state.value = payload;
        },
    },
    actions: {
        updateValue: ({ commit }, payload) => {
            commit('updateValue', payload);
        },
    },
    modules: {
        counter: {
            namespaced: true,
            ...counter,
        },
    },
});
