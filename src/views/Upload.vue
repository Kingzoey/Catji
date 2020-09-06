<template>
  <div class="upload-page">
    <NavBar />
    <div class="container clearfix">
      <div class="left">
        <div class="cover-warp">
          <div class="title">
            <font-awesome-icon :icon="['fas', 'upload']" />&nbsp;投稿信息
          </div>
          <div class="cover clearfix">
            <div class="cover-pic">
              <img :src="coverUrl" width="192" height="106" @click="redirectCover" />
              <input
                type="file"
                accept=".gif, .jpg, .png"
                @change="onCoverChange"
                ref="input"
                style="display:none;"
                id="cover"
              />
            </div>
            <div class="cover-tips">
              <div class="header">
                <font-awesome-icon :icon="['fas', 'images']" />&nbsp;封面
              </div>
              <em>JPG、JEPG、PNG格式图片需要小于10M</em>
              <em>GIF格式图片需要小于3M，建议时长小于3s</em>
            </div>
          </div>
        </div>
        <div class="upload-info">
          <div class="header">
            <div>
              <font-awesome-icon :icon="['fas', 'hat-cowboy']" />&nbsp;标题
            </div>
            <input type="text" placeholder="可输入20个字" v-model="title" />
          </div>

          <div class="header">
            <div>
              <font-awesome-icon :icon="['fas', 'hashtag']" />&nbsp;&nbsp;&nbsp;&nbsp;标签
            </div>
            <input type="text" placeholder="创建标签" v-model="rawtags" />
          </div>

          <div class="header">
            <div>
              <font-awesome-icon :icon="['fas', 'cat']" />&nbsp;&nbsp;&nbsp;&nbsp;猫咪标签
            </div>
            <input type="text" placeholder="创建猫咪标签" v-model="rawcatags" />
          </div>

          <div class="header">
            <div>
              <font-awesome-icon :icon="['fas', 'book']" />&nbsp;&nbsp;&nbsp;简介
            </div>
            <input type="text" placeholder="介绍一下内容" v-model="desc" />
          </div>
          <div class="send-button">
            <input type="button" value="发布内容" @click="upload" />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="file-warp">
          <div class="file-header">
            <em style="color:red;font-size:18px;"></em>&nbsp;
            <font-awesome-icon :icon="['fas', 'file']" />&nbsp;上传文件
          </div>
          <div class="tips-warp">
            <span class="file-tips">请勿上传含有政治因素、色情挑逗、血腥暴力等违法因素的视频内容</span>
          </div>
          <div class="file-preview">
            <div class="file-name" v-if="videoFile.name">
              <font-awesome-icon :icon="['fas', 'video']" />
              {{videoFile.name}}
            </div>
          </div>
          <el-upload
            drag
            style="width:100%;"
            action="#"
            :show-file-list="false"
            :on-change="onFileChange"
            :auto-upload="false"
            accept="video/*"
          >
            <div class="file-box">
              <div class="upload-icon">
                <img src="@/assets/upload.png" style="vertical-align: middle;" />
              </div>
              <div class="upload-tips">
                <div class="tips-head">把文件拖至此处上传</div>
                <div class="tips-more">
                  <p>单次上传的所有文件总大小不超过20G</p>
                  <p>支持wmv、avi、mpg、mp4、rmvb、flv、3gp、</p>
                  <p>mov、mkv、vob格式文件</p>
                  <p>建议上传mp4文件</p>
                </div>
              </div>
              <div class="btn-warp">
                <button class="upload-btn">
                  <span>上传视频</span>
                </button>
              </div>
            </div>
          </el-upload>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import no_cover from "@/assets/uploadCover.png";
import NavBar from "@/components/NavBar.vue";
import { uploadVideo } from "../api";
export default {
  name: "Upload",
  components: {
    NavBar,
  },
  data() {
    return {
      coverUrl: no_cover,
      coverFile: "",
      videoFile: "",
      title: "",
      desc: "",
      rawtags: "",
      rawcatags: "",
      tags: [],
      catags: [],
    };
  },
  methods: {
    async upload() {
      if (!this.coverFile) {
        this.$message.error("请添加视频封面");
        return;
      }
      if (!this.videoFile) {
        this.$message.error("请添加视频文件");
        return;
      }
      if (!this.title) {
        this.$message.error("请添写视频标题");
        return;
      }
      if (!this.desc) {
        this.$message.error("请添写视频简介");
        return;
      }
      this.tags = this.rawtags.split(" ");
      this.catags = this.rawcatags.split(" ");

      try {
        let res = await uploadVideo(
          this.title,
          this.desc,
          this.coverFile,
          this.videoFile,
          this.tags,
          this.catags
        );
        res = res.data;
        if (res.status === "ok") {
          this.$router.push({ path: "/" });
        }
      } catch (e) {
        this.$message.error("上传失败: " + e.response.data.status);
      }
    },
    redirectCover() {
      this.$refs.input.click();
    },
    async onCoverChange(e) {
      var file = e.target.files[0];
      console.log(file);
      await this.preview(file);
      this.coverFile = file;
    },
    async preview(file) {
      var reader = new FileReader();
      var vue = this;
      reader.onload = function (e) {
        vue.coverUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChange(e) {
      var file = e.raw;
      this.videoFile = file;
    },
  },
};
</script>

<style>
.el-upload-dragger {
  width: auto !important;
  height: auto !important;
}
</style>

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

.upload-info {
  margin-top: 15px;
  background-color: white;
  border-radius: 8px;
}

.cover-warp {
  background-color: white;
  border-radius: 8px;
}

.right {
  /* float: left; */
  margin-left: 15px;
  background-color: white;
  border-radius: 8px;
}

.cover-warp {
  margin: 0 auto;
  padding: 15px;
}
.header {
  font-size: 16px;
  line-height: 16px;
  color: #333;
}

.title {
  font-size: 20px;
  color: #333;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 22px;
}

.cover-pic {
  float: left;
  width: 192px;
  height: 106px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}

.cover-tips {
  float: left;
  margin: 20px;
}

.cover-tips > em {
  display: block;
  color: #666;
  line-height: 12px;
  font-size: 12px;
  font-style: normal;
  margin-top: 6px;
}

.header {
  font-size: 20px;
  color: #333;
  font-weight: 400;
  margin-bottom: 20px;
}
.send-button {
  text-align: center;
  padding: 10px 0;
}

input[type="text"] {
  width: 93.4%;
  padding: 10px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  border-bottom: 1px solid rgba(238, 238, 238, 0.41);
  outline: none;
  color: rgb(22, 22, 22);
}

.send-button input[type="button"] {
  width: 60%;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 100;
  background-color: #fb7299;
  color: rgb(250, 250, 250);
  /* border: 1px solid rgba(255, 58, 58, 0.41); */
  /* border-width: thin; */
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s all;
}

.send-button input[type="button"]:hover {
  background-color: #ec4556;
  /* border: 1px solid #fff; */
  color: #fff;
}

.upload-info {
  padding: 15px;
}

.file-warp input[type="file"] {
  display: none;
}
.file-name {
  margin-top: 10px;
  font-size: 14px;
  color: #606266;
  display: block;
  margin-right: 40px;
  overflow: hidden;
  padding-left: 4px;
  text-overflow: ellipsis;
  transition: color 0.3s;
  white-space: nowrap;
}
.file-warp {
  width: 330px;
  padding: 15px;
}
.file-header {
  font-size: 20px;
  color: #333;
  font-weight: 400;
}
.file-box {
  width: 300px;
  text-align: center;
  padding: 80px 10px 32px;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  cursor: pointer;
}

.upload-icon {
  font-size: 40px;
  line-height: 40px;
  color: #ccc;
}

.upload-tips {
  text-align: center;
}

.tips-warp {
  font-size: 15px;
  margin: 2px 0 10px;
}
.file-preview {
  width: 317px;
  max-height: 800px;
  overflow: auto;
  margin-bottom: 7px;
}
.tips-head {
  margin-top: 10px;
  font-size: 20px;
  line-height: 20px;
  color: #333;
}
.tips-more {
  font-size: 12px;
  color: #999;
  margin: 20px 0 70px;
  text-align: center;
}

.upload-btn {
  color: #fff;
  background-color: #fb7299;
  border-color: #fd4c5d;
  border-radius: 4px;
  width: 164px;
  height: 36px;
  line-height: 34px;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear;
}
.upload-btn:hover {
  background-color: #ec4556;
}
</style>