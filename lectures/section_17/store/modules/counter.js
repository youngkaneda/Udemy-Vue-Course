/* eslint-disable no-shadow */
const state = {
    counter: 0,
};

const getters = {
    doubleCounter: state => state.counter * 2,
};

const mutations = {
    // eslint-disable-next-line no-param-reassign
    increment: (state, value) => { state.counter += value; },
    // eslint-disable-next-line no-param-reassign
    decrement: (state, value) => { state.counter -= value; },
};

const actions = {
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
};

export default {
    state,
    getters,
    mutations,
    actions,
};
