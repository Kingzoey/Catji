<template>
  <div class="rank-list">
    <header class="rank-header">
      <span class="name">
        <font-awesome-icon :icon="['fas', 'list-ol']" />&nbsp;TOP
      </span>
      <div class="more tab-switch">
        <div class="tab-switch-item" :class="{on : on == 0}" @click="on = 0">视频</div>
        <div class="tab-switch-item" :class="{on : on == 1}" @click="on = 1">用户</div>
        <div class="tab-switch-item" :class="{on : on == 2}" @click="on = 2">猫咪</div>
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

<script>
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
          id: 100000,
          url: "/video/100000",
          title: "测试视频",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941091089&di=1cd618b392ce4b29afd2b8ff41d6ea35&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F447%2Fw1280h767%2F20181030%2FCFGZ-hnaivxq6767210.jpg",
        },
        {
          id: 100001,
          url: "/video/100001",
          title: "测试视频",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941155445&di=e58ab47ab0ce3bc63bcb7fef72b6a810&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn12%2F706%2Fw439h267%2F20180425%2F43b9-fzqvvsc0513897.jpg",
        },
        {
          id: 100002,
          url: "/video/100002",
          title: "测试视频",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941218871&di=8ebf233fed68b2a3eb4adfd7aa32c8a1&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F902397dda144ad34bc9ecc61daa20cf431ad8537.jpg",
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941282696&di=c245f8e62a8f4be08d548ae6e1703e45&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20119%2F654%2Fw1417h837%2F20181219%2F8fc7-hqnkypr2320016.jpg",
        },
        {
          id: 100001,
          url: "/space/100001",
          title: "测试用户",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941424682&di=f5f95958fe8a3f3acee1c362e4cc72b8&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20119%2F562%2Fw1365h797%2F20181219%2F5e2f-hqnkypr2319426.jpg",
        },
        {
          id: 100002,
          url: "/space/100002",
          title: "测试用户",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941471341&di=2f8639aafd145b636077eacfe21e14ff&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2F%3DykIFDXIIxHUvclD8ZohjAw7TycyPIB5Mvhl00AVn6xKw1538847570291.jpeg",
        },
        {
          id: 100003,
          url: "/space/100003",
          title: "测试用户",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100004,
          url: "/space/100004",
          title: "测试用户",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100005,
          url: "/space/100005",
          title: "测试用户",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100006,
          url: "/space/100006",
          title: "测试用户",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
      ],
      nekoHotList: [
        {
          id: 100000,
          url: "/cat/100000",
          title: "测试猫咪",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941520818&di=1e96a49d50fc232d9cc56d6027157c25&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180205%2F8f51222f9aed4a53989ac6a73c347af9.jpeg",
        },
        {
          id: 100001,
          url: "/cat/100001",
          title: "测试猫咪",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941578261&di=c3639c91222a5f4133721b978f3d334b&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Ffs%2F07%2FQJ8890236932.jpg",
        },
        {
          id: 100002,
          url: "/cat/100002",
          title: "测试猫咪",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597941625700&di=379f84c958a69b47b4bbe19c77d34eea&imgtype=0&src=http%3A%2F%2Fimg5.pcpop.com%2FArticleImages%2F730x547%2F3%2F3686%2F003686983.jpg",
        },
        {
          id: 100003,
          url: "/cat/100003",
          title: "测试猫咪",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100004,
          url: "/cat/100004",
          title: "测试猫咪",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100005,
          url: "/cat/100005",
          title: "测试猫咪",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100006,
          url: "/cat/100006",
          title: "测试猫咪",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
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

.title {
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

.preview .title {
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