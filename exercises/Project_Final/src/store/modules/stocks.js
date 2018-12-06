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
        state.stocks.forEach((element) => {
            element.price = Math.round(element.price * (1 + Math.random() - 0.5));
        });
    },
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit('portfolio/buyStock', order, { root: true });
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
