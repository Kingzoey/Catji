<template>
  <div class="file-warp">
    <div class="file-header">
      <em style="color:red;font-size:18px;"></em>&nbsp;
      <font-awesome-icon :icon="['fas', 'file']" />&nbsp;上传文件
    </div>
    <div class="tips-warp">
      <span class="file-tips">请勿上传含有政治因素、色情挑逗、血腥暴力等违法因素的视频内容</span>
    </div>
    <div class="file-preview">
      <div class="file-name" v-if="file.name">
        <font-awesome-icon :icon="['fas', 'video']" />
        {{file.name}}
      </div>
    </div>
    <el-upload
      drag
      action
      :show-file-list="false"
      :on-change="handleChange"
      :auto-upload="false"
      accept=".mp4, .wmv, .avi"
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
</template>
<script>
export default {
  data() {
    return {
      file: {},
    };
  },
  methods: {
    handleChange(e) {
      var file = e.raw;
      this.file = file;
      this.$emit("update:video", file);
    },
  },
};
</script>

<style>
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
  width: 300px;
  padding: 15px;
}
.file-header {
  font-size: 20px;
  color: #333;
  font-weight: 400;
}
.file-box {
  text-align: center;
  padding: 80px 10px 32px;
  position: relative;
  border: 1px dashed #d9d9d9;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
}
.file-box:hover {
  border-color: #999;
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

/*
       <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="upload"
          class="svg-inline--fa fa-upload fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
          />
        </svg>

*/
</style>