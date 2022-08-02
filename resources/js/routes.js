const portfolio = ()=> import('./components/portfolio.vue');
const nosotros = ()=> import('./components/nosotros.vue');


export const routes = [

	{
		name:'portfolio',
		path:'/portfolio',
		component:portfolio
	},
	{
		name:'nosotros',
		path:'/nosotros',
		component:nosotros
	},



];