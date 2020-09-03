<template>
  <div class="cover-warp">
    <div class="title">
      <font-awesome-icon :icon="['fas', 'upload']" />&nbsp;投稿信息
    </div>
    <div class="cover clearfix">
      <div class="cover-pic">
        <img :src="coverUrl" width="192" height="106" @click="onClick" />
        <input
          type="file"
          accept=".gif, .jpg, .png"
          @change="onUpload"
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
</template>

<script>
import no_cover from "@/assets/uploadCover.png";

export default {
  data() {
    return {
      coverUrl: no_cover,
    };
  },
  methods: {
    onClick() {
      this.$refs.input.click();
    },
    async onUpload(e) {
      var file = e.target.files[0];
      console.log(file);
      await this.preview(file);
      this.$emit("update:cover", file);
    },
    async preview(file) {
      var reader = new FileReader();
      var vue = this;
      reader.onload = function (e) {
        vue.coverUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
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
</style>