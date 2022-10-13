<template>

	<div  id="proyecto">


		<header id="header">

			<div id="logo" class="">
				<h1>

					<router-link :to="{name:'portfolio'}" class="scrollto" alt="Volver">
						<div class="leftarrow" alt="Volver"> &#8701;</div>
					</router-link>


				</h1>

				<div class="botones">

					<a @click="setSlisder('Before')" v-if="imgsBefore.length > 0"><h6>Antes</h6></a>
					<a @click="setSlisder('After')" v-if="imgsAfter.length>0"><h6>Despues</h6></a>
					<a @click="setSlisder('Process')" v-if="imgsProcess.length>0"><h6>Proceso</h6></a>
					<a @click="setSlisder('Render')" v-if="imgsRender.length>0"><h6>Render</h6></a>
				</div>





			</div>


			<!-- <router-link :to="{name:'/'}">

				<img class="logobt" src="/images/MSarquitecta favicon white.svg" alt="" title="" />

			</router-link> -->

		</header><!-- #header -->
		<div>
			<div id="carousel" class="carousel slide carousel-fade" data-bs-ride="false" data-bs-pause="false" data-bs-interval="false" >




				<!-- ///////////// -->
				<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="false" data-bs-interval="false" >

					<div class="carousel-indicators">

						<button v-for="(slide, index) in slider" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" class=""

						v-bind:class="[index==0 ? activeClass : '',  ]"


						aria-current="true" :aria-label="'Slide '+ (index + 1)">
					</button>


				</div>

				<div class="carousel-inner">

					<div
					v-for="hoja in slider"
					:class="'carousel-item '+ hoja.classActive"

					>

					<div class="row hoja"
					:style="{backgroundImage:`url(${hoja.img.url})`}">

					<div class="col-md-5">
					</div>
					<div class="col-md-7">
						<div :class="hoja.classcontent">

							<div v-if="hoja.index==1">
								<h2>Programa</h2>
							</div>

							<div v-html="hoja.content"></div>

						</div>


					</div>

				</div>



			</div>





		</div>

		<button class="carousel-control-prev btn-lg" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
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
/*import { proyectbodytext } from './devutil'*/

export default{


	data() {
		return{
			proyecto:[],
			texto:"",
			disciplina: "",
			nombreProyecto: "",
			tipología:"",
			superficie:"",
			estado: "",
			disenoProyecto:"",
			cliente:"",
			programa:[],   /*arreglo de parrafos*/
			activeClass: 'active',
			carouselitem: 'carousel-item',
			slider:[],

			imgs:[],
			imgsAfter:[],
			imgsBefore:[],
			imgsProcess:[],
			imgsRender:[],

			auxTexto:"",

			activeTag:"",


		}

	},
	computed: {

	},
	mounted(){

		if (this.$route.params.proyect) {

			this.proyecto = this.$route.params.proyect
			this.texto = this.proyecto.body

			console.log(this.proyecto)
		}
		else{
			if (localStorage.slug) {

				let proy={
					slug:"",
					body:"",
					created_at:"",
					featured_image:"",
					id:"",
					published_at:"",
					summary:"",
					title:"",
					updated_at:""
				}

				proy.slug=localStorage.slug
				proy.body=localStorage.body
				proy.created_at=localStorage.created_at
				proy.featured_image=localStorage.featured_image
				proy.id=localStorage.id
				proy.published_at=localStorage.published_at
				proy.summary=localStorage.summary
				proy.title=localStorage.title
				proy.updated_at=localStorage.updated_at

				this.proyecto = proy

				this.texto = this.proyecto.body

			}
			else{

				this.$router.push('/portfolio');
			}

		}


		this.bodyset()
		this.getImg()
	},
	methods:{
		bodyset(){
			let body = document.querySelector('body');
			body.style.overflow = "hidden"
			body.style.margin = "0 -15px"

		},

		renderSlider(){
			console.log("IMGS; ")
			console.log(this.imgs)


			this.texto = this.auxtext
			this.programa=[]
			this.getTitles()
			this.getPrograma()



			this.slider=[]
			if (this.imgs.length > 0) {



				for (var i = 0; i < this.imgs.length; i++) {

					var slide ={	index: 0,
						img:"",
						content:"",
						classActive:"",
						classcontent:""
					}

					slide.index= i
					slide.img = this.imgs[i]

					if (i==0) {
						slide.content ='<p> <strong>Disciplina: </strong> '+ this.disciplina +' </p><p> <strong>Nombre del Proyecto: </strong>'+ this.nombreProyecto +' </p><p> <strong>Tipología: </strong> '+this.tipología+'</p><p> <strong>Superficie: </strong>'+ this.superficie +' </p><p> <strong>Estado: </strong>'+ this.estado+' </p><p> <strong>Diseño de proyecto: </strong>'+ this.disenoProyecto+' </p><p> <strong>Cliente: </strong>'+ this.cliente +'  </p>'
						slide.classActive = "active"
						slide.classcontent = "cover"
					}else{


						let aux=""
						let j = 0
						let contador = 0
						let max = 1000
						if (this.programa.length > 0) {
							aux="<p>"+this.programa[j]+"</p>"
							contador = aux.length
							this.programa.shift()


							if (this.programa[j]) {

								let continuar = true
								while(continuar){

									if (aux.length+this.programa[j].length < max) {

										aux = aux + "<p>"+this.programa[j]+"</p>"
										this.programa.shift()

										if (this.programa[j])
											{continuar=true}
										else
											{continuar=false}
									}else{

										continuar = false
									}
								}
								slide.content = aux;
							}
							else{
								slide.content = aux
							}



						}
						else{}

							slide.classActive = false
						slide.classcontent ="programa"

					}

					this.slider.push(slide)
				}

			}
			else /*NO HAY SLIDERS*/
			{
				this.slider = null
			}
			console.log("SLIDER; ")
			console.log(this.slider)

		},
		getImg(){

			let res = ""
			let ini = 0
			let fin = 0
			let url =""
			let tag =""

			this.texto.trim()

			if(this.proyecto.featured_image){
				let img ={
					url:"",
					tag:""
				}

				img.url=this.proyecto.featured_image
				img.tag="Despues"

				this.imgsAfter.unshift(img)

			}


			while ( this.texto.indexOf('<img ')!= -1 ){

				let img ={
					url:"",
					tag:""
				}


				ini = this.texto.indexOf('<img ')
				fin = this.texto.indexOf('>', ini)
				res = this.texto.substring(ini,fin+1)
				this.texto = this.texto.replace(res,'')

				ini=res.indexOf('alt=')
				fin=res.indexOf('src=',ini+5)
				tag =res.substring(ini+5,fin-2)

				ini=res.indexOf('src=')
				fin=res.indexOf('">',ini+5)
				url =res.substring(ini+5,fin)

				img.url = url
				img.tag=tag

				if (img.tag.indexOf('Before')!= -1 ) {

					this.imgsBefore.push(img)

				}
				else if(img.tag.indexOf('Render')!= -1 ){
					this.imgsRender.push(img)
				}
				else if(img.tag.indexOf('Process')!= -1 ){
					this.imgsProcess.push(img)
				}
				else{
					this.imgsAfter.push(img)
				}

			}
			this.auxtext = this.texto  /*para retomar el body despues de quitarle las imagenes*/

			if (this.imgsAfter.length !=0) {
				this.imgs= this.imgsAfter
				this.activeTag="After"
			}
			else if(this.imgsRender!=0){
				this.imgs= this.imgsRender
				this.activeTag="Render"
			}
			else if(this.imgsProcess!=0){
				this.imgs= this.imgsProcess
				this.activeTag="Process"
			}else if(this.imgsBefore!=0){
				this.imgs= this.imgsBefore
				this.activeTag="Before"
			}
			else{
				this.$router.push('/portfolio');
			}

			this.renderSlider()


		},
		removeTags() {
			let str

			if ((this.texto === null) || (this.text ===''))
				return false;
			else

				while ( this.texto.indexOf('&nbsp;') != -1){
					this.texto = this.texto.replace('&nbsp;','')
				}
				str = this.texto.toString();
		    // Regular expression to identify HTML tags in
		    // the input string. Replacing the identified
		    // HTML tag with a null string.

		    return str.replace( /(<([^>]+)>)/ig, '');


		},
		getTitles(){

			let begin =""
			let borra = ""
			let auxtext =  this.texto

			auxtext = this.removeTags(this.text) /*quita html

			/*-----------quita texto hasta disciplina--------------------*/
			begin= auxtext.indexOf('Disciplina:')
			borra = auxtext.substring (0,begin)
			auxtext = auxtext.replace(borra,'')

			/*-----------quita texto hasta disciplina--------------------*/



			let ini = 0
			let del = ""

			ini= auxtext.indexOf('Nombre del Proyecto:')
			del = auxtext.substring (0,ini)
			this.disciplina = del.replace('Disciplina:','').trim()
			auxtext = auxtext.replace(del,'')

			ini= auxtext.indexOf('Tipología:')
			del = auxtext.substring (0,ini)
			this.nombreProyecto = del.replace('Nombre del Proyecto:','').trim()
			auxtext = auxtext.replace(del,'')

			ini= auxtext.indexOf('Superficie:')
			del = auxtext.substring (0,ini)
			this.tipología = del.replace('Tipología:','').trim()
			auxtext = auxtext.replace(del,'')

			ini= auxtext.indexOf('Estado:')
			del = auxtext.substring (0,ini)
			this.superficie = del.replace('Superficie:','').trim()
			auxtext = auxtext.replace(del,'')

			ini= auxtext.indexOf('Diseño de proyecto:')
			del = auxtext.substring (0,ini)
			this.estado = del.replace('Estado:','').trim()
			auxtext = auxtext.replace(del,'')

			ini= auxtext.indexOf('Cliente:')
			del = auxtext.substring (0,ini)
			this.disenoProyecto = del.replace('Diseño de proyecto:','').trim()
			auxtext = auxtext.replace(del,'')

			ini= auxtext.indexOf('Programa')
			del = auxtext.substring (0,ini)
			this.cliente = del.replace('Cliente:','').trim()
			auxtext = auxtext.replace(del,'')



		},
		getPrograma(){

			let ini = 0
			let fin = 0
			let del = ""

			ini = this.texto.indexOf('Programa')
			del = this.texto.substring(0,ini)
			this.texto = this.texto.replace(del,'')

			while(this.texto.indexOf('<strong>') != -1){
				this.texto = this.texto.replace('<strong>','')
			}

			while(this.texto.indexOf('</strong>') != -1){
				this.texto = this.texto.replace('</strong>','')
			}

			while(this.texto.indexOf('<br>') != -1){
				this.texto = this.texto.replace('<br>','')
			}

			while(this.texto.indexOf('</br>') != -1){
				this.texto = this.texto.replace('</br>','')
			}

			/*-----quitar basura antes del primer parrafo*/

			ini = this.texto.indexOf('<p')
			del = this.texto.substring(0,ini)
			this.texto = this.texto.replace(del)


			while (this.texto.indexOf('<p') != -1){

				ini = this.texto.indexOf('<p')
				fin = this.texto.indexOf('</p>')
				del = this.texto.substring(ini,fin+4)
				this.texto = this.texto.replace(del,'')
				if (del.length >= 10) {
					this.programa.push(del)
				}

			}



			for (var i = 0; i < this.programa.length; i++) {

				while(this.programa[i].indexOf('<')!= -1){

					ini = this.programa[i].indexOf('<')
					fin = this.programa[i].indexOf('>')
					del = this.programa[i].substring(ini,fin+1)
					this.programa[i] = this.programa[i].replace(del,'')
				}



			}


		},

		setSlisder: function(tag) {

			if(tag=='Before'){
				if (this.activeTag!="Before") {

					this.imgs = this.imgsBefore
					this.renderSlider()
					this.activeTag="Before"

				}

			}
			else if (tag=='Process'){
				if (this.activeTag!="Process") {

					this.imgs= this.imgsProcess
					this.renderSlider()
					this.activeTag="Process"

				}
			}
			else if (tag=='Render'){
				if (this.activeTag!="Render") {

					this.imgs= this.imgsRender
					this.renderSlider()
					this.activeTag="Render"

				}
			}

			else {

				if (this.activeTag!="After") {

					this.imgs= this.imgsAfter
					this.renderSlider()
					this.activeTag="After"

				}

			}

		}

	},


	watch:{


		"proyecto.slug":function function_name() {
			localStorage.slug = this.proyecto.slug
			localStorage.body = this.proyecto.body
			localStorage.created_at = this.proyecto.created_at
			localStorage.featured_image = this.proyecto.featured_image
			localStorage.id = this.proyecto.id
			localStorage.published_at = this.proyecto.published_at
			localStorage.summary = this.proyecto.summary
			localStorage.title = this.proyecto.title
			localStorage.updated_at = this.proyecto.updated_at
		},

		"imgs":function () {

			var myCarousel = document.querySelector('#carousel')
			var carousel = new bootstrap.Carousel(myCarousel)
			carousel.to("0")

		}


	},

}


</script>

<style>




</style>