<template>
  <div class="rank-list">
    <header class="rank-header">
      <span class="name">
        <font-awesome-icon :icon="['fas', 'list-ol']" />&nbsp;TOP
      </span>
      <div class="more tab-switch">
        <div class="tab-switch-item" :class="{on : on == 0}" @click="on = 0">最新</div>
      </div>
    </header>
    <div class="rank-wrap" v-for="(item, index) in curHotlist" :key="item.id+item.url">
      <span class="number" :class="{on : index < 3}">{{index + 1}}</span>
      <div class="preview" v-if="index < 3">
        <div class="pic">
          <router-link :to="item.url" class="link">
            <img :src="item.cover" :alt="item.title" />
          </router-link>
        </div>
        <div class="txt">
          <router-link :to="item.url" class="link">
            <p :title="item.title" class="title">{{item.title}}</p>
          </router-link>
        </div>
      </div>
      <router-link :to="item.url" class="link" v-else>
        <p :title="item.title" class="title">{{item.title}}</p>
      </router-link>
    </div>
  </div>
</template>

<!--
<script>
import { newVideo } from "../api";
export default {
  name: "newVideo",
  data() {
    return {
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
    };
  },
  methods: {
    async onLogin() {
      if (res.status == "ok") {
        this.newVideo = res.data;
      }
    },
  },
};
</script>
-->

<script>
export default {
  name: "Top0",
  computed: {
    curHotlist() {
      return this.videoHotList;
    },
  },
  data() {
    return {
      on: 0,
      videoHotList: [
        {
          id: 100000,
          url: "/video/100000",
          title: "测试视频",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941662933&di=02eb9ee99e2faed834a0440cf987261c&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F5387dc9f52dab.jpg",
        },
        {
          id: 100001,
          url: "/video/100001",
          title: "测试视频",
          cover:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=214406322,2797989572&fm=26&gp=0.jpg",
        },
        {
          id: 100002,
          url: "/video/100002",
          title: "测试视频",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941738757&di=576825c2745610f477bcd5a630126832&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FyL4o6YTVuyEU3bAohgXhDycIUQKn8164e%3DwiDv%3DxcIRsT1539407290894.jpeg",
        },
        {
          id: 100003,
          url: "/video/100003",
          title: "测试视频",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100004,
          url: "/video/100004",
          title: "测试视频",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100005,
          url: "/video/100005",
          title: "测试视频",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100006,
          url: "/video/100006",
          title: "测试视频",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
      ],
      userHotList: [
        {
          id: 100000,
          url: "/space/100000",
          title: "测试用户",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100001,
          url: "/space/100001",
          title: "测试用户",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100002,
          url: "/space/100002",
          title: "测试用户",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100003,
          url: "/space/100003",
          title: "测试用户",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100004,
          url: "/space/100004",
          title: "测试用户",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100005,
          url: "/space/100005",
          title: "测试用户",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100006,
          url: "/space/100006",
          title: "测试用户",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
      ],
      nekoHotList: [
        {
          id: 100000,
          url: "/cat/100000",
          title: "测试猫咪",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100001,
          url: "/cat/100001",
          title: "测试猫咪",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100002,
          url: "/cat/100002",
          title: "测试猫咪",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100003,
          url: "/cat/100003",
          title: "测试猫咪",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100004,
          url: "/cat/100004",
          title: "测试猫咪",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100005,
          url: "/cat/100005",
          title: "测试猫咪",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
        {
          id: 100006,
          url: "/cat/100006",
          title: "测试猫咪",
          cover:
            "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc",
        },
      ],
    };
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

.title,
.preview {
  width: 235px;
}

.title {
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