<template>
  <div class="home">
	<NavBar></NavBar>
    <Top></Top>
    <Middle></Middle>
    <Middle2></Middle2>
    <Middle3></Middle3>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar_Home.vue";
import Top from "@/components/Top.vue";
import Middle from "@/components/Middle.vue";
import Middle2 from "@/components/Middle2.vue";
import Middle3 from "@/components/Middle3.vue";
export default {
  name: "Home",
  components: {
	NavBar,
    Top,
    Middle,
    Middle2,
    Middle3
  },
};
</script>
<style scoped>
	/*
	*{margin: 0; padding: 0;}
	.nav{
		width: 100%;
		height: 100px;
		background: url(../assets/Nav.png);
		position: relative;
		top: -60px;
		z-index:8;
	}
	*/
</style>
