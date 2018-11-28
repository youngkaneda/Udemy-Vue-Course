// eslint-disable-next-line import/no-unresolved
import Vue from 'vue';
import App from './App.vue';
import store from '../store/store';

// eslint-disable-next-line no-unused-vars
const app = new Vue({
    el: '#app',
    store,
    render: h => h(App),
});
