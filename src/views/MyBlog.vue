<template>
	<div class="page">
		<NavBar />
		<div class="container clearfix">
			<div class="left">
				<BlogCard />
			</div>
			<div class="right">
				<UListt />
			</div>
			<div class="no-more"><img src="../assets/end.png" class="end-img">
				
			</div>
		</div>
	</div>
</template>

<script>
	import BlogCard from "@/components/BlogCard.vue";
	import NavBar from "@/components/NavBar.vue";
	import UListt from "@/components/UListt.vue";
	export default {
		name: "Blog",
		components: {
			NavBar,
			UListt,
			BlogCard,
		},
	};
</script>

<style scoped>
	.page {
		background-color: antiquewhite;
	}

	.container {
		width: 1160px;
		margin: 0 auto;
		/* display: flex;
  justify-content: space-between; */
	}

	.left {
		width: 900px;
		float: left;
	}

	.right {
		width: 244px;
		margin-left: 8px;
		float: right;
	}

	.no-more .end-img {
		margin-top: 18px;
		vertical-align: middle;
	}

	img {
		border: 0;
		outline: 0;
	}

	p {
		display: block;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
	}

</style>
