<template>
  <div>
    <NavBar></NavBar>
    <UploadCover></UploadCover>
    <UploadFile></UploadFile>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar_Home.vue";
import UploadCover from "@/components/UploadCover.vue";
import UploadFile from "@/components/UploadFile.vue";
export default {
  name: "Upload",
  components: {
    NavBar,
    UploadCover,
    UploadFile,
  },
};
</script>

<style scoped>
</style>