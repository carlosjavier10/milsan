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
		}
	},
	watch:{

	},
}

</script>
<style>




</style>
