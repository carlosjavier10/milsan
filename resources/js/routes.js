const portfolio 		= ()=> import('./components/sections/Portfolio.vue');
const nosotros 			= ()=> import('./components/pages/Nosotros.vue');



export const routes = [

	{
		name:'portfolio',
		path:'/portfolio/',
		component:portfolio
	},
	{
		name:'nosotros',
		path:'/nosotros/',
		component:nosotros
	},





];