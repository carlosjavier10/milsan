<template>


	<div id="footer">
		<div class="footer-top">
			<div class="container">
				<div class="row">

					<div class="col-lg-3 col-md-6 footer-info">

						<router-link :to="{name:'portfolio'}">
							<img class="footer-logo" src="/images/MSarquitecta favicon white.svg">
						</router-link>




						<p>Somos un grupo de personas con valores y principios que unen sus fuerzas en común, para consolidarse como un equipo de trabajo productivo en todos los sentidos, que no deja de superarse cada día para llevar el éxito de nuestra empresa a otro nivel.</p>
					</div>

					<div class="col-lg-3 col-md-6 footer-links">
						<h4>Servicios</h4>
						<ul>
							<li><i class="ion-ios-arrow-right"></i>

								<router-link :to="{name:'servicios'}" >
									Dise&ntilde;o
								</router-link>



							</li>
							<li><i class="ion-ios-arrow-right"></i>

								<router-link :to="{name:'servicios'}" >
									Construcci&oacute;n
								</router-link>

							</li>
							<li><i class="ion-ios-arrow-right"></i>


								<router-link :to="{name:'servicios'}" >
									Remodelaci&oacute;n
								</router-link>


							</li>
							<li><i class="ion-ios-arrow-right"></i>

								<a href="#">Terminos de uso</a>

							</li>
							<li><i class="ion-ios-arrow-right"></i>

								<a href="#">Politicas de Privacidad</a>

							</li>
						</ul>
					</div>

					<div class="col-lg-3 col-md-6 footer-contact">
						<h4> Contacto</h4>
						<p>
							Carrera 25 entre Av. Morán y, Av. Concordia,<br>
							Barquisimeto.<br>
							Venezuela<br>
							<strong>Phone:</strong>+58 0424-5308763<br>
							<strong><a href="contacto"> Email: </a></strong> info@msarquictecta.com<br>
						</p>

						<div class="social-links">
							<a href="https://twitter.com/msarquitecto" class="twitter"><i class="fa fa-twitter"></i></a>
							<a href="https://www.facebook.com/ms.arquitecta" class="facebook"><i class="fa fa-facebook"></i></a>
							<a href="https://www.instagram.com/ms.arquitecta/" class="instagram"><i class="fa fa-instagram"></i></a>
							<a href="https://www.tiktok.com/@ms.arquitecta" class="tiktok"><i class="fa fa-tiktok"><img src="/images/tik-tok.png" alt="" width="20em">  </i></a>

						</div>

					</div>

					<!-- <div class="col-lg-3 col-md-6 footer-newsletter"> AQUI VA EST -->


						<div class="col-lg-3 col-md-6 footer-newsletter">
							<h4>&uacute;ltimos Proyectos</h4>

							<div class="row row-cols-1 row-cols-md-2 g-4">




								<router-link :to="{name:'proyecto', params:{proyect: fooproyect }}" v-for="fooproyect in fooproyectos" :key="fooproyect.id" id="portfolio-button" >
									<div class="col">
										<div class="card h-100">

											<img  v-if="fooproyect.featured_image" :src="fooproyect.featured_image" class="card-img-top" :alt="fooproyect.image_caption" :title="fooproyect.title">

											<img  v-else src="/images/MSarquitecta favicon black.svg" class="card-img-top" :alt="fooproyect.image_caption" :title="fooproyect.title">


											<!-- <img src="  images/no-image-post.jpg " class="card-img-top" alt="" title=" $proyect->title "> -->

										</div>
									</div>
								</router-link>

							</div>
						</div>



						<!-- <div class="col-lg-3 col-md-6 footer-newsletter"> AQUI VA EST -->


						</div>
					</div>
				</div>

				<div class="container">
					<div class="copyright">
						&copy; Copyright <strong>MSArquitecta</strong>. All Rights Reserved
					</div>
					<div class="credits">

						Designed by <a href="https://marketingsupernova.com/">Marketing Supernova</a>
					</div>
				</div>
				<!--  -->
				<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
				<!-- Uncomment below i you want to use a preloader -->
				<!-- <div id="preloader"></div> -->

			</div><!-- #footer -->



		</template>

		<script>


		export default{


			data() {
				return{
					fooproyectos:[],

				}

			},
			mounted(){
				this.mostrarProyectosFooter()

			},
			methods:{
				async mostrarProyectosFooter(){

					await this.axios.get('/api/proyectos/?filter=forfooter').then(response=>{
						this.fooproyectos = response.data.proyects
						console.log(this.fooproyectos)

					}).catch(error=>{
						console.log(error)
						this.fooproyectos = []
					})
				},

			},
			watch:{



			},

		}


		</script>