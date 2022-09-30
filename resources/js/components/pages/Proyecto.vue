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
			<div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">




				<!-- ///////////// -->
				<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
					<div class="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<div class="hoja" style="background-image: url('/images/portada/MSarquitecta cover image 1.jpg')"></div>
						</div>
						<div class="carousel-item">
							<img src="/images/portada/MSarquitecta cover image 2.jpg" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img src="/images/portada/MSarquitecta cover image 3.jpg" class="d-block w-100" alt="...">
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





	</div>


</template>


<script>


export default{


	data() {
		return{
			proyecto:[],

		}

	},
	mounted(){
		this.proyecto = this.$route.params.proyect
		console.log(this.proyecto.body)

		this.bodyset()
	},
	methods:{
		bodyset(){
			let body = document.querySelector('body');
			body.style.overflow = "hidden"
		}
	},
	watch:{



	},

}


</script>

<style>
/*WAWAAAWAWAWWAWA*/
body{
	margin: 0;

	top: 0;
}





.logobt{
	display: block;
	margin: auto;
	z-index: 10100;
	width: 4em;
}

.logobt:hover{
	filter: invert(100%);
	transition: 0.5s;
}





#proyecto #header {
	padding: 30px 0;
	height: 92px;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	transition: all 0.5s;
	z-index: 997;
}

#proyecto #header .header-scrolled {
	background: rgba(0, 0, 0, 0.9);
	padding: 20px 0;
	height: 77px;
	transition: all 0.5s;
}

#proyecto #header #logo {
	/* position: absolute;*/
	z-index: 9 !important;
}





#proyecto #header #logo h1 a,
#proyecto #header #logo h1 a:hover {
	color: #fff;
	padding-left: 10px;
	border-left: 4px solid #2c2c2c;
}

#proyecto #header #logo img {
	padding: 0;
	margin: 0;
}

#proyecto #logo {
	text-align: center !important;
}

#proyecto .leftarrow{
	display: inline-block;
	font-size: 3rem ;

}




@media only screen and (min-height: 800px) and (max-width: 1080px){



}

@media only screen and (min-height: 600px) and (max-width: 799px){


}

@media (max-height: 599px){




}



@media (min-width: 1200px) {   /*desktop*/
	.wh-img {
		width: 100% !important;
	}

	.logobt{
		top: 30%;
	}


}

@media (max-width: 1199px) {   /*desktop*/
	.logobt{
		top: 22%;
	}

}



@media (max-width: 768px) { /*tablets*/


	#header #logo h1 {
		font-size: 28px;
	}
}



</style>