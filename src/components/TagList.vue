<template>
  <div class="tag-container">
    <el-tag
      class="tag"
      v-for="tag in tagList"
      :key="tag.tag_id"
      effect="dark"
      :color="getColor(tag.tag_id)"
    >
      <router-link :to="{path:'/tag/'+tag.tag_id}">
        <i :style="'width:10px;height:10px;border-radius:10px;color: pink;'"></i>
        {{tag.name}}
      </router-link>
    </el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagList: [
        { name: "tag1", tag_id: 0, cat_id: null },
        { name: "tag1tag1tag1", tag_id: 1, cat_id: null },
        { name: "tatagtag11gtag11", tag_id: 2, cat_id: null },
        { name: "tattatatag1g1g1ag1g1", tag_id: 3, cat_id: null },
        { name: "tatag1tag1tag1g1", tag_id: 4, cat_id: null },
        { name: "tag1", tag_id: 10, cat_id: null },
        { name: "tag1tag1tag1", tag_id: 11, cat_id: null },
        { name: "tatagtag11gtag11", tag_id: 12, cat_id: null },
        { name: "tattatatag1g1g1ag1g1", tag_id: 13, cat_id: null },
        { name: "tatag1tag1tag1g1", tag_id: 14, cat_id: null },
      ],
    };
  },
  methods: {
    getColor(seed) {
      return "#" + ((seed * 100000007) % 0xffffff).toString(16);
    },
  },
};
</script>

<style>
.tag-container {
  float: left;
  font-size: 20px;
}
.tag {
  border-radius: 15px;
  margin-right: 10px;
  margin-top: 15px;
  border: 0;
  opacity: 0.8;
}

.rectangle1 {
  margin-top: 10px;
  margin-right: 10px;
  float: left;
  width: 15px;
  height: 15px;
  background: blue;
}
</style>