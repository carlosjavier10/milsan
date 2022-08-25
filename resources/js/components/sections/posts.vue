<template>

	<div id="portafolio" class="container">

			<div class="row row-cols-1 row-cols-md-4 g-4">

				<router-link :to="post.id" v-for="post in posts" :key="post.id" >
					<div  class="col" :style="{backgroundImage:`url(${post.featured_image})`}" >
						<div class="card text-bg-dark"  >
							<div class="card-img-overlay">
								<h5 class="card-title">  </h5>
							</div>
						</div>

					</div>
				</router-link>

			</div>


	</div>
</template>

<script>
export default {
	name: "posts",
	data(){
		return{
			posts:[]
		}
	},
	mounted(){
		this.mostrarPosts()
	},
	methods:{
		async mostrarPosts(){

			await this.axios.get('/api/posts/?filter='+ this.$route.query.filter).then(response=>{
				this.posts = response.data.posts
				}).catch(error=>{
				console.log(error)
				this.posts = []
			})
		},
		created() {
        	// Obtenga los datos después de crear el componente,
        	// En este punto se han observado datos
        	this.mostrarPosts();
        }


    },
    watch: {
            // Si la ruta cambia, el método se ejecutará nuevamente
            "$route": "mostrarPosts"
        }




    }

</script>
