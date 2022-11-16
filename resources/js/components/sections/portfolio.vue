<template>

	<div id="portafolio" class="container">

		<div class="row row-cols-1 row-cols-md-4 g-4">

			<router-link :to="{name:'proyecto', params:{proyect: proyect }}" v-for="proyect in proyects" :key="proyect.id" id="portfolio-button" >

				<div   v-if="proyect.featured_image != null" class="col" :style="{backgroundImage:`url(${proyect.featured_image})`}" >
					<div class="card text-bg-dark"  >
						<div class="card-img-overlay">
							<h5 class="card-title"> {{ proyect.title}} </h5>
						</div>
					</div>

				</div>

				<div   v-else class="col" :style="{backgroundImage:`url(/images/MSarquitecta_Portfolio.svg)`}">
					<div class="card text-bg-dark"  >
						<div class="card-img-overlay">
							<h5 class="card-title"> {{ proyect.title}} </h5>
						</div>
					</div>

				</div>



			</router-link>

		</div>


	</div>
</template>

<script>
export default {
	name: "proyects",
	data(){
		return{
			proyects:[]
		}
	},
	mounted(){
		this.mostrarProyectos()

	},
	methods:{
		async mostrarProyectos(){

			await this.axios.get('/api/proyectos/?filter='+ this.$route.query.filter).then(response=>{
				this.proyects = response.data.proyects

			}).catch(error=>{
				console.log(error)
				this.proyects = []

			})
		},
		created() {
        	// Obtenga los datos después de crear el componente,
        	// En este punto se han observado datos
        	this.mostrarProyectos();
        }


    },
    watch: {
            // Si la ruta cambia, el método se ejecutará nuevamente
            "$route": "mostrarProyectos"
        }




    }

    </script>
