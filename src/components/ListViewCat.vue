<template>
  <div>
    <ul class="list-container clearfix">
      <li class="list-item" v-for="(user, index) in dataList" :key="user.usid">
        <div class="item-card">
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
              <a
                class="attention-btn"
                :class="{on: user.ifollow==1}"
                @click="onFollow(index)"
              >{{user.ifollow==1?'已':'+ '}}关注</a>
            </div>
            <div class="up-info clearfix">
              <span style="color: pink">
                <font-awesome-icon :icon="['fas', 'video']" />
                &nbsp;投稿 {{user.work_num}}
              </span>
              <span style="color: cornflowerblue">
                <font-awesome-icon :icon="['fas', 'user']" />
                &nbsp;粉丝 {{user.follow_num}}
              </span>
            </div>
            <div class="desc">{{user.desc || "这个人很懒, 没有填个性签名"}}</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="page-wrap">
      <Pager :onChange="getData" ref="pager"></Pager>
    </div>
  </div>
</template>

<script>
import Pager from "@/components/Pager.vue";
import { searchCat, follow, unfollow } from "../api";
export default {
  components: {
    Pager,
  },
  props: {
    query: String,
  },
  data() {
    return {
      dataList: [
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
    onFollow(index) {
      if (!this.$store.state.user.usid) {
        this.$message.error("登录后才能关注up主");
        return;
      }

      let up = this.dataList[index];
      if (up.ifollow) {
        unfollow(up.usid)
          .then(() => {
            up.ifollow = up.ifollow ? 0 : 1;
            // up.follow_num--;
          })
          .catch((err) => {
            if (err.response.data.status === "未关注此人") {
              up.ifollow = 0;
            }
          });
      } else {
        follow(up.usid)
          .then(() => {
            up.ifollow = up.ifollow ? 0 : 1;
            // up.follow_num++;
          })
          .catch((err) => {
            if (err.response.data.status === "已经关注此人") {
              up.ifollow = 1;
            }
          });
      }
    },
    update() {
      this.$refs.pager.reset();
      this.getData(0);
    },
  },
  mounted() {
    this.getData(0);
  },
};
</script>

<style scoped>
.info-wrap {
  padding-top: 7.5px;
}

.list-item {
  position: relative;
  z-index: 1;
  float: left;
  margin-right: 16px;
  margin-top: 20px;
}
.list-container * {
  box-sizing: content-box;
}
.list-container {
  margin-right: -16px;
}
.item-card {
  position: relative;
  padding: 20px 0;
  background: aliceblue;
  border-radius: 8px;
  padding-left: 132px;
  opacity: 0.7;
  border-bottom: 1px solid #c6d6ee;
  width: 189px;
}
.up-face {
  position: absolute;
  width: 90px;
  height: 90px;
  left: 28px;
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
.attention-btn.on {
  background: #ff628f;
}
.attention-btn.on:hover {
  background: #ff799f;
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
  color: #292814;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  margin-bottom: 14px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
}
.page-wrap {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>