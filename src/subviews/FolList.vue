<template>
  <div class="live-panel">
    <div class="live-up-list">
      <div class="live-panel-item live-up" style="margin-bottom: 20px;" v-if="dataList.length==0">
        <router-link
          to="/"
          class="live-up-img"
          style="background-image: url('//static.hdslb.com/images/member/noface.gif');"
        ></router-link>
        <router-link to="/" class="live-detail ls-0">
          <div class="up-name line-clamp-1">竟然一个关注都没有</div>
          <div class="live-name line-clamp-2">去首页看看吧</div>
        </router-link>
      </div>
      <div
        class="live-panel-item live-up"
        style="margin-bottom: 20px;"
        v-for="item in dataList"
        :key="item.usid"
      >
        <router-link
          :to="/space/ + item.usid"
          class="live-up-img"
          :style="'background-image: url(' + item.avatar + ');'"
        ></router-link>
        <router-link :to="/space/ + item.usid" class="live-detail ls-0">
          <div class="up-name line-clamp-1">{{item.nickname}}</div>
          <div class="live-name line-clamp-2">{{item.signature}}</div>
        </router-link>
        <el-button type="danger" style="margin: auto 10px auto auto;" @click="cancelFollow">取消关注</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { followings } from "../api";
export default {
  data() {
    return {
      dataList: [],
    };
  },
  async mounted() {
    let usid = this.$route.params.usid;
    if (!usid) {
      this.$message.error("用户信息错误");
      return;
    }
    try {
      let res = await followings(usid);
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
  methods: {
    cancelFollow() {},
  },
};
</script>

<style scoped>
.adaptive-scroll {
  flex: 1;
}

.live-panel {
  background-color: white;
  border-radius: 4px;
  margin-top: 5px;
  margin-left: 8px;
}

.live-panel-item .live-up-img {
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

.live-panel-item:first-child {
  margin-top: 10px;
}

.live-panel-item {
  display: block;
  position: relative;
  margin-left: 16px;
  height: 44px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.live-panel-item {
  display: block;
  position: relative;
  margin-left: 16px;
  height: 44px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.live-panel-item:first-child {
  margin-top: 10px;
}

.live-panel .title {
  font-size: 16px;
  line-height: 22px;
}

.live-panel .more-button .more {
  font-size: 12px;
  letter-spacing: 0;
}

.c-pointer {
  cursor: pointer;
}

.tc-slate {
  color: #99a2aa;
}

.live-panel-item .live-detail .up-name {
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

.live-detail :hover {
  color: cornflowerblue;
}

.up-name:hover {
  color: pink;
}

.tc-black svg {
  color: pink;
}

.tc-black {
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
  font-weight: bold;
}

.more-button {
  display: block;
  position: relative;
  left: 175px;
}

.more tc-slate {
  display: block;
  float: right;
}

.more-button :hover {
  color: pink;
}
</style>