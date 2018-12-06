import Vue from 'vue';

// eslint-disable-next-line import/prefer-default-export
export const loadData = ({ commit }) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then((data) => {
            if (data) {
                const portfolio = {
                    stocks: data.portfolio,
                    funds: data.funds,
                };
                commit('portfolio/set', portfolio);
                commit('stocks/set', data.stocks);
            }
        });
};
