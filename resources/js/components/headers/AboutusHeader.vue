<template>

	<div id="about-header" class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark" :style="{backgroundImage:`url(/images/about-header-image.jpg)`}">
		<div class="p-lg-5 mx-auto my-5">
			<h1 class="display-4 fw-normal ">Nosotros</h1>

		</div>
		<div class="product-device shadow-sm d-none d-md-block"></div>
		<div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
	</div>

</template>

<style>

.y-5, .text-center, .container {
	padding-bottom: 0px !important;
}
#about-header {
	height: 30rem ;
	background-size: cover;
	background-position: center top;
	background-repeat: no-repeat !important;
}
.bg-dark {
	border-radius: 0 !important;
}
.m-md-3 {
	margin: 0rem !important;
}

#about-header .p-lg-5 {
	padding-top: 14rem !important;
}

.display-4 {
	color: white
}



@media only screen and (min-width: 400px) and (max-width: 767px){

	#about-header {
		height: 20rem ;
	}

	#about-header .p-lg-5 {
		padding-top: 10rem !important;

	}
}

@media only screen and (max-width: 400px){
	#about-header {
		height: 12rem ;
}
#about-header .p-lg-5 {
		padding-top: 4rem !important;
}
}
	</style>