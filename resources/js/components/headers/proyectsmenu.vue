<template>

		<div id="nav-menu proyectsmenu">
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<div class="container-fluid">


						<ul id="right-menu" class="navbar-nav me-auto mb-2 mb-lg-0 ">
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

				</div>
			</nav>
		</div>


	</template>