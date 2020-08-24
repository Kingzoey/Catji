<template>
  <div class="home_0">
	<NavBar2></NavBar2>
    <Top_0 style="background-color: #f0f0f0;"></Top_0>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar2 from "@/components/NavBar.vue";
import Top_0 from "@/components/Top_0.vue";
export default {
  name: "Home_0",
  components: {
    Top_0,
	NavBar2,
  },
};
</script>
