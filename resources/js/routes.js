const portfolio 		= ()=> import('./components/pages/Portafolio.vue');
const nosotros 			= ()=> import('./components/pages/Nosotros.vue');
const servicios 		= ()=> import('./components/pages/Servicios.vue');
const blog 				= ()=> import('./components/pages/Blog.vue');
const contacto 			= ()=> import('./components/pages/Contacto.vue');
const proyecto 			= ()=> import('./components/pages/Proyecto.vue');



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
{
	name:'proyecto',
	path:'/proyecto/',
	component:proyecto,
	props: true
},





];
