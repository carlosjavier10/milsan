<template>

	<div>
		<mainmenu></mainmenu>
		<portfolio></portfolio>

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
			body.style.overflow = "visible"
			body.style.margin = "0px"

			let containerfluid =document.querySelector('.container-fluid');
			containerfluid.style.maxWidth="1280px"
		}
	},
	watch:{

	},
}

</script>
<style>




</style>
