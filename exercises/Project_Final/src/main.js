import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import routes from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-11266.firebaseio.com/';

Vue.filter('currency', value => `$${value.toLocaleString()}`);

const router = new VueRouter({
    mode: 'history',
    routes,
});

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
