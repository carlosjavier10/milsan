<template>
	<main id="nav-menu">

		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">

				<div class="menu-logo-up">
					<router-link   :to='{name:"portfolio"}' class="nav-link" aria-current="page" ><img class="menu-logo" src="/images/MSarquitecta favicon white.svg"></router-link>
				</div>


				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul v-if="showLeftMenu"  id="right-menu" class="navbar-nav me-auto mb-2 mb-lg-0 ">
						<li class="nav-item">

							<router-link  exact-activeclass="active" :to='{name:"portfolio"}' class="nav-link" aria-current="page" >Todos</router-link>

						</li>
						<li class="nav-item">
							<router-link  exact-activeclass="active" :to='{name:"portfolio", query: {filter: "residencial"}}' class="nav-link" aria-current="page" >Residencial</router-link>
						</li>

						<li class="nav-item">
							<router-link  exact-activeclass="active" :to='{name:"portfolio", query: {filter: "comercial"}}' class="nav-link" aria-current="page" >Comercial</router-link>
						</li>

						<li class="nav-item">
							<router-link  exact-activeclass="active" :to='{name:"portfolio", query: {filter: "corporativo"}}' class="nav-link" aria-current="page" >Corporativo</router-link>
						</li>

						<li class="nav-item">
							<router-link  exact-activeclass="active" :to='{name:"portfolio", query: {filter: "industrial"}}' class="nav-link" aria-current="page" >Industrial</router-link>

						</li>

					</ul>

					<div class="menu-logo-center">

						<router-link   :to='{name:"portfolio"}' class="nav-link" aria-current="page" ><img class="menu-logo" src="/images/MSarquitecta favicon white.svg"></router-link>


					</div>

					<ul id="left-menu" class="navbar-nav ml-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<router-link  exact-activeclass="active" :to='{name:"nosotros"}' class="nav-link" aria-current="page" >Nosotros</router-link>
						</li>
						<li class="nav-item">
							<router-link  exact-activeclass="active" :to='{name:"servicios"}' class="nav-link" aria-current="page" >Servicios</router-link>
						</li>

						<li class="nav-item">
							<router-link  exact-activeclass="active" :to='{name:"portfolio"}' class="nav-link" aria-current="page" >Proyectos</router-link>
						</li>

						<li class="nav-item">
							<router-link  exact-activeclass="active" :to='{name:"contacto"}' class="nav-link" aria-current="page" >Contacto</router-link>
						</li>

					</ul>

				</div>
			</div>
		</nav>


		<router-view> </router-view>




	</main>

</template>

<script>
export default {

	data(){
		return{
			showLeftMenu:true
		}
	},
	mounted(){
		this.checkRoute()
	},
	methods:{
		checkRoute(){

			if (this.$route.path === "/portfolio") {
				this.showLeftMenu = true
			} else {
				this.showLeftMenu = false
			}

			console.log(this.$route.path)
			console.log(this.showLeftMenu)

		},


	},
	watch: {
            // Si la ruta cambia, el método se ejecutará nuevamente
            "$route": "checkRoute"
        }

    }




    </script>



    <style>
    .fade-enter-active, .fade-leave-active {
    	transition: opacity .5s
    }
    /* .fade-leave-active below version 2.1.8 */
    .fade-enter, .fade-leave-to {
    	opacity: 0
    }
    </style>