<template>
  <div class="home_1">
	<NavBar2></NavBar2>
    <Top_1 style="background-color: #f0f0f0;"></Top_1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar2 from "@/components/NavBar.vue";
import Top_1 from "@/components/Top_1.vue";
export default {
  name: "Home_1",
  components: {
    Top_1,
	NavBar2,
  },
};
</script>
