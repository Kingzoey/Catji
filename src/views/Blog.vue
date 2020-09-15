<template>
  <div class="page">
    <NavBar />
    <div class="container clearfix">
      <div class="left">
        <BlogUserInfoCard class="userinfo" />
        <RecommendUserList />
      </div>
      <div class="right">
        <BlogPublish style="margin-top: 8px;" />
        <BlogCard />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import BlogCard from "@/components/BlogCard.vue";
import BlogPublish from "@/components/BlogPublish.vue";
import BlogUserInfoCard from "@/components/BlogUserInfoCard.vue";
import RecommendUserList from "@/components/RecommendUserList.vue";
export default {
  name: "Blog",
  components: {
    NavBar,
    BlogUserInfoCard,
    RecommendUserList,
    BlogPublish,
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
  float: right;
}
.userinfo {
  margin-top: 8px;
}
</style>