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
					:style="{backgroundImage:`url(${hoja.img})`}">

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
/*import { proyectbodytext } from './devutil'*/

export default{


	data() {
		return{
			proyecto:[],
			texto:"",
			imgs:[],
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


			slider:[]

		}

	},
	computed: {

	},
	mounted(){

		if (this.$route.params.proyect) {

			this.proyecto = this.$route.params.proyect
			this.texto = this.proyecto.body



		}
		else{
			this.texto = '<div class=\"embedded_image\" data-layout=\"wide\" contenteditable=\"false\"><img alt=\"imagen 2 en imagen amplia\" src=\"/storage/canvas/images/orDO51VCREf3Srd0QDq5UoSMve9rf5dIyiZrkvnB.jpg\"><p>imagen 2 en imagen amplia</p></div><p><br></p><p><br></p><div class=\"embedded_image\" data-layout=\"default\" contenteditable=\"false\"><img alt=\"Imagen 1  en diseño predeterminado\" src=\"/storage/canvas/images/SmEL4W0WybEYQRfjNzMK253tTFG6ORGJXeN2423B.jpg\"><p>Imagen 1  en diseño predeterminado</p></div><p class=\"ql-align-justify\"><br></p><div class=\"embedded_image\" data-layout=\"default\" contenteditable=\"false\"><img alt=\"imagen 3 en diseño predeterminado\" src=\"/storage/canvas/images/TsdQzYZgWWJwGAVb75MRvvHr1bPJaVaHvWWqMzXc.jpg\"><p>imagen 3 en diseño predeterminado</p></div><div class=\"embedded_image\" data-layout=\"default\" contenteditable=\"false\"><img alt=\"Imagen 4 en diseño amplio\" src=\"/storage/canvas/images/P7spTs77N39vJMLWv6d7fYjUUUeWzoa3JJ2GGtUR.jpg\"><p>Imagen 4 en diseño amplio</p></div><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><strong>Disciplina: </strong>Arquitectura e Interiorismo</p><p class=\"ql-align-justify\"><strong>Nombre del Proyecto: </strong>Banco de Venezuela, Sede La Castellana</p><p class=\"ql-align-justify\"><strong>Tipología: </strong>oficinas</p><p class=\"ql-align-justify\"><strong>Superficie:&nbsp;</strong>200 m2</p><p class=\"ql-align-justify\"><strong>Estado: </strong>Construido</p><p class=\"ql-align-justify\"><strong>Diseño de proyecto: </strong>2022</p><p class=\"ql-align-justify\"><strong>Cliente: </strong>Banco de Venezuela</p><p class=\"ql-align-justify\"><strong>&nbsp;</strong></p><p class=\"ql-align-justify\"><strong>Programa</strong></p><p class=\"ql-align-justify\">Proyecto de remodelación de sede bancaria incluye proyecto de interiorismo, hall de acceso, área de cafetín para todo público, nuevos espacios de encuentro, pantallas digitales, nuevas oficinas para Gerente de Negocios y Servicios, Gerente General y oficinas de Atención al Público.</p><p class=\"ql-align-justify\">La sede de La Castellana corresponde al proyecto piloto del Banco de Venezuela para la implementación de BDV Digital, tomando como referencia la renovación previa de la marca, imagen y colores corporativos que esta nueva propuesta debía considerar.</p><p class=\"ql-align-justify\">El desafío mas relevante fue el tiempo acotado de ejecución, se debió elaborar una estrategia de la adaptación de lo existente y el diseño de elementos prefabricados en madera para ser instalados en sitio.</p><p class=\"ql-align-justify\">La idea consistió en una mimetización entre los elementos originales y contemporáneos, recuperando un gran espacio central con una doble altura, que conecta dos niveles en el cual se elaboró un diseño geométrico a modo de trama en madera con variantes en sus disposiciones logrando una imagen dinámica y versátil que simboliza la velocidad de los cambios en la era digital.</p><p class=\"ql-align-justify\">El Hall de acceso tiene un diseño de iluminación que mejora la escala del espacio. Para afianzar la condición de amplitud se eliminó un tabique largo que ocultaba toda la planta alta y en su lugar se diseñó una fachada de vidrio zigzagueante que logró una amplitud espacial considerable.</p><p class=\"ql-align-justify\">Para el hall de acceso que vincula la planta baja y primer piso se incorporaron los nuevos modelos de sucursal bancaria work/café/banco que ofrece espacios abiertos y contemporáneos para clientes y visitantes, integrándolos con lugares de encuentro, trabajo colaborativo y gestión bancaria accesible para todo público. </p><p class=\"ql-align-justify\">Espacios renovados para las taquillas, atención al público, oficinas de gerencia negocios y servicios, áreas para personal operativo buscando que la atención a los clientes sea más cercana y mejor atendida.</p><p class=\"ql-align-justify\">El uso de revestimientos grises y maderas claras crean la combinación perfecta entre lo original y lo contemporáneo con un edificio atemporal que no pasará de moda, con la entrega de nuevos servicios, espacios versátiles para trabajadores y clientes, mobiliario flexible y alta tecnología. </p><p><br></p>'
			/*this.$router.push('/portfolio');*/
		}


		/*console.log(this.proyecto.body)DE AQUI HAY Q SACAR EL CONTENIDO DEL PROYECTO*/

		this.bodyset()
		this.getDesc()
	},
	methods:{
		bodyset(){
			let body = document.querySelector('body');
			body.style.overflow = "hidden"
			body.style.margin = "0 -15px"

		},
		getDesc(){
			/*console.log(this.slider)*/
			/*console.log("TAMAÑO DEL ARERGLO IMGS ANTES = "+this.imgs.length)*/
			this.getImg()
			this.getTitles()
			this.getPrograma()



			/*/////////////////////////////////////////////////////////*/
			/*/////////////////////////////////////////////////////////*/


			if(this.proyecto.featured_image){
				this.imgs.unshift(this.proyecto.featured_image)
			}


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
								/*console.log("ENTRO A LA MIERDAA")*/
								let continuar = true
								while(continuar){
									/*console.log("TAM DE AUX ANTES DE VER LA SUMA = "+aux.length)*/
									if (aux.length+this.programa[j].length < max) {
										/*console.log("aux antes= "+aux)*/
										aux = aux + "<p>"+this.programa[j]+"</p>"
										/*console.log("aux despues= "+aux)*/
										this.programa.shift()

										if (this.programa[j])
											{continuar=true}
										else
											{continuar=false}
									}else{
										/*console.log("ENTRO A TIENE MAS DE MAX")*/
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





			/*/////////////////////////////////////////////////////////*/
			/*/////////////////////////////////////////////////////////*/
			/*			console.log("CAntidad de parrafos : "+ this.programa.length)*/
			/*			console.log("parrafos de programa: "+ this.programa)*/
			console.log(this.slider.length)



			console.log(this.slider)



			console.log("////////////////////")
/*			console.log("////////////////////")

			console.log ("****disciplina= " + this.disciplina)
			console.log ("****Nombre= " + this.nombreProyecto)
			console.log ("****tipo= " + this.tipología)
			console.log ("****super = " + this.superficie)
			console.log ("****estado = " + this.estado)
			console.log ("****diseño = " + this.disenoProyecto)
			console.log ("****cliente = " + this.cliente)
			console.log (this.programa)*/


		},
		getImg(){

			let res = ""
			let ini = 0
			let fin = 0
			let url =""
			this.texto.trim()


			while ( this.texto.indexOf('<img ')!= -1 ){
				ini = this.texto.indexOf('<img ')
				fin = this.texto.indexOf('>', ini)
				res = this.texto.substring(ini,fin+1)
				this.texto = this.texto.replace(res,'')

				ini=res.indexOf('src=')
				fin=res.indexOf('">',ini+5)
				url =res.substring(ini+5,fin)
				this.imgs.push(url)
			}

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


		}


	},
	watch:{



	},

}


</script>

<style>




</style>