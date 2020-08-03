<template>
  <div>
    <NavBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar_Home.vue";
export default {
  name: "Space",
  components: {
    NavBar,
  },
  mounted() {
    console.log(this.$route.params.usid);
  },
};
</script>

<style scoped>
</style>