<template>

	<div  id="proyecto">


		<header id="header">

			<div id="logo" class="">
				<h1>
					<router-link :to="{name:'portfolio'}" class="scrollto">
						<div class="leftarrow"> &#8701;</div>
					</router-link>

				</h1>
			</div>


			<!-- <router-link :to="{name:'/'}">

				<img class="logobt" src="/images/MSarquitecta favicon white.svg" alt="" title="" />

			</router-link> -->

		</header><!-- #header -->
		<div>
			<div id="carousel" class="carousel slide carousel-fade" data-bs-ride="false" data-bs-pause="false" data-bs-interval="false" >




				<!-- ///////////// -->
				<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="false" data-bs-interval="false">
					<div class="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
						</button>

						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
						</button>

						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
						</button>
					</div>

					<div class="carousel-inner">
						<div class="carousel-item active">
							<div class="row hoja" :style="{backgroundImage:`url(/images/proyect-test-image.jpg)`}">

								<div class="col-md-5">
								</div>
								<div class="col-md-7">
									<div class="cover">

										<p> <strong>Disciplina: </strong> Arquitectura e Interiorismo</p>
										<p> <strong>Nombre del Proyecto: </strong> Banco de Venezuela, Sede La Castellana</p>
										<p> <strong>Tipología: </strong> oficinas</p>
										<p> <strong>Superficie: </strong>  200 m2 </p>
										<p> <strong>Estado: </strong> Construido </p>
										<p> <strong>Diseño de proyecto: </strong> 2022 </p>
										<p> <strong>Cliente: </strong> Banco de Venezuela </p>

										<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
											Launch demo modal
										</button> -->


									</div>


							</div>

						</div>



					</div>



					<div class="carousel-item">

						<div class="row hoja" :style="{backgroundImage:`url(/images/portada/MSarquitecta-cover-image-2.jpg)`}">

							<div class="col-md-5"></div>
							<div class="col-md-7">

								<div class="programa">

									<h2>Programa</h2>
									<p>
										<p>Proyecto de remodelación de sede bancaria incluye proyecto de interiorismo, hall de acceso, área de cafetín para todo público, nuevos espacios de encuentro, pantallas digitales, nuevas oficinas para Gerente de Negocios y Servicios, Gerente General y oficinas de Atención al Público.</p>
										<p>La sede de La Castellana corresponde al proyecto piloto del Banco de Venezuela para la implementación de BDV Digital, tomando como referencia la renovación previa de la marca, imagen y colores corporativos que esta nueva propuesta debía considerar.</p>
										<p>El desafío mas relevante fue el tiempo acotado de ejecución, se debió elaborar una estrategia de la adaptación de lo existente y el diseño de elementos prefabricados en madera para ser instalados en sitio.</p>
										<p>La idea consistió en una mimetización entre los elementos originales y contemporáneos, recuperando un gran espacio central con una doble altura, que conecta dos niveles en el cual se elaboró un diseño geométrico a modo de trama en madera con variantes en sus disposiciones logrando una imagen dinámica y versátil que simboliza la velocidad de los cambios en la era digital.</p>



									</p>





								</div>

							</div>

						</div>
					</div>


					<div class="carousel-item">
						<div class="row hoja" :style="{backgroundImage:`url(/images/portada/MSarquitecta-cover-image.jpg)`}">
							<div class="col-md-5"></div>

							<div class="col-md-7">

								<div class="programa">
									<p>El Hall de acceso tiene un diseño de iluminación que mejora la escala del espacio. Para afianzar la condición de amplitud se eliminó un tabique largo que ocultaba toda la planta alta y en su lugar se diseñó una fachada de vidrio zigzagueante que logró una amplitud espacial considerable.</p><p></p>
									<p>Para el hall de acceso que vincula la planta baja y primer piso se incorporaron los nuevos modelos de sucursal bancaria work/café/banco que ofrece espacios abiertos y contemporáneos para clientes y visitantes, integrándolos con lugares de encuentro, trabajo colaborativo y gestión bancaria accesible para todo público.</p>
									<p>Espacios renovados para las taquillas, atención al público, oficinas de gerencia negocios y servicios, áreas para personal operativo buscando que la atención a los clientes sea más cercana y mejor atendida.</p>
									<p>El uso de revestimientos grises y maderas claras crean la combinación perfecta entre lo original y lo contemporáneo con un edificio atemporal que no pasará de moda, con la entrega de nuevos servicios, espacios versátiles para trabajadores y clientes, mobiliario flexible y alta tecnología.</p>
								</div>

							</div>
						</div>
					</div>


				</div>

				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
			<!-- ///////////// -->





		</div>
	</div>


<!-- Modal -->
<!-- <div class="modal fade modal-fullscreen" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <div class="modal-dialog">
  	<img src="/images/about-header-image.jpg">
  </div>
</div> -->


</div>


</template>


<script>


export default{


	data() {
		return{
			proyecto:[],
			texto:"",

		}

	},
	mounted(){

		if (this.$route.params.proyect) {

			this.proyecto = this.$route.params.proyect
		}
		else{
			this.texto = '"<div class="embedded_image" data-layout="wide" contenteditable="false"><img alt="imagen 2 en imagen amplia" src="/storage/canvas/images/orDO51VCREf3Srd0QDq5UoSMve9rf5dIyiZrkvnB.jpg"><p>imagen 2 en imagen amplia</p></div><p><br></p><p><br></p><div class="embedded_image" data-layout="default" contenteditable="false"><img alt="Imagen 1  en diseño predeterminado" src="/storage/canvas/images/SmEL4W0WybEYQRfjNzMK253tTFG6ORGJXeN2423B.jpg"><p>Imagen 1  en diseño predeterminado</p></div><p class="ql-align-justify"><br></p><div class="embedded_image" data-layout="default" contenteditable="false"><img alt="imagen 3 en diseño predeterminado" src="/storage/canvas/images/TsdQzYZgWWJwGAVb75MRvvHr1bPJaVaHvWWqMzXc.jpg"><p>imagen 3 en diseño predeterminado</p></div><div class="embedded_image" data-layout="default" contenteditable="false"><img alt="Imagen 4 en diseño amplio" src="/storage/canvas/images/P7spTs77N39vJMLWv6d7fYjUUUeWzoa3JJ2GGtUR.jpg"><p>Imagen 4 en diseño amplio</p></div><p class="ql-align-justify"><br></p><p class="ql-align-justify"><strong>Disciplina: </strong>Arquitectura e Interiorismo</p><p class="ql-align-justify"><strong>Nombre del Proyecto: </strong>Banco de Venezuela, Sede La Castellana</p><p class="ql-align-justify"><strong>Tipología: </strong>oficinas</p><p class="ql-align-justify"><strong>Superficie:&nbsp;</strong>200 m2</p><p class="ql-align-justify"><strong>Estado: </strong>Construido</p><p class="ql-align-justify"><strong>Diseño de proyecto: </strong>2022</p><p class="ql-align-justify"><strong>Cliente: </strong>Banco de Venezuela</p><p class="ql-align-justify"><strong>&nbsp;</strong></p><p class="ql-align-justify"><strong>Programa</strong></p><p class="ql-align-justify">Proyecto de remodelación de sede bancaria incluye proyecto de interiorismo, hall de acceso, área de cafetín para todo público, nuevos espacios de encuentro, pantallas digitales, nuevas oficinas para Gerente de Negocios y Servicios, Gerente General y oficinas de Atención al Público.</p><p class="ql-align-justify">La sede de La Castellana corresponde al proyecto piloto del Banco de Venezuela para la implementación de BDV Digital, tomando como referencia la renovación previa de la marca, imagen y colores corporativos que esta nueva propuesta debía considerar.</p><p class="ql-align-justify">El desafío mas relevante fue el tiempo acotado de ejecución, se debió elaborar una estrategia de la adaptación de lo existente y el diseño de elementos prefabricados en madera para ser instalados en sitio.</p><p class="ql-align-justify">La idea consistió en una mimetización entre los elementos originales y contemporáneos, recuperando un gran espacio central con una doble altura, que conecta dos niveles en el cual se elaboró un diseño geométrico a modo de trama en madera con variantes en sus disposiciones logrando una imagen dinámica y versátil que simboliza la velocidad de los cambios en la era digital.</p><p class="ql-align-justify">El Hall de acceso tiene un diseño de iluminación que mejora la escala del espacio. Para afianzar la condición de amplitud se eliminó un tabique largo que ocultaba toda la planta alta y en su lugar se diseñó una fachada de vidrio zigzagueante que logró una amplitud espacial considerable.</p><p class="ql-align-justify">Para el hall de acceso que vincula la planta baja y primer piso se incorporaron los nuevos modelos de sucursal bancaria work/café/banco que ofrece espacios abiertos y contemporáneos para clientes y visitantes, integrándolos con lugares de encuentro, trabajo colaborativo y gestión bancaria accesible para todo público. </p><p class="ql-align-justify">Espacios renovados para las taquillas, atención al público, oficinas de gerencia negocios y servicios, áreas para personal operativo buscando que la atención a los clientes sea más cercana y mejor atendida.</p><p class="ql-align-justify">El uso de revestimientos grises y maderas claras crean la combinación perfecta entre lo original y lo contemporáneo con un edificio atemporal que no pasará de moda, con la entrega de nuevos servicios, espacios versátiles para trabajadores y clientes, mobiliario flexible y alta tecnología. </p><p><br></p>" '
			/*this.$router.push('/portfolio');*/
		}


		/*console.log(this.proyecto.body)DE AQUI HAY Q SACAR EL CONTENIDO DEL PROYECTO*/

		this.bodyset()
	},
	methods:{
		bodyset(){
			let body = document.querySelector('body');
			body.style.overflow = "hidden"
			body.style.margin = "0 -15px"

		},
		getDesc(){
			let res = "AAAAAA"




			console.log (res)

		}
	},
	watch:{



	},

}


</script>

<style>




</style>