<template>
  <div class="imagesbox" v-if="images">
    <div class="zoom-wrap">
      <ul
        class="zoom-list"
        :class="(images.length<=1)?'zoom-1':(images.length<=3)?'zoom-2':(images.length<=4)?'zoom-4':'zoom-9'"
      >
        <li
          class="card"
          :class="(images.length<=1)?'card-1':(images.length<=2)?'card-2':(images.length<=4)?'card-4':'card-9'"
          v-for="(image,index) in images"
          :key="index"
        >
          <el-image class="img-content" fit="cover" :src="image" :preview-src-list="[image]" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCardImage",
  props: {
    images: Array,
  },
};
</script>

<style scoped>
.imagesbox {
  width: 518px;
  user-select: none;
  text-align: center;
}
.zoom-list {
  line-height: 0;
  text-align: left;
  margin-top: -4px;
  margin-left: -4px;
  vertical-align: top;
}
.zoom-1 {
  width: auto;
  height: auto;
  margin-bottom: 4px;
}
.zoom-2 {
  width: 456px;
}
.zoom-4 {
  width: 228px;
}
.zoom-9 {
  width: 342px;
}
.card {
  width: 104px;
  height: 104px;
  margin: 4px 0 0 4px;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  cursor: zoom-in;
}
.card.card-1 {
  width: 240px;
  height: 199px;
  border-radius: 0;
}
.img-content {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
</style>