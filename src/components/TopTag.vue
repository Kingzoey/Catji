<template>
  <div class="rank-list">
    <header class="rank-header">
      <span class="name">
        <font-awesome-icon :icon="['fas', 'list-ol']" />&nbsp;热搜排行榜
      </span>
    </header>
    <div class="rank-wrap" v-for="(item, index) in tagHotList" :key="item.tag_id">
      <span class="number" :class="{on : index < 3}">{{index + 1}}</span>
      <div class="preview" v-if="index < 3">
        <div class="txt">
          <router-link :to="/tag/ + item.tag_id" class="link">
            <p :title="item.name" class="vname">{{item.name}}</p>
          </router-link>
        </div>
      </div>
      <router-link :to="/tag/ + item.tag_id" class="link" v-else>
        <p :title="item.name" class="vname">{{item.name}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { hotTag } from "../api";
export default {
  data() {
    return {
      on: 0,
      tagHotList: [
        {
          tag_id: 100001,
          name: "视频1名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941757390&di=b7daf9b49d8f38283d8fd07b3e2311ed&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180801%2Fc3ecad961e974873b622c5fb26a9be69.jpeg",
          up: {
            usid: 100001,
            name: "视频1up主名字",
          },
        },
        {
          tag_id: 100002,
          name: "视频2名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941825454&di=ca816abb927cb86f11948af3081901be&imgtype=0&src=http%3A%2F%2Fp9.qhimg.com%2Ft014610695fb16e41a3.png%3Fsize%3D1195x733",
          up: {
            usid: 100002,
            name: "视频2up主名字",
          },
        },
        {
          tag_id: 100003,
          name: "视频3名字",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941850196&di=bc462c1dc4640e720053cd92345d348a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F57c159ca3adbb.jpg",
          up: {
            usid: 100003,
            name: "视频3up主名字",
          },
        },
        {
          tag_id: 100004,
          name: "视频4名字",
          cover: "视频4缩略图url",
          up: {
            usid: 100004,
            name: "视频4up主名字",
          },
        },
        {
          tag_id: 100005,
          name: "视频5名字",
          cover: "视频5缩略图url",
          up: {
            usid: 100005,
            name: "视频5up主名字",
          },
        },
        {
          tag_id: 100006,
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
  mounted() {
    this.handleTag();
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
}
</style>