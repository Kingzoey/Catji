<template>
  <div>
    <ul>
      <li class="user-item" v-for="user in users" :key="user.usid">
        <div class="all-up">
          <div>
            <div class="left">
              <div class="up-face">
                <router-link :to="/space/ + user.usid" :title="user.name" class="face-img">
                  <div class="lazy-img">
                    <img :src="user.avatar" />
                  </div>
                </router-link>
              </div>
              <div class="info-wrap">
                <div class="headline">
                  <router-link
                    :to="/space/ + user.usid"
                    :title="user.name"
                    class="title"
                  >{{user.name}}</router-link>
                  <a class="attention-btn" @click="follow(user.usid)">+ 关注</a>
                </div>
                <div class="up-info clearfix">
                  <span style="color: pink">
                    <font-awesome-icon :icon="['fas', 'video']" />
                    &nbsp;稿件：{{user.work_num}}
                  </span>
                  <span style="color: cornflowerblue">
                    <font-awesome-icon :icon="['fas', 'user']" />
                    &nbsp;粉丝：{{user.follow_num}}
                  </span>
                </div>
                <div class="desc">{{user.desc}}</div>
              </div>
            </div>

            <div class="right">
              <div class="up-face">
                <router-link :to="/space/ + user.usid" :title="user.name" class="face-img">
                  <div class="lazy-img">
                    <img :src="user.avatar" />
                  </div>
                </router-link>
              </div>
              <div class="info-wrap">
                <div class="headline">
                  <router-link
                    :to="/space/ + user.usid"
                    :title="user.name"
                    class="title"
                  >{{user.name}}</router-link>
                  <a class="attention-btn" @click="follow(user.usid)">+ 关注</a>
                </div>
                <div class="up-info clearfix">
                  <span style="color: pink">
                    <font-awesome-icon :icon="['fas', 'upload']" />
                    &nbsp;稿件：{{user.work_num}}
                  </span>
                  <span style="color: cornflowerblue">
                    <font-awesome-icon :icon="['fas', 'user']" />
                    &nbsp;粉丝：{{user.follow_num}}
                  </span>
                </div>
                <div class="desc">{{user.desc}}</div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="page-wrap">
      <Pager :onChange="getData"></Pager>
    </div>
  </div>
</template>

<script>
import Pager from "@/components/Pager.vue";
import { searchCat } from "../api";
export default {
  name: "ListView",
  components: {
    Pager,
  },
  props: {
    query: String,
  },
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
    getData(page) {
      searchCat(this.$props.query, page)
        .then((res) => {
          this.dataList = res.data.data;
        })
        .catch((err) => {
          this.$message.error("网络错误: " + err.response.data.status);
        });
    },
    follow() {
      window.alert("关注成功!(狗头)");
    },
  },
};
</script>

<style scoped>
.all-up {
  padding-left: 0px;
  width: 100%;
}

.info-wrap {
  padding-top: 7.5px;
}

.user-item {
  position: relative;
  padding: 1px 0 10px 2px;
  border-bottom: 0px solid #e5e9ef;
  z-index: 1;
}
.list {
  position: relative;
  padding: 20px 0 20px 102px;
  background: aliceblue;
  border-radius: 30px;
  padding-left: 185px;
  opacity: 0.7;
}
.left {
  position: relative;
  padding: 20px 0 20px 102px;
  background: aliceblue;
  border-radius: 30px;
  padding-left: 185px;
  opacity: 0.7;
  float: left;
  width: 45%;
  border-bottom: 1px solid #c6d6ee;
  margin-top: 10px;
  margin-left: 20px;
}
.right {
  position: relative;
  padding: 20px 0 20px 102px;
  background: aliceblue;
  border-radius: 30px;
  padding-left: 185px;
  opacity: 0.7;
  float: right;
  width: 45%;
  border-bottom: 1px solid #c6d6ee;
  margin-top: 10px;
  margin-right: 20px;
}
.up-face {
  position: absolute;
  width: 90px;
  height: 90px;
  left: 78px;
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
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
}
.up-info > span {
  float: left;
  margin-right: 15px;
  font-size: 14px;
  line-height: 12px;
  font-weight: 100;
  color: #240b0b;
}
.desc {
  margin-bottom: 14px;
  width: 544px;
  font-size: 12px;
  color: #292814;
  line-height: 16px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
}
.page-wrap {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>