<template>
  <div class="about">
    <h1>This is an about page</h1>
	<NavBar2></NavBar2>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar2 from "@/components/NavBar.vue";
export default {
  name: "About",
  components: {
	NavBar2,
  },
};
</script>