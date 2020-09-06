<template>
  <div class="rank-list">
    <header class="rank-header">
      <span class="name">
        <font-awesome-icon :icon="['fas', 'list-ol']" />&nbsp;TOP
      </span>
      <div class="more tab-switch">
        <div class="tab-switch-item" :class="{on : on == 0}" @click="handleVideo">视频</div>
        <div class="tab-switch-item" :class="{on : on == 1}" @click="handleUser">用户</div>
        <div class="tab-switch-item" :class="{on : on == 2}" @click="handleCat">猫咪</div>
      </div>
    </header>
    <div class="rank-wrap" v-for="(item, index) in curHotlist" :key="item.vid">
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

<!--
<script>
import { hotVideo } from "../api";
import { newVideo } from "../api";
import { hotTag } from "../api";
export default {
  name: "top",
  data() {
    return {
      on: 0,
      videoHotList: [
        {
          vid: 视频1id,
          name: "视频1名字",
          cover: "视频1缩略图url",
          up: {
            usid: 视频1up主id,
            name: "视频1up主名字",
          },
        },
        {
          vid: 视频2id,
          name: "视频2名字",
          cover: "视频2缩略图url",
          up: {
            usid: 视频2up主id,
            name: "视频2up主名字",
          },
        },
        {
          vid: 视频10id,
          name: "视频10名字",
          cover: "视频10缩略图url",
          up: {
            usid: 视频10up主id,
            name: "视频10up主名字",
          },
        },
      ],
      videoNewList: [
        {
          vid: 视频1id,
          name: "视频1名字",
          cover: "视频1缩略图url",
          up: {
            usid: 视频1up主id,
            name: "视频1up主名字",
          },
        },
        {
          vid: 视频2id,
          name: "视频2名字",
          cover: "视频2缩略图url",
          up: {
            usid: 视频2up主id,
            name: "视频2up主名字",
          },
        },
        {
          vid: 视频10id,
          name: "视频10名字",
          cover: "视频10缩略图url",
          up: {
            usid: 视频10up主id,
            name: "视频10up主名字",
          },
        },
      ],
      tagHotList: [
        {
          vid: 视频1id,
          name: "视频1名字",
          cover: "视频1缩略图url",
          up: {
            usid: 视频1up主id,
            name: "视频1up主名字",
          },
        },
        {
          vid: 视频2id,
          name: "视频2名字",
          cover: "视频2缩略图url",
          up: {
            usid: 视频2up主id,
            name: "视频2up主名字",
          },
        },
        {
          vid: 视频10id,
          name: "视频10名字",
          cover: "视频10缩略图url",
          up: {
            usid: 视频10up主id,
            name: "视频10up主名字",
          },
        },
      ],
    };
  },
  methods: {
    async onLogin() {
      
      if (res.status == "ok") {
        this.hotVideo = res.data;
      }
    },
  },
};
</script>
-->

<script>
import { hotVideo, hotUser, hotCat } from "../api";
export default {
  name: "Top",
  computed: {
    curHotlist() {
      if (this.on === 0) return this.videoHotList;
      else if (this.on === 1) return this.userHotList;
      else return this.nekoHotList;
    },
  },
  data() {
    return {
      on: 0,
      videoHotList: [
        {
          vid: 100001,
          name: "视频1名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941091089&di=1cd618b392ce4b29afd2b8ff41d6ea35&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F447%2Fw1280h767%2F20181030%2FCFGZ-hnaivxq6767210.jpg",
          up: {
            usid: 100001,
            name: "视频1up主名字",
          },
        },
        {
          vid: 100002,
          name: "视频2名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941155445&di=e58ab47ab0ce3bc63bcb7fef72b6a810&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn12%2F706%2Fw439h267%2F20180425%2F43b9-fzqvvsc0513897.jpg",
          up: {
            usid: 100002,
            name: "视频2up主名字",
          },
        },
        {
          vid: 100003,
          name: "视频3名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941218871&di=8ebf233fed68b2a3eb4adfd7aa32c8a1&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F902397dda144ad34bc9ecc61daa20cf431ad8537.jpg",
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
      userHotList: [
        {
          vid: 200001,
          name: "视频1名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941282696&di=c245f8e62a8f4be08d548ae6e1703e45&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20119%2F654%2Fw1417h837%2F20181219%2F8fc7-hqnkypr2320016.jpg",
          up: {
            usid: 200002,
            name: "视频1up主名字",
          },
        },
        {
          vid: 200002,
          name: "视频2名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941424682&di=f5f95958fe8a3f3acee1c362e4cc72b8&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20119%2F562%2Fw1365h797%2F20181219%2F5e2f-hqnkypr2319426.jpg",
          up: {
            usid: 200002,
            name: "视频2up主名字",
          },
        },
        {
          vid: 200003,
          name: "视频3名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941471341&di=2f8639aafd145b636077eacfe21e14ff&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2F%3DykIFDXIIxHUvclD8ZohjAw7TycyPIB5Mvhl00AVn6xKw1538847570291.jpeg",
          up: {
            usid: 200003,
            name: "视频3up主名字",
          },
        },
        {
          vid: 200004,
          name: "视频4名字",
          cover: "视频4缩略图url",
          up: {
            usid: 200004,
            name: "视频4up主名字",
          },
        },
        {
          vid: 200005,
          name: "视频5名字",
          cover: "视频5缩略图url",
          up: {
            usid: 200005,
            name: "视频5up主名字",
          },
        },
        {
          vid: 200006,
          name: "视频6名字",
          cover: "视频6缩略图url",
          up: {
            usid: 200006,
            name: "视频6up主名字",
          },
        },
      ],
      nekoHotList: [
        {
          vid: 300001,
          name: "视频1名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941520818&di=1e96a49d50fc232d9cc56d6027157c25&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180205%2F8f51222f9aed4a53989ac6a73c347af9.jpeg",
          up: {
            usid: 300001,
            name: "视频1up主名字",
          },
        },
        {
          vid: 300002,
          name: "视频2名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941578261&di=c3639c91222a5f4133721b978f3d334b&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Ffs%2F07%2FQJ8890236932.jpg",
          up: {
            usid: 300002,
            name: "视频2up主名字",
          },
        },
        {
          vid: 300003,
          name: "视频3名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941625700&di=379f84c958a69b47b4bbe19c77d34eea&imgtype=0&src=http%3A%2F%2Fimg5.pcpop.com%2FArticleImages%2F730x547%2F3%2F3686%2F003686983.jpg",
          up: {
            usid: 300003,
            name: "视频3up主名字",
          },
        },
        {
          vid: 300004,
          name: "视频4名字",
          cover: "视频4缩略图url",
          up: {
            usid: 300004,
            name: "视频4up主名字",
          },
        },
        {
          vid: 300005,
          name: "视频5名字",
          cover: "视频5缩略图url",
          up: {
            usid: 300005,
            name: "视频5up主名字",
          },
        },
        {
          vid: 300006,
          name: "视频6名字",
          cover: "视频6缩略图url",
          up: {
            usid: 300006,
            name: "视频6up主名字",
          },
        },
      ],
    };
  },
  methods: {
    async handleVideo() {
      this.on = 0;
      try {
        var res = await hotVideo();
        res = res.data;
        if (res.status === "ok") {
          this.videoHotList = res.data;
        } else {
          this.$message.error("网络错误: " + res.status);
        }
      } catch (e) {
        this.$message.error("网络错误: " + e.response.data.status);
      }
    },
    async handleUser() {
      this.on = 1;
      try {
        var res = await hotUser();
        res = res.data;
        if (res.status === "ok") {
          this.userHotList = res.data;
        } else {
          this.$message.error("网络错误: " + res.status);
        }
      } catch (e) {
        this.$message.error("网络错误: " + e.response.data.status);
      }
    },
    async handleCat() {
      this.on = 2;
      try {
        var res = await hotCat();
        res = res.data;
        if (res.status === "ok") {
          this.nekoHotList = res.data;
        } else {
          this.$message.error("网络错误: " + res.status);
        }
      } catch (e) {
        this.$message.error("网络错误: " + e.response.data.status);
      }
    },
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
}
</style>