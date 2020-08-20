<template>
  <div class="cover-warp">
    <h1 class="title">
      <font-awesome-icon :icon="['fas', 'upload']" />&nbsp;投稿信息
    </h1>
    <div class="cover clearfix">
      <div class="cover-pic">
        <div class="clickable" @click="choose_cover">
          <img :src="coverUrl" height="100" width="200" />
        </div>
      </div>
      <div class="cover-tips">
        <p class="header">
          <em style="color:red;font-size:18px;"></em>&nbsp;
          <font-awesome-icon :icon="['fas', 'images']" />&nbsp;封面
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
  methods: {
    choose_cover() {
      alert("hello");
    },
  },
};
</script>

<style scoped>
.main-body {
}

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

.cover {
  /*   border:0.5px solid grey;*/
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