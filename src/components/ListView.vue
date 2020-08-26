<template>
  <div>
    <ul>
      <li class="user-item" v-for="user in users" :key="user.usid">
        <div class="list">
          <div class="up-face">
            <router-link :to="/space/ + user.usid" :title="user.name" class="face-img">
              <div class="lazy-img">
                <img :src="user.avatar" />
              </div>
            </router-link>
          </div>
          <div class="info-wrap">
            <div class="headline">
              <router-link :to="/space/ + user.usid" :title="user.name" class="title">{{user.name}}</router-link>
              <a class="attention-btn" @click="follow(user.usid)">+ 关注</a>
            </div>
            <div class="up-info clearfix">
              <span>稿件：{{user.work_num}}</span>
              <span>粉丝：{{user.follow_num}}</span>
            </div>
            <div class="desc">{{user.desc}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListView",
  data() {
    return {
      users: [
        {
          usid: 1,
          name: "王小红",
          desc: "21岁, 是学生",
          work_num: 12,
          follow_num: 9876,
          avatar: "//static.hdslb.com/images/member/noface.gif",
        },
        {
          usid: 2,
          name: "王小蓝",
          desc: "22岁, 是学生",
          work_num: 12,
          follow_num: 9876,
          avatar: "//static.hdslb.com/images/member/noface.gif",
        },
        {
          usid: 3,
          name: "王小绿",
          desc: "23岁, 是学生",
          work_num: 12,
          follow_num: 9876,
          avatar: "//static.hdslb.com/images/member/noface.gif",
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
.user-item {
  position: relative;
  padding: 20px 0 20px 102px;
  border-bottom: 1px solid #e5e9ef;
  z-index: 1;
 
}
.list{
  position: relative;
  padding: 20px 0 20px 102px;
  background:  #fb7299;
   border-radius: 30px;

}
.up-face {
  position: absolute;
  width: 90px;
  height: 90px;
  left: 0;
  top: 20px;
}
.face-img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
.title:hover {
  color: #00a1d6;
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
.attention-btn:hover {
  background: #00b5e5;
}
.up-info {
  margin-bottom: 10px;
}
.up-info > span {
  float: left;
  margin-right: 15px;
  font-size: 12px;
  line-height: 12px;
  color: #240b0b;
}
.desc {
  margin-bottom: 14px;
  width: 750px;
  font-size: 12px;
  color: #292814;
  line-height: 16px;
}
</style>