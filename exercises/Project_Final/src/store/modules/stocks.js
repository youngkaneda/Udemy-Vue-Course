/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import stocks from '../../data/data';

const state = {
    stocks: [],
};

const mutations = {
    set(state, payload) {
        state.stocks = payload;
    },
    random(state) {
    },
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit();
    },
    initStock: ({ commit }) => {
        commit('set', stocks);
    },
    randomizeStock: ({ commit }) => {
        commit('random');
    },
};

const getters = {
    stocks: state => state.stocks,
};

export default {
    state,
    actions,
    getters,
    mutations,
};
