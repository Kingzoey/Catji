<template>
  <div >
    <NavBar />
    <UserInfo/>
    <UListt/>
    <BlogPublish/>  
    <BlogCard />
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard.vue";
import NavBar from "@/components/NavBar.vue";
import UserInfo from "@/components/UserInfo.vue";
import UListt from "@/components/UListt.vue";
import BlogPublish from "@/components/BlogPublish.vue";
export default {
  name: "Blog",
  components: {
    NavBar,
    UserInfo,
    UListt,
    BlogCard,
    BlogPublish,
  },
};
</script>

<style scoped>
</style>