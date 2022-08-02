import Vue from 'vue';

require('./bootstrap');


// Require Vue
window.Vue = require('vue').default;

Vue.component('test', require('./components/test.vue').default);


import App from './App.vue';

/*axios import*/
import VueAxios from 'vue-axios';
import Axios from 'axios';

/*vue routers import*/
import VueRouter from 'vue-router';
import { routes } from './routes';

import vue from 'vue';

Vue.use(VueRouter);
Vue.use(VueAxios,Axios);

const router = new VueRouter({
	mode:'history',
	routes:routes

})

// Initialize Vue
const app = new Vue({
el: '#app',
router:router,
render: h=> h(App)
});