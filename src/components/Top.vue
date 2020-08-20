<template>
  <div class="rank-list">
    <header class="rank-header">
      <span class="name">排行榜</span>
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
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100001,
          url: "/video/100001",
          title: "测试视频",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100002,
          url: "/video/100002",
          title: "测试视频",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
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
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100001,
          url: "/space/100001",
          title: "测试用户",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100002,
          url: "/space/100002",
          title: "测试用户",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
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
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100001,
          url: "/cat/100001",
          title: "测试猫咪",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          id: 100002,
          url: "/cat/100002",
          title: "测试猫咪",
          cover: "https://www.baidu.com/img/flexible/logo/pc/result.png",
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
   margin-top:40px;
   margin-left:20px;
   padding-left:10px;
     background-color: rgb(255, 255, 255);
  border-radius: 10px;
   
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