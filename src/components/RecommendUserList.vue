<template>
  <div class="recom-wrap">
    <div class="header">
      <div class="title">
        <span class="tc-black">
          <font-awesome-icon :icon="['fas', 'cat']" />&nbsp;&nbsp;猫猫推荐
          <!-- 🐱 -->
        </span>
      </div>
      <!-- 我们好像没有地方可以跳转... -->
      <router-link to="/" class="more tc-slate" style="line-height: 23px;">
        <font-awesome-icon :icon="['fas', 'plus']" />&nbsp;更多
      </router-link>
    </div>
    <div class="recom-up-list">
      <div
        class="recom-wrap-item"
        style="margin-bottom: 20px;"
        v-for="item in dataList"
        :key="item.usid"
      >
        <router-link
          :to="/space/ + item.usid"
          class="recom-up-img"
          :style="'background-image: url(' + item.avatar + ');'"
        ></router-link>
        <router-link :to="/space/ + item.usid" class="recom-detail">
          <div class="up-name">{{item.name}}</div>
          <div>{{item.signature}}</div>
        </router-link>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { hotUser } from "../api";
export default {
  data() {
    return {
      dataList: [],
    };
  },
  async mounted() {
    try {
      let res = await hotUser();
      res = res.data;
      if (res.status === "ok") {
        this.dataList = res.data;
      } else {
        this.$message.error("网络错误: " + res.status);
      }
    } catch (e) {
      this.$message.error("网络错误: " + e.response.data.status);
    }
  },
  methods: {},
};
</script>

<style scoped>
.adaptive-scroll {
  flex: 1;
}

.recom-wrap {
  background-color: white;
  border-radius: 4px;
  margin-top: 8px;
  padding: 5px;
}

.recom-up-img {
  display: block;
  width: 38px;
  height: 38px;
  border-radius: 22px;
  position: relative;
  background-color: #fff;
  margin: 1px;
  margin-right: 11px;
  flex-shrink: 0;
  background-size: cover;
  background-color: #ddd;
  box-shadow: 0 0 0 1px #f25d8e;
  border: 1px solid #fff;
}

.recom-wrap-item:first-child {
  margin-top: 10px;
}

.recom-wrap-item {
  display: block;
  position: relative;
  margin-left: 16px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.recom-wrap .title {
  font-size: 16px;
}

.more-button .more {
  font-size: 12px;
  letter-spacing: 0;
}

.c-pointer {
  cursor: pointer;
}

.tc-slate {
  color: #99a2aa;
}

.recom-detail .up-name {
  font-size: 14px;
  line-height: 20px;
  word-break: break-all;
  word-break: break-word;
  text-overflow: ellipsis;
  max-height: 20px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
  font-weight: bold;
}

.recom-detail :hover {
  color: cornflowerblue;
}

.tc-black svg {
  color: pink;
}

.tc-black {
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
  font-weight: bold;
}

.up-name:hover {
  color: pink;
}

.more {
  display: block;
  float: right;
}

.more-button :hover {
  color: pink;
}

.header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 5px;
}
</style>