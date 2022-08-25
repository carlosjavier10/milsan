<template>

	<div id="topicmenu" class="container">
		<div class="nav-scroller py-1 mb-2">
			<nav class="nav d-flex justify-content-between" >

				<router-link v-for="topic in topics" :key="topic.id"  :to='{name:"blog", query: {filter: topic.slug }}' class="p-2 link-secondary" >{{ topic.name }}</router-link>

			</nav>
		</div>
	</div>

</template>

<script>

export default{
	name:"topics",
	data(){
		return{
			topics: [],
		}
	},

	mounted(){
		this.gettopic()
	},
	methods:{
		async gettopic(){
			await this.axios.get('/api/topics').then(response=>{
				this.topics = response.data.topics
			}).catch(error=>{
				console.log(error)
				this.blogs = []
			})

		}
	}
}

</script>