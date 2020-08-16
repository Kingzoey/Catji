<template>
  <div>
    <NavBar />
    <UserInfo/>
    <UListt/>
    <BlogCard />
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard.vue";
import NavBar from "@/components/NavBar.vue";
import UserInfo from "@/components/UserInfo.vue";
import UListt from "@/components/UListt.vue";
export default {
  name: "Blog",
  components: {
    NavBar,
    UserInfo,
    UListt,
    BlogCard,
  },
};
</script>

<style scoped>
</style>