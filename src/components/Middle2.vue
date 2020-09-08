<template>
  <div class="new-part">
    <div class="card">
      <header class="new-header">
        <div class="icon"></div>
        <span class="new-name">
          <slot name="header"></slot>
        </span>
      </header>
      <div class="new-list-top clearfix">
        <template v-for="(item, index) in curHotlist">
          <div :key="item.vid" class="top-left" v-if="index < 1">
            <div class="big-item">
              <div class="cover">
                <router-link :to="/video/ + item.vid" class="link" target="_blank">
                  <img :src="item.cover" height="208" width="370" :alt="item.name" />
                </router-link>
              </div>
              <div class="txt">
                <router-link :to="/video/ + item.vid" class="link">
                  <p :title="item.name" class="vname">{{item.name}}</p>
                </router-link>
              </div>
            </div>
          </div>
          <div :key="item.vid" class="top-right-1" v-else-if="index < 3">
            <div class="top-right-line1 clearfix">
              <div class="normal-item-1">
                <div class="cover">
                  <router-link :to="/video/ + item.vid" class="link" target="_blank">
                    <img :src="item.cover" height="90" width="175" :alt="item.name" />
                  </router-link>
                </div>
                <div class="txt">
                  <router-link :to="/video/ + item.vid" class="link">
                    <p :title="item.name" class="vname">{{item.name}}</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div :key="item.vid" class="top-right-2" v-else-if="index < 5">
            <div class="top-right-line2 clearfix">
              <div class="normal-item-2">
                <div class="cover">
                  <router-link :to="/video/ + item.vid" class="link" target="_blank">
                    <img :src="item.cover" height="90" width="175" :alt="item.name" />
                  </router-link>
                </div>
                <div class="txt">
                  <router-link :to="/video/ + item.vid" class="link">
                    <p :title="item.name" class="vname">{{item.name}}</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div :key="item.vid" class="bottom" v-else>
            <div class="bottom-line1">
              <div class="normal-item">
                <div class="cover">
                  <router-link :to="/video/ + item.vid" class="link" target="_blank">
                    <img :src="item.cover" height="90" width="175" :alt="item.name" />
                  </router-link>
                </div>
                <div class="txt">
                  <router-link :to="/video/ + item.vid" class="link">
                    <p :title="item.name" class="vname">{{item.name}}</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { hotVideo, newVideo, hotTag } from "../api";

export default {
  name: "Middle",
  computed: {
    curHotlist() {
      if (this.on === 0) return this.videoHotList;
      else if (this.on === 1) return this.videoNewList;
      else return this.tagHotList;
    },
  },
  data() {
    return {
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
          cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941662933&di=02eb9ee99e2faed834a0440cf987261c&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F5387dc9f52dab.jpg",
          up: {
            usid: 100004,
            name: "视频4up主名字",
          },
        },
        {
          vid: 100005,
          name: "视频5名字",
          cover: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=214406322,2797989572&fm=26&gp=0.jpg",
          up: {
            usid: 100005,
            name: "视频5up主名字",
          },
        },
        {
          vid: 100006,
          name: "视频6名字",
          cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941738757&di=576825c2745610f477bcd5a630126832&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FyL4o6YTVuyEU3bAohgXhDycIUQKn8164e%3DwiDv%3DxcIRsT1539407290894.jpeg",
          up: {
            usid: 100006,
            name: "视频6up主名字",
          },
        },
        {
          vid: 100007,
          name: "视频7名字",
          cover: "视频7缩略图url",
          up: {
            usid: 100007,
            name: "视频7up主名字",
          },
        },
        {
          vid: 100008,
          name: "视频8名字",
          cover: "视频8缩略图url",
          up: {
            usid: 100008,
            name: "视频8up主名字",
          },
        },
        {
          vid: 100009,
          name: "视频9名字",
          cover: "视频9缩略图url",
          up: {
            usid: 100009,
            name: "视频9up主名字",
          },
        },
      ],
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
        {
          vid: 100007,
          name: "视频7名字",
          cover: "视频7缩略图url",
          up: {
            usid: 100007,
            name: "视频7up主名字",
          },
        },
        {
          vid: 100008,
          name: "视频8名字",
          cover: "视频8缩略图url",
          up: {
            usid: 100008,
            name: "视频8up主名字",
          },
        },
        {
          vid: 100009,
          name: "视频9名字",
          cover: "视频9缩略图url",
          up: {
            usid: 100009,
            name: "视频9up主名字",
          },
        },
      ],
      tagHotList: [
        {
          vid: 100001,
          name: "视频1名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941757390&di=b7daf9b49d8f38283d8fd07b3e2311ed&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180801%2Fc3ecad961e974873b622c5fb26a9be69.jpeg",
          up: {
            usid: 100001,
            name: "视频1up主名字",
          },
        },
        {
          vid: 100002,
          name: "视频2名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941825454&di=ca816abb927cb86f11948af3081901be&imgtype=0&src=http%3A%2F%2Fp9.qhimg.com%2Ft014610695fb16e41a3.png%3Fsize%3D1195x733",
          up: {
            usid: 100002,
            name: "视频2up主名字",
          },
        },
        {
          vid: 100003,
          name: "视频3名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941850196&di=bc462c1dc4640e720053cd92345d348a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F57c159ca3adbb.jpg",
          up: {
            usid: 100003,
            name: "视频3up主名字",
          },
        },
        {
          vid: 100004,
          name: "视频4名字",
          cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941662933&di=02eb9ee99e2faed834a0440cf987261c&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F5387dc9f52dab.jpg",
          up: {
            usid: 100004,
            name: "视频4up主名字",
          },
        },
        {
          vid: 100005,
          name: "视频5名字",
          cover: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=214406322,2797989572&fm=26&gp=0.jpg",
          up: {
            usid: 100005,
            name: "视频5up主名字",
          },
        },
        {
          vid: 100006,
          name: "视频6名字",
          cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941738757&di=576825c2745610f477bcd5a630126832&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FyL4o6YTVuyEU3bAohgXhDycIUQKn8164e%3DwiDv%3DxcIRsT1539407290894.jpeg",
          up: {
            usid: 100006,
            name: "视频6up主名字",
          },
        },
        {
          vid: 100007,
          name: "视频7名字",
          cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941091089&di=1cd618b392ce4b29afd2b8ff41d6ea35&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F447%2Fw1280h767%2F20181030%2FCFGZ-hnaivxq6767210.jpg",
          up: {
            usid: 100007,
            name: "视频7up主名字",
          },
        },
        {
          vid: 100008,
          name: "视频8名字",
          cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941155445&di=e58ab47ab0ce3bc63bcb7fef72b6a810&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn12%2F706%2Fw439h267%2F20180425%2F43b9-fzqvvsc0513897.jpg",
          up: {
            usid: 100008,
            name: "视频8up主名字",
          },
        },
        {
          vid: 100009,
          name: "视频9名字",
          cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941218871&di=8ebf233fed68b2a3eb4adfd7aa32c8a1&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F902397dda144ad34bc9ecc61daa20cf431ad8537.jpg",
          up: {
            usid: 100009,
            name: "视频9up主名字",
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
    async handleTag() {
      this.on = 0;
      try {
        var res = await hotTag();
        res = res.data;
        if (res.status === "ok") {
          this.tagHotList = res.data;
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
.new-part {
  height: 100%;
}
.card img {
  border-radius: 5px;
  display: block;
}
.card {
  padding-left: 30px;
  padding-top: 10px;
}
.new-part {
  position: inherit;
}

.new-list-top {
  white-space: nowrap;
  margin-top: 10px;
}
.new-name {
  font-size: 22px;
  line-height: 36px;
}
.new-header {
  height: 36px;
}
.top-left {
  display: inline-block;
  vertical-align: top;
}
.bottom {
  float: left;
}
.normal-item {
  float: left;
  width: 195px;
  height: 118px;
}
.top-right-1 {
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
}
.top-right-2 {
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
}
</style>