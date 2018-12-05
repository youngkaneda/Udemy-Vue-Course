/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
const state = {
    funds: 1000,
    stocks: [],
};

const mutations = {
    buyStock(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(el => el.stockId === stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({ id: stockId, quantity });
        }
        state.funds -= stockPrice * quantity;
    },
    sellStock(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(el => el.stockId === stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
};

const actions = {
    sellStock({ commit }, order) {
        commit('sellStock', order);
    },
};

const getters = {
    stocks: (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(el => el.id === stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price,
            };
        });
    },
};

export default {
    state,
    actions,
    getters,
    mutations,
}
