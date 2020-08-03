<template>
  <div class="home">
	<NavBar></NavBar>
    <Top></Top>
	<Top_0></Top_0>
	<Top_1></Top_1>
    <Middle></Middle>
    <Middle2></Middle2>
    <Middle3></Middle3>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Top from "@/components/Top.vue";
import Top_0 from "@/components/Top_0.vue";
import Top_1 from "@/components/Top_1.vue";
import Middle from "@/components/Middle.vue";
import Middle2 from "@/components/Middle2.vue";
import Middle3 from "@/components/Middle3.vue";
export default {
  name: "Home",
  components: {
	NavBar,
    Top,
	Top_0,
	Top_1,
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
