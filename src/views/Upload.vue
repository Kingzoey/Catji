<template>
  <div>
    <NavBar />
    <UploadFile />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar_Home.vue";
import UploadFile from "@/components/UploadFile.vue"
export default {
  name: "Upload",
  components: {
    NavBar,
    UploadFile,
  },
};
</script>

<style scoped>
</style>