<template>
  <div class="rank-list">
    <header class="rank-header">
      <span class="name">
        <font-awesome-icon :icon="['fas', 'list-ol']" />&nbsp;最新视频
      </span>
    </header>
    <div class="rank-wrap" v-for="(item, index) in videoNewList" :key="item.vid">
      <span class="number" :class="{on : index < 3}">{{index + 1}}</span>
      <div class="preview" v-if="index < 3">
        <div class="pic">
          <router-link :to="/video/ + item.vid" class="link">
            <img :src="item.cover" :alt="item.name" />
          </router-link>
        </div>
        <div class="txt">
          <router-link :to="/video/ + item.vid" class="link">
            <p :title="item.name" class="vname">{{item.name}}</p>
          </router-link>
        </div>
      </div>
      <router-link :to="/video/ + item.vid" class="link" v-else>
        <p :title="item.name" class="vname">{{item.name}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { newVideo } from "../api";
export default {
  data() {
    return {
      on: 0,
      videoNewList: [
        {
          vid: 100001,
          name: "视频1名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941662933&di=02eb9ee99e2faed834a0440cf987261c&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F5387dc9f52dab.jpg",
          up: {
            usid: 100001,
            name: "视频1up主名字",
          },
        },
        {
          vid: 100002,
          name: "视频2名字",
          cover:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=214406322,2797989572&fm=26&gp=0.jpg",
          up: {
            usid: 100002,
            name: "视频2up主名字",
          },
        },
        {
          vid: 100003,
          name: "视频3名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941738757&di=576825c2745610f477bcd5a630126832&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FyL4o6YTVuyEU3bAohgXhDycIUQKn8164e%3DwiDv%3DxcIRsT1539407290894.jpeg",
          up: {
            usid: 100003,
            name: "视频3up主名字",
          },
        },
        {
          vid: 100004,
          name: "视频4名字",
          cover: "视频4缩略图url",
          up: {
            usid: 100004,
            name: "视频4up主名字",
          },
        },
        {
          vid: 100005,
          name: "视频5名字",
          cover: "视频5缩略图url",
          up: {
            usid: 100005,
            name: "视频5up主名字",
          },
        },
        {
          vid: 100006,
          name: "视频6名字",
          cover: "视频6缩略图url",
          up: {
            usid: 100006,
            name: "视频6up主名字",
          },
        },
      ],
    };
  },
  methods: {
    async handleNew() {
      this.on = 0;
      try {
        var res = await newVideo();
        res = res.data;
        if (res.status === "ok") {
          this.videoNewList = res.data;
        } else {
          this.$message.error("网络错误: " + res.status);
        }
      } catch (e) {
        this.$message.error("网络错误: " + e.response.data.status);
      }
    },
  },
  mounted() {
    this.handleNew();
  },
};
</script>

<style scoped>
.rank-list {
  width: 265px;
  position: inherit;
  padding-left: 10px;
  height: 100%;
}

.rank-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  margin-bottom: 16px;
  padding-top: 10px;
}

.name {
  display: inline-block;
  color: #212121;
  vertical-align: bottom;
  font-size: 20px;
  line-height: 28px;
}

.more {
  display: inline-block;
  padding: 0 0 0 12px;
  color: #505050;
  text-align: center;
  transition: all 0.2s;
}

.tab-switch {
  display: flex;
}

.tab-switch-item {
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  margin-right: 24px;
  cursor: pointer;
}

.tab-switch-item.on {
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6;
}

.rank-wrap {
  display: flex;
  position: relative;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 18px;
}

.number {
  font-size: 14px;
  color: #999;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  border-radius: 2px;
  display: inline-block;
}

.number.on {
  color: #fff;
  background: #00a1d6;
}

.vname {
  width: 235px;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.preview {
  width: 235px;
  display: flex;
  position: relative;
  font-weight: 500;
}

.preview .vname {
  width: auto;
}

.pic {
  position: relative;
}

.pic img {
  width: 112px;
  height: 63px;
  border-radius: 2px;
}

.txt {
  margin-left: 12px;
  width: 105px;
}
</style>