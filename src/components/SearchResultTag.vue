<template>
  <div class="tag-container">
    <el-tag
      class="tag"
      v-for="tag in dataList"
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
import { searchTag } from "../api";
export default {
  props: {
    query: String,
  },
  data() {
    return {
      dataList: [],
    };
  },
  methods: {
    getData(page) {
      searchTag(this.$props.query, page)
        .then((res) => {
          this.dataList = res.data.data;
        })
        .catch((err) => {
          this.$message.error("网络错误: " + err.response.data.status);
        });
    },
    getColor(seed) {
      return "#" + ((seed * 100000007) % 0xffffff).toString(16);
    },
  },
  mounted() {
    this.getData(0);
  },
};
</script>

<style scoped>
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