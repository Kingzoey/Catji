<template>
  <div class="page">
    <NavBar />
    <div class="container clearfix">
      <div class="left">
        <CatUserInfo class="catuserinfo" />
        <UListt />
      </div>
      <div class="right">
        <BlogPublishCat style="margin-top: 8px;" />
        <CatBlogCard />
      </div>
    </div>
  </div>
</template>

<script>
import CatBlogCard from "@/components/CatSpaceBlogCard.vue";
import BlogPublishCat from "@/components/BlogPublishCat.vue";
import NavBar from "@/components/NavBar.vue";
import CatUserInfo from "@/components/CatUserInfo.vue";
import UListt from "@/components/UListt.vue";
export default {
  name: "Blog",
  components: {
    NavBar,
    CatUserInfo,
    UListt,
    BlogPublishCat,
    CatBlogCard,
  },
};
</script>

<style scoped>
.page {
  background-color: rgb(206, 240, 255);
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
.catuserinfo {
  margin-top: 8px;
}
</style>