<template>
  <div class="all">
    <div class="header">
      <div class="title-fav">
        <font-awesome-icon :icon="['fas', 'folder']" />&nbsp;我的收藏
      </div>
      <div class="pager-wrap clearfix">
        <Pager :onChange="getData" ref="pager" :page_num="page_num" />
      </div>
    </div>
    <ul>
      <li class="vi-item" v-for="(vi, index) in dataList" :key="vi.video.vid">
        <div class="v-cover">
          <router-link :to="/video/ + vi.video.vid" :title="vi.video.title" class="coverimg">
            <div class="lazy-img">
              <img :src="vi.video.cover" />
            </div>
          </router-link>
        </div>
        <div class="info-wrap">
          <div class="headline">
            <router-link
              :to="/video/ + vi.video.vid"
              :title="vi.video.title"
              class="title"
            >{{vi.video.title}}</router-link>
          </div>
          <div class="desc">
            <router-link class="visit-up-space" :to="/space/ + vi.video.up.usid">
              <font-awesome-icon :icon="['fas', 'user']" />
              {{vi.video.up.name}}
            </router-link>
            <el-button
              :type="vi.video.up.ifollow?'success':'primary'"
              size="mini"
              @click="onFollow(index)"
            >{{vi.video.up.ifollow?"已关注":"关注"}}</el-button>
            <el-button type="danger" size="mini" @click="del(index)">删除历史</el-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { favorite, unfavoriteVideo, follow, unfollow } from "../api";
import Pager from "@/components/Pager.vue";
export default {
  components: {
    Pager,
  },
  props: {
    usid: Number,
  },
  computed: {
    page_num() {
      return Math.round(this.count / 10);
    },
  },
  data() {
    return {
      dataList: [],
      count: 1,
    };
  },
  methods: {
    onFollow(index) {
      if (!this.$store.state.user.usid) {
        this.$message.error("登录后才能关注up主");
        return;
      }

      let up = this.dataList[index].video.up;
      if (this.$store.state.user.usid == up.usid) {
        this.$message.error("不可以关注自己！");
        return;
      }
      if (up.ifollow) {
        unfollow(up.usid)
          .then(() => {
            up.ifollow = up.ifollow ? 0 : 1;
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
          })
          .catch((err) => {
            if (err.response.data.status === "已经关注此人") {
              up.ifollow = 1;
            }
          });
      }
    },
    del(index) {
      let video = this.video[index];
      unfavoriteVideo(video.vid)
        .then(() => {
          this.video.splice(index);
          this.$refs.pager.reload();
        })
        .catch((err) => {
          if (err.response.data.status === "未收藏") {
            this.video.splice(index);
            this.$refs.pager.reload();
          } else {
            this.$message.error("网络错误: " + err.response.data.status);
          }
        });
    },
    getData(page) {
      favorite(this.$props.usid, page) // 函数调用返回的是Promise
        .then((res) => {
          res = res.data;
          if (res.status === "ok") {
            this.dataList = res.data.result; // 请求成功后, this.video会被设置为res.data的内容, 从而触发页面更新
            this.count = res.data.count;
          } else {
            this.$message.error("网络错误: " + res.status);
          }
        })
        .catch((err) => {
          this.$message.error("网络错误: " + err.data.response.status);
        });
    },
  },
  mounted() {
    this.getData(0);
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-left: 8px;
}
.title-fav {
  color: rgb(223, 37, 37);
  font-size: 20px;
  padding-left: 5px;
  padding-top: 2px;
}
.vi-item {
  position: relative;
  padding: 20px 0 10px 102px;
  border-bottom: 1px solid #e5e9ef;
  z-index: 1;
}
.v-cover {
  position: absolute;
  width: 80px;
  height: 80px;
  padding: 0px;
  left: 10px;
  top: 9.8px;
}
.coverimg {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.lazy-img {
  width: 100%;
  height: 100%;
  display: inline-block;
}
.lazy-img img {
  width: 90px;
  height: 90px;
}
.headline {
  margin-bottom: 12px;
}
.title {
  display: inline-block;
  line-height: 21px;
  vertical-align: middle;
  font-size: 16px;
  color: #222;
  margin-right: 14px;
  font-weight: 700;
}

.desc {
  margin-bottom: 14px;
  width: 750px;
  font-size: 14px;
  color: #6d757a;
  line-height: 16px;
}

.desc :hover {
  color: pink;
}

.attention-btn {
  width: 65px;
  height: 24px;
  text-align: center;
  background: rgb(223, 37, 37);
  color: #fff;
  line-height: 24px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
}
.attention-a {
  width: 80px;
  height: 24px;
  text-align: center;
  background: rgb(223, 37, 37);
  color: #fff;
  line-height: 24px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  float: right;
}

.headline :hover {
  color: rgb(223, 37, 37);
}
</style>