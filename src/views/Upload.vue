<template>
  <div class="upload-page">
    <NavBar />
    <div class="container clearfix">
      <div class="left">
        <UploadCover />
        <UploadInfo />
      </div>
      <UploadFile class="file" />
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
.container {
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
}

.left {
  width: 560px;
  float: left;
}

.file {
  float: right;
}
</style>