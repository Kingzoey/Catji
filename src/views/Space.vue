<template>
  <div>
    <NavBar />
    <div class="container clearfix">
      <div class="left" :style="{'position':'relative','top':leftPanelTop+'px'}">
        <div class="user">
          <div class="avatar">
            <img :src="displayUser.avatar" />
          </div>
          <div class="name">
            <font-awesome-icon :icon="['fas', 'cat']" v-if="displayUser.cat_id" />
            {{displayUser.nickname}}
          </div>
          <div class="btn">
            <el-button
              :type="displayUser.ifollow?'success':'primary'"
              size="mini"
              @click="onFollow"
            >{{displayUser.ifollow?"已关注":"关注"}}</el-button>
            <el-button
              :type="displayUser.iblock?'info':'danger'"
              size="mini"
              @click="onBlock"
            >{{displayUser.iblock?"已拉黑":"拉黑"}}</el-button>
          </div>
          <div class="stat">
            <router-link class="stat-item" :to="'/space/' + usid + '/fol'">
              <p class="stat-number">{{displayUser.followee_num}}</p>
              <p class="stat-label" :class="{on: tablist[subpage].subpath=='fol'}">关注</p>
            </router-link>
            <router-link class="stat-item" :to="'/space/' + usid + '/fan'">
              <p class="stat-number">{{displayUser.follower_num}}</p>
              <p class="stat-label" :class="{on: tablist[subpage].subpath=='fan'}">粉丝</p>
            </router-link>
            <router-link class="stat-item" :to="'/space/' + usid + '/blog'">
              <p class="stat-number">{{displayUser.blogs_num}}</p>
              <p class="stat-label" :class="{on: tablist[subpage].subpath=='blog'}">动态</p>
            </router-link>
          </div>
        </div>
        <div class="tab">
          <ul>
            <template v-for="(tab, index) in tablist">
              <li
                class="tab-item"
                :class="{on:index==subpage}"
                v-if="tab.show() && tab.showInList"
                :key="tab.subpath"
              >
                <a href="javascript:void(0);" @click="direct(index)">
                  <font-awesome-icon :icon="['fas', tab.iconname]" />
                  {{tab.name}}
                </a>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="right">
        <component :is="tablist[subpage].tab" :usid="this.usid"></component>
      </div>
    </div>
  </div>
</template>

<script>
import { userInfo, follow, unfollow, block, unblock } from "../api";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Space",
  components: {
    NavBar,
  },
  created() {
    this.usid =
      Number.parseInt(this.$route.params.usid) ||
      this.$store.state.user.usid ||
      null;
    this.subpage = Math.max(
      this.tablist
        .map((tabitem) => tabitem.subpath)
        .indexOf(this.$route.params.sub),
      0
    );
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    if (!this.usid) {
      this.$message.error("用户信息有误");
      return;
    }
    this.getUserInfo(this.usid);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    this.usid =
      Number.parseInt(to.params.usid) || this.$store.state.user.usid || null;
    this.subpage = Math.max(
      this.tablist.map((tabitem) => tabitem.subpath).indexOf(to.params.sub),
      0
    );
    this.getUserInfo(this.usid);
    next();
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (this.scrollTop > 0) {
        this.leftPanelTop = Math.max(0, this.scrollTop - 100);
      }
    },
    direct(index) {
      var to = "/space/" + this.usid + "/" + this.tablist[index].subpath;
      if (this.$route.path != to) {
        this.$router.push({
          path: to,
        });
      }
    },
    getUserInfo(usid) {
      if (usid == this.$store.state.user.usid) {
        this.$store.commit("cacheGetMineInfo", {
          onSuccess: (me) => {
            this.displayUser = { ...me };
          },
          onFailed: (err) => {
            console.log(err);
          },
        });
        return;
      }
      userInfo(usid)
        .then((res) => {
          this.displayUser = res.data.data;
        })
        .catch((e) => {
          this.$message.error("网络错误: " + e.data.response.status);
        });
    },
    onFollow() {
      if (!this.$store.state.user.usid) {
        this.$message.error("登录后才能关注up主");
        return;
      }
      let up = this.displayUser;
      if (this.$store.state.user.usid == up.usid) {
        this.$message.error("不可以关注自己！");
        return;
      }

      if (up.ifollow) {
        unfollow(up.usid)
          .then(() => {
            up.ifollow = up.ifollow ? 0 : 1;
            up.follower_num--;
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
            up.follower_num++;
          })
          .catch((err) => {
            if (err.response.data.status === "已经关注此人") {
              up.ifollow = 1;
            }
          });
      }
    },
    onBlock() {
      if (!this.$store.state.user.usid) {
        this.$message.error("登录后才能拉黑up主");
        return;
      }
      let up = this.displayUser;
      if (this.$store.state.user.usid == up.usid) {
        this.$message.error("不可以拉黑自己！");
        return;
      }

      if (up.iblock) {
        unblock(up.usid)
          .then(() => {
            up.iblock = up.iblock ? 0 : 1;
          })
          .catch((err) => {
            if (err.response.data.status === "未拉黑此人") {
              up.iblock = 0;
            }
          });
      } else {
        block(up.usid)
          .then(() => {
            up.iblock = up.iblock ? 0 : 1;
          })
          .catch((err) => {
            if (err.response.data.status === "已经拉黑此人") {
              up.iblock = 1;
            }
          });
      }
    },
  },
  data() {
    return {
      usid: null,
      subpage: 0,
      leftPanelTop: 0,
      tablist: [
        {
          subpath: "welcome",
          name: "欢迎",
          iconname: "smile",
          tab: () => import("@/subviews/Test.vue"),
          show: () => true,
          showInList: true,
        },
        {
          subpath: "info",
          name: "个人资料",
          iconname: "edit",
          tab: () => import("@/subviews/MineInfo.vue"),
          show: () => this.usid == this.$store.state.user.usid,
          showInList: true,
        },
        {
          subpath: "blog",
          name: "个人动态",
          iconname: "blog",
          tab: () => import("@/subviews/MyBlog.vue"),
          show: () => true,
          showInList: true,
        },
        {
          subpath: "fol",
          name: "关注列表",
          iconname: "list",
          tab: () => import("@/subviews/FolList.vue"),
          show: () => true,
          showInList: false,
        },
        {
          subpath: "fan",
          name: "粉丝列表",
          iconname: "list",
          tab: () => import("@/subviews/FanList.vue"),
          show: () => true,
          showInList: false,
        },
        {
          subpath: "favorite",
          name: "收藏夹",
          iconname: "folder",
          tab: () => import("@/subviews/FavList.vue"),
          show: () => true,
          showInList: true,
        },
        {
          subpath: "history",
          name: "观看历史",
          iconname: "history",
          tab: () => import("@/subviews/HistoryBlock.vue"),
          show: () => true,
          showInList: true,
        },
        {
          subpath: "upload",
          name: "投稿管理",
          iconname: "upload",
          tab: () => import("@/subviews/UploadList.vue"),
          show: () => true,
          showInList: true,
        },
        {
          subpath: "stat",
          name: "数据中心",
          iconname: "rocket",
          tab: () => import("@/subviews/Stat.vue"),
          show: () => true,
          showInList: true,
        },
      ],
      displayUser: {
        usid: 0,
        nickname: "获取中",
        avatar: "",
        follower_num: 0,
        followee_num: 0,
        upload_num: 0,
        blogs_num: 0,
      },
    };
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 100px auto 0;
  border: 1px solid #ddd;
  box-sizing: content-box;
}

.left {
  width: 245px;
  padding: 24px;
  border-right: 1px solid #ddd;
  background-color: #f9f9f9;
  float: left;
}

.right {
  width: 955px;
  float: right;
}

.avatar {
  margin: 7px auto 0;
  position: relative;
  margin: -88px auto 0;
  width: 128px;
  height: 128px;
  border: 1px solid #ddd;
  border-radius: 64px;
  background-color: #fafafa;
}

.avatar img {
  width: 112px;
  height: 112px;
  margin: 7px 8px 0;
  box-sizing: content-box;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 56px;
}

.name {
  margin: 8px auto 0;
  text-align: center;
  font-size: 18px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
}

.tab {
  display: block;
  width: 197px;
}

.tab :hover {
  color: #5dceea;
}

.tab {
  float: left !important;
  overflow: visible;
  padding: 0 3px;
  border: none;
  font-weight: normal;
  font-size: 18px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
  cursor: default;
}

.stat {
  margin-top: 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.stat-item {
  width: 60px;
  text-align: center;
  font-size: 16px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
}

.stat-number {
  line-height: 19px;
  color: #222;
}

.stat-label {
  font-size: 16px;
  color: #99a2aa;
  padding-top: 9px;
}

.stat-label.on,
.stat-label:hover {
  color: pink;
}

.tab {
  border-top: 1px solid #ddd;
}

.tab-item {
  margin: 16px auto;
  padding: 0 0 0 16px;
  overflow: visible;
}

.tab-item.on a {
  color: pink;
}

.tab-item a {
  overflow: visible;
  padding: 0 8px;
  border: none;
  font-weight: normal;
  font-size: 18px;
  display: inline-block;
  height: 36px;
  margin-right: 4px;
  color: #999;
}

.tab-item a svg {
  color: #3a9bd9;
}

.tab-item.on a svg {
  color: pink;
}

.btn {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

</style>