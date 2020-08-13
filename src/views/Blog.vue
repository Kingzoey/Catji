<template>
  <div>
    <NavBar />
    <BlogCard />
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Blog",
  components: {
    NavBar,
    BlogCard,
  },
};
</script>

<style scoped>
</style>