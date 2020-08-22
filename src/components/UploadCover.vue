<template>
  <div class="cover-warp">
    <h1 class="title">投稿信息</h1>
    <div class="cover clearfix">
      <div class="cover-pic">
        <div style="position: relative;">
          <input
            id="upload-input"
            style="position: absolute; top: 0; bottom: 0; left: 0;right: 0; opacity: 0;"
            type="file"
            accept="image/gif, image/jpg, image/png"
            multiple
          />
          <!-- 自定义按钮效果 -->
          <div style="text-align: top">
            <span style="font-size: 12px;"></span>
            <img
              id="upload"
              src="@/assets/uploadCover.png"
              style="width: 200px; height: 100px; vertical-align: middle;"
            />
          </div>
        </div>
      </div>
      <div class="cover-tips">
        <p class="header">
          <em style="color:red;font-size:18px;">*</em>&nbsp;封面
        </p>
        <em>JPG、JEPG、PNG格式图片需要小于10M</em>
        <em>GIF格式图片需要小于3M，建议时长小于3s</em>
      </div>
    </div>
  </div>
</template>

<script>
import no_cover from "@/assets/uploadCover.png";
export default {
  name: "Middle",
  data() {
    return {
      coverUrl: no_cover,
    };
  },
};
</script>

<style scoped>
.header {
  font-size: 16px;
  line-height: 16px;
  color: #333;
}

.title {
  font-size: 22px;
  line-height: 22px;
  margin-bottom: 20px;
  font-weight: 500;
  color: #333;
}

.cover-pic {
  float: left;
  width: 192px;
  height: 106px;
  border-radius: 4px;
  overflow: hidden;
}

.clickable {
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