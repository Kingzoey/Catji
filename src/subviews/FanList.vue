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
          <div class="up-name line-clamp-1">竟然一个粉丝都没有</div>
          <div class="live-name line-clamp-2">去首页看看吧</div>
        </router-link>
      </div>
      <div
        class="live-panel-item live-up"
        style="margin-bottom: 20px;"
        v-for="(item, index) in dataList"
        :key="item.usid"
      >
        <router-link
          :to="/space/ + item.usid"
          class="live-up-img"
          :style="'background-image: url(' + item.avatar + ');'"
        ></router-link>
        <router-link :to="/space/ + item.usid" class="live-detail ls-0">
          <div class="up-name line-clamp-1">{{item.nickname}}</div>
          <div class="live-name line-clamp-2">{{item.signature || "这个人很懒, 没有填写个性签名"}}</div>
        </router-link>
        <el-button
          style="margin:auto 10px auto auto;"
          :type="item.ifollow==1?'success':'primary'"
          @click="onFollow(index)"
        >{{item.ifollow?"已关注":"关注"}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { followers, follow, unfollow } from "../api";
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
      let res = await followers(usid);
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
    onFollow(index) {
      if (!this.$store.state.user.usid) {
        this.$message.error("登录后才能关注up主");
        return;
      }

      let up = this.dataList[index];
      if (this.$store.state.user.usid == up.usid) {
        this.$message.error("不可以关注自己！");
        return;
      }
      if (up.ifollow) {
        unfollow(up.usid)
          .then(() => {
            up.ifollow = up.ifollow ? 0 : 1;
            // up.follow_num--;
          })
          .catch((err) => {
            if (err.response.data.status === "未关注此人") {
              up.ifollow = 0;
            }
          });
      } else {
        follow(up.usid)
          .then(() => {
            up.ifollow = up.ifollow ? 0 : 1;
            // up.follow_num++;
          })
          .catch((err) => {
            if (err.response.data.status === "已经关注此人") {
              up.ifollow = 1;
            }
          });
      }
    },
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