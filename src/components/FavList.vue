<template>
  <div class="all">
    <p class="title-fav">
      <font-awesome-icon :icon="['fas', 'folder']" />&nbsp;我的收藏
    </p>
    <ul>
      <li class="vi-item" v-for="vi in video" :key="vi.vid">
        <div class="v-cover">
          <router-link :to="/video/ + vi.vid" :title="vi.vtitle" class="coverimg">
            <div class="lazy-img">
              <img :src="vi.cover" />
            </div>
          </router-link>
        </div>
        <div class="info-wrap">
          <div class="headline">
            <router-link :to="/video/ + vi.vid" :title="vi.vtitle" class="title">{{vi.vtitle}}</router-link>
          </div>
          <div class="desc">
            <a class="visit-up-space" href="https://space.bilibili.com/168598">
            <font-awesome-icon :icon="['fas', 'user']" />
            {{vi.upname}}
            </a>
            <a class="attention-btn" @click="follow(vi.vid)">取消收藏</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FavList",
  data() {
    return {
      video: [
        {
          vid: 1,
          vtitle: "同济人气猫咪",
          upname: "王四锤", //上传视频up主
          cover:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=187649172,1956357065&fm=26&gp=0.jpg", //封面
        },
        {
          vid: 2,
          vtitle: "可爱猫咪日常搞笑合集",
          upname: "王大锤", //上传视频up主
          cover:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2338360597,1299861243&fm=26&gp=0.jpg", //封面
        },
        {
          vid: 3,
          vtitle: "这么可爱的猫咪你下得去手",
          upname: "王二锤", //上传视频up主
          cover:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3294506463,533319956&fm=26&gp=0.jpg", //封面
        },
        {
          vid: 4,
          vtitle: "云吸猫",
          upname: "王三锤", //上传视频up主
          cover:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=338026201,811635179&fm=26&gp=0.jpg", //封面
        },
        
        {
          vid: 5,
          vtitle: "小猫咪叫人起床",
          upname: "王五锤", //上传视频up主
          cover:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2418940404,2594675617&fm=26&gp=0.jpg", //封面
        },
      ],
    };
  },
  methods: {
    follow() {
      window.alert("取消成功!(狗头)");
    },
  },
};
</script>

<style scoped>
.title-fav {
  color:rgb(223, 37, 37);
  font-size: 20px;
  padding-left: 5px;
  padding-top: 2px;
}

.title-fav :hover {
  color: pink;
}

.vi-item {
  position: relative;
  padding: 20px 0 10px 102px;
  border-bottom: 1px solid #e5e9ef;
  z-index: 1;
}
.v-cover {
  position: absolute;
  width: 100px;
  height: 80px;
  padding: 0px;
  left: 5px;
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
}

.headline :hover {
  color:rgb(223, 37, 37);
}
</style>