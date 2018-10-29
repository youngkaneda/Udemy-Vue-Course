import Vue from 'vue'
import Home from './Home.vue'
// import App from './App.vue'

// Global, can call this template in other .vue files
// Vue.component('server-conditions', Home);

new Vue({
  el: '#app',
  render: h => h(Home)
})
