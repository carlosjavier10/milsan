<template>

	<div>
		<mainmenu></mainmenu>
		<aboutusheader></aboutusheader>
		<ourhistory></ourhistory>
		<nosotros></nosotros>
		<liderazgo></liderazgo>
		<team></team>
		<pie></pie>
	</div>


</template>
<script>
export default{
	data() {
		return{
		}
	},
	mounted(){
		this.bodyset()
	},
	methods:{
		bodyset(){

			let body = document.querySelector('body');
			body.style.paddingTop = "0rem"
			body.style.paddingBottom = "3rem"
			body.style.color = "#5a5a5a"

			let containerfluid =document.querySelector('.container-fluid');
			containerfluid.style.maxWidth="1280px"
		}
	},
	watch:{

	},
}


</script>