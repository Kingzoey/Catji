<template>
  <div class="page">
    <NavBar />
    <div class="container clearfix">
      <div class="left">
        <CatSpaceUserInfoCard class="catuserinfo" />
        <RecommendUserList />
      </div>
      <div class="right">
        <CatSpaceBlogPublish style="margin-top: 8px;" />
        <CatSpaceBlogCard />
      </div>
    </div>
  </div>
</template>

<script>
import CatSpaceBlogCard from "@/components/CatSpaceBlogCard.vue";
import CatSpaceBlogPublish from "@/components/CatSpaceBlogPublish.vue";
import NavBar from "@/components/NavBar.vue";
import CatSpaceUserInfoCard from "@/components/CatSpaceUserInfoCard.vue";
import RecommendUserList from "@/components/RecommendUserList.vue";
export default {
  name: "Blog",
  components: {
    NavBar,
    CatSpaceUserInfoCard,
    RecommendUserList,
    CatSpaceBlogPublish,
    CatSpaceBlogCard,
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