<template>
  <div class="upload-page">
    <NavBar />
    <div class="container clearfix">
      <div class="left">
        <UploadCover class="UploadCover" @update:cover="updateCover" />
        <UploadInfo class="UploadInfo" @update:info="updateInfo" @upload="upload" />
      </div>
      <div class="right">
        <UploadFile @update:video="updateFile" />
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import UploadCover from "@/components/UploadCover.vue";
import UploadFile from "@/components/UploadFile.vue";
import UploadInfo from "@/components/UploadInfo.vue";
import { uploadVideo } from "../api";
export default {
  name: "Upload",
  components: {
    NavBar,
    UploadCover,
    UploadFile,
    UploadInfo,
  },
  data() {
    return {
      coverFile: "",
      videoFile: "",
      videoInfo: {
        title: "",
        desc: "",
      },
    };
  },
  methods: {
    updateCover(file) {
      this.coverFile = file;
    },
    updateInfo(info) {
      this.videoInfo = info;
    },
    updateFile(file) {
      this.videoFile = file;
    },
    async upload() {
      if (!this.coverFile || !this.videoInfo || !this.videoFile) {
        return;
      }
      try {
        let res = await uploadVideo(
          this.videoInfo.title,
          this.videoInfo.desc,
          this.coverFile,
          this.videoFile,
          ["tag1", "tag2", "tag3"],
          ["catag1", "catag2", "catag3"]
        );
        res = res.data;
        if (res.status == "ok") {
          this.$router.push({ path: "/" });
        }
      } catch (e) {
        this.$message.error("上传失败: " + e.response.data.status);
      }
    },
  },
};
</script>

<style scoped>
.upload-page {
  background-color: antiquewhite;
}

.container {
  width: 1100px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.left {
  width: 600px;
  /* float: left; */
}

.UploadInfo {
  margin-top: 15px;
  background-color: white;
  border-radius: 8px;
}

.UploadCover {
  background-color: white;
  border-radius: 8px;
}

.right {
  /* float: left; */
  margin-left: 15px;
  background-color: white;
  border-radius: 8px;
}
</style>