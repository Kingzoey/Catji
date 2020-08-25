<template>
  <div>
      <h2>我的投稿</h2>
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
            {{vi.upname}}
            <a class="attention-btn" @click="follow(vi.vid)">+ 关注</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UploadList",
  data() {
    return {
      video: [
        {
          vid: 1,
          vtitle: "可爱猫咪日常搞笑合集",
          upname: "王大锤", //上传视频up主
          cover:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2338360597,1299861243&fm=26&gp=0.jpg", //封面
        },
        {
          vid: 2,
          vtitle: "这么可爱的猫咪你下得去手",
          upname: "王二锤", //上传视频up主
          cover:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3294506463,533319956&fm=26&gp=0.jpg", //封面
        },
        {
          vid: 3,
          vtitle: "云吸猫",
          upname: "王三锤", //上传视频up主
          cover:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=338026201,811635179&fm=26&gp=0.jpg", //封面
        },
        {
          vid: 4,
          vtitle: "同济人气猫咪",
          upname: "王四锤", //上传视频up主
          cover:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=187649172,1956357065&fm=26&gp=0.jpg", //封面
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
      window.alert("关注成功!(狗头)");
    },
  },
};
</script>

<style scoped>
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
  font-size: 12px;
  color: #6d757a;
  line-height: 16px;
}
.attention-btn {
  width: 64px;
  height: 24px;
  text-align: center;
  background: #00a1d6;
  color: #fff;
  line-height: 24px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
}
</style>