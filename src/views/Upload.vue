<template>
  <div class="upload-page">
    <NavBar />
    <div class="container clearfix">
      <div class="left">
        <UploadCover class="UploadCover" />
        <UploadInfo class="UploadInfo" />
      </div>
      <div class="right">
        <UploadFile/>
      </div>  
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import UploadCover from "@/components/UploadCover.vue";
import UploadFile from "@/components/UploadFile.vue";
import UploadInfo from "@/components/UploadInfo.vue";
export default {
  name: "Upload",
  components: {
    NavBar,
    UploadCover,
    UploadFile,
    UploadInfo,
  },
};
</script>

<style scoped>
.upload-page {
  background-color:antiquewhite
}

.container {
  width: 1000px;
  height:1000px;
  margin: 0 auto;
  margin-top: 20px;
}

.left {
  width: 540px;
  height: 500px;
  float: left;
  /* background-color:white */
}

.UploadInfo{
  margin-top: 20px;
  background-color:white
}

.UploadCover{
  background-color:white
}

.right {
  width: 300px;
  height: 535px;
  float: left;
  margin-left:50px;
  background-color:white
}
</style>