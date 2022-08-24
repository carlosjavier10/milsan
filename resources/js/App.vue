<template>
	<main>

		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">

				<div class="menu-logo-up">

					<a class="navbar-brand" href="#"> <img class="menu-logo" src="/images/MSarquitecta favicon white.svg"> </a>
				</div>


				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
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

						<a class="navbar-brand" href="#"> <img class="menu-logo" src="/images/MSarquitecta favicon white.svg"> </a>
					</div>

					<ul class="navbar-nav ml-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<router-link  exact-activeclass="active" :to='{name:"nosotros"}' class="nav-link" aria-current="page" >Nosotros</router-link>
						</li>
						<li class="nav-item">
							<router-link  exact-activeclass="active" :to='{name:"servicios"}' class="nav-link" aria-current="page" >Servicios</router-link>
						</li>

						<li class="nav-item">
							<router-link  exact-activeclass="active" :to='{name:"blog"}' class="nav-link" aria-current="page" >Blog</router-link>
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



    <style>
    .fade-enter-active, .fade-leave-active {
    	transition: opacity .5s
    }
    /* .fade-leave-active below version 2.1.8 */
    .fade-enter, .fade-leave-to {
    	opacity: 0
    }
    </style>