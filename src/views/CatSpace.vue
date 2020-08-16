<template>
  <div class="page">
    <NavBar />
    <div class="container clearfix">
      <div class="left">
        <UserInfo class="userinfo" />
        <UListt />
      </div>
      <div class="right">
        <!-- <BlogPublish /> -->
        <BlogCard />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard.vue";
// import BlogPublish from "@/components/BlogPublish.vue";
import NavBar from "@/components/NavBar.vue";
import UserInfo from "@/components/UserInfo.vue";
import UListt from "@/components/UListt.vue";
export default {
  name: "Blog",
  components: {
    NavBar,
    UserInfo,
    UListt,
    // BlogPublish,
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
  width: 244px;
  float: left;
}
.right {
  width: 900px;
  margin-left: 8px;
  float: left;
}
.userinfo {
  margin-top: 8px;
}
</style>