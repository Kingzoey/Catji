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
    <div class="rank-wrap" v-for="(item, index) in curHotlist" :key="item.vid+item.url">
      <span class="number" :class="{on : index < 3}">{{index + 1}}</span>
      <div class="preview" v-if="index < 3">
        <div class="pic">
          <router-link :to="/video/ + item.vid" class="link">
            <img :src="item.cover" :alt="item.vname" />
          </router-link>
        </div>
        <div class="txt">
          <router-link :to="item.url" class="link">
            <p :vname="item.vname" class="vname">{{item.vname}}</p>
          </router-link>
        </div>
      </div>
      <router-link :to="item.url" class="link" v-else>
        <p :vname="item.vname" class="vname">{{item.vname}}</p>
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
import { hotVideo } from "../api";
import { hotUser } from "../api";
import { hotCat } from "../api";
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
          vname: "视频1名字",
          cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941091089&di=1cd618b392ce4b29afd2b8ff41d6ea35&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F447%2Fw1280h767%2F20181030%2FCFGZ-hnaivxq6767210.jpg",
          up: {
            usid: 100001,
            name: "视频1up主名字",
          },
        },
        {
          vid: 100002,
          vname: "视频2名字",
          cover: "视频2缩略图url",
          up: {
            usid: 100002,
            name: "视频2up主名字",
          },
        },
        {
          vid: 100003,
          vname: "视频3名字",
          cover: "视频3缩略图url",
          up: {
            usid: 100003,
            name: "视频3up主名字",
          },
        },
        {
          vid: 100004,
          vname: "视频4名字",
          cover: "视频4缩略图url",
          up: {
            usid: 100004,
            name: "视频4up主名字",
          },
        },
        {
          vid: 100005,
          vname: "视频5名字",
          cover: "视频5缩略图url",
          up: {
            usid: 100005,
            name: "视频5up主名字",
          },
        },
        {
          vid: 100006,
          vname: "视频6名字",
          cover: "视频6缩略图url",
          up: {
            usid: 100006,
            name: "视频6up主名字",
          },
        },
      ],
      userHotList: [
        {
          vid: 100001,
          vname: "视频1名字",
          cover: "视频1缩略图url",
          up: {
            usid: 100002,
            name: "视频1up主名字",
          },
        },
        {
          vid: 100002,
          vname: "视频2名字",
          cover: "视频2缩略图url",
          up: {
            usid: 100002,
            name: "视频2up主名字",
          },
        },
        {
          vid: 100003,
          vname: "视频3名字",
          cover: "视频3缩略图url",
          up: {
            usid: 100003,
            name: "视频3up主名字",
          },
        },
        {
          vid: 100004,
          vname: "视频4名字",
          cover: "视频4缩略图url",
          up: {
            usid: 100004,
            name: "视频4up主名字",
          },
        },
        {
          vid: 100005,
          vname: "视频5名字",
          cover: "视频5缩略图url",
          up: {
            usid: 100005,
            name: "视频5up主名字",
          },
        },
        {
          vid: 100006,
          vname: "视频6名字",
          cover: "视频6缩略图url",
          up: {
            usid: 100006,
            name: "视频6up主名字",
          },
        },
      ],
      nekoHotList: [
        {
          vid: 100001,
          vname: "视频1名字",
          cover: "视频1缩略图url",
          up: {
            usid: 100001,
            name: "视频1up主名字",
          },
        },
        {
          vid: 100002,
          vname: "视频2名字",
          cover: "视频2缩略图url",
          up: {
            usid: 100002,
            name: "视频2up主名字",
          },
        },
        {
          vid: 100003,
          vname: "视频3名字",
          cover: "视频3缩略图url",
          up: {
            usid: 100003,
            name: "视频3up主名字",
          },
        },
        {
          vid: 100004,
          vname: "视频4名字",
          cover: "视频4缩略图url",
          up: {
            usid: 100004,
            name: "视频4up主名字",
          },
        },
        {
          vid: 100005,
          vname: "视频5名字",
          cover: "视频5缩略图url",
          up: {
            usid: 100005,
            name: "视频5up主名字",
          },
        },
        {
          vid: 100006,
          vname: "视频6名字",
          cover: "视频6缩略图url",
          up: {
            usid: 100006,
            name: "视频6up主名字",
          },
        },
      ],
    };
  },
  methods:{
    async handleVideo() {
      this.on = 0;
      var res = await hotVideo();
      if(res.status == 'ok')
      {
        this.videoHotList = res.data;
      }
    },
    async handleUser() {
      this.on = 1;
      var res = await hotUser();
      if(res.status == 'ok')
      {
        this.userHotList = res.data;
      }
    },  
    async handCat() {
      this.on = 2;
      var res = await hotCat();
      if(res.status == 'ok')
      {
        this.nekoHotList = res.data;
      }
    }    
  }
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

.vname,
.preview {
  width: 235px;
}

.vname {
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