<template>
  <div>
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
          <div class="desc">{{vi.upname}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HistoryBlock",
  data() {
    return {
      video: [
        {
          vid: 1,
          vtitle: "可爱猫咪日常搞笑合集",
          upname: "王大锤",//上传视频up主
          cover: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2338360597,1299861243&fm=26&gp=0.jpg",//封面
        },
        {
          vid: 2,
          vtitle: "这么可爱的猫咪你下得去手",
          upname: "王二锤",//上传视频up主
          cover: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3294506463,533319956&fm=26&gp=0.jpg",//封面
        },
        {
          vid: 3,
          vtitle: "云吸猫",
          upname: "王三锤",//上传视频up主
          cover: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=338026201,811635179&fm=26&gp=0.jpg",//封面
        },
        /*
        {
          usid: 3,
          name: "王小绿",
          desc: "23岁, 是学生",
          work_num: 12,
          follow_num: 9876,
          avatar: "//static.hdslb.com/images/member/noface.gif",
        },*/
      ],
    };
  },

};
</script>

<style scoped>
.vi-item {
  position: relative;
  padding: 20px 0 20px 102px;
  border-bottom: 1px solid #e5e9ef;
  z-index: 1;
  
}
.v-cover {
  position: absolute;
  width: 100px;
  height: 80px;
  left: 0;
  top: 5px;
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
</style>