const portfolio 		= ()=> import('./components/sections/Portfolio.vue');
const nosotros 			= ()=> import('./components/pages/Nosotros.vue');
const servicios 		= ()=> import('./components/pages/Servicios.vue');
const blog 				= ()=> import('./components/pages/Blog.vue');
const contacto 			= ()=> import('./components/pages/Contacto.vue');



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
	{
		name:'servicios',
		path:'/servicios/',
		component:servicios
	},
	{
		name:'blog',
		path:'/blog/',
		component:blog
	},
	{
		name:'contacto',
		path:'/contacto/',
		component:contacto
	},





];
