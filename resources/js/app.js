import Vue from 'vue';

require('./bootstrap');


// Require Vue
window.Vue = require('vue').default;

/*Componentes de pagina "Nosotros*/
Vue.component('aboutusheader',    	require('./components/headers/AboutusHeader.vue').default);
Vue.component('ourhistory',    		require('./components/sections/ourhistory.vue').default);
Vue.component('nosotros',    		require('./components/sections/nosotros.vue').default);
Vue.component('liderazgo',    		require('./components/sections/liderazgo.vue').default);
Vue.component('team',    			require('./components/sections/team.vue').default);

/*Componentes de pagina "Sercvicios" */
Vue.component('servicesHeader',    	require('./components/headers/servicesHeader.vue').default);
Vue.component('disenos',    			require('./components/sections/disenos.vue').default);
Vue.component('construccion',    			require('./components/sections/construccion.vue').default);
Vue.component('milsanword',    			require('./components/sections/milsanword.vue').default);

/*Componentes de pagina "Sercvicios" */

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