<template>
  <div>
    <NavBar />
    <div class="container clearfix">
      <div class="left">
        <div class="user">
          <div class="avatar">
            <img :src="this.$store.state.user.avatar" alt />
          </div>
          <div class="name">{{this.$store.state.user.name}}</div>
          <div class="stat clearfix">
            <a class="stat-item">
              <p class="stat-number">{{this.$store.state.user.followee_num}}</p>
              <p class="stat-label">关注</p>
            </a>
            <a class="stat-item">
              <p class="stat-number">{{this.$store.state.user.follower_num}}</p>
              <p class="stat-label">粉丝</p>
            </a>
            <a class="stat-item">
              <p class="stat-number">{{this.$store.state.user.upload_num}}</p>
              <p class="stat-label">动态</p>
            </a>
          </div>
        </div>
        <div class="tab">
          <ul>
            <li
              class="tab-item"
              :class="{on:index==on}"
              v-for="(tab, index) in tablist"
              :key="tab.name"
            >
              <a href="javascript:void(0);" @click="on = index">
                <font-awesome-icon :icon="['fas', tab.iconname]" />
                {{tab.name}}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <component :is="tablist[on].tab"></component>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Space",
  components: {
    NavBar,
  },
  methods: {},
  data() {
    return {
      on: 0,
      tablist: [
        {
          name: "欢迎",
          iconname: "smile",
          tab: () => import("@/views/About.vue"),
        },
        {
          name: "个人资料",
          iconname: "edit",
          tab: () => import("@/components/MineInfo.vue"),
        },
        {
          name: "个人动态",
          iconname: "blog",
          tab: () => import("@/views/Login.vue"),
        },
        {
          name: "关注 / 粉丝列表",
          iconname: "list",
          tab: () => import("@/views/About.vue"),
        },
        {
          name: "我的收藏",
          iconname: "folder",
          tab: () => import("@/components/HistoryBlock.vue"),
        },
        {
          name: "观看历史",
          iconname: "history",
          tab: () => import("@/components/HistoryBlock.vue"),
        },
        {
          name: "投稿管理",
          iconname: "upload",
          tab: () => import("@/components/HistoryBlock.vue"),
        },
        {
          name: "数据中心",
          iconname: "rocket",
          tab: () => import("@/views/Login.vue"),
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route.params.usid);
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 100px auto 0;
  border: 1px solid #ddd;
}

.left {
  width: 245px;
  padding: 24px;
  border-right: 1px solid #ddd;
  background-color: #f9f9f9;
  float: left;
}

.right {
  width: 954px;
  float: right;
  margin: 0 -1px;
  border-left: 1px solid #ddd;
}

.user {
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
  font-family: Michroma,'Segoe UI Light','Segoe UI','Segoe UI WP','Microsoft Jhenghei','微软雅黑',sans-serif,Times;
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
	font-family: Michroma,'Segoe UI Light','Segoe UI','Segoe UI WP','Microsoft Jhenghei','微软雅黑',sans-serif,Times;
	cursor: default;
}


.stat {
  margin: 16px auto 8px;
}

.stat-item {
  width: calc(100% / 3);
  height: 92px;
  text-align: center;
  float: left;
  font-size: 16px;
  font-family:Michroma,'Segoe UI Light','Segoe UI','Segoe UI WP','Microsoft Jhenghei','微软雅黑',sans-serif,Times;
}

.stat-number {
  padding-top: 35px;
  line-height: 19px;
  color: #222;
}

.stat-label {
  font-size: 16px;
  color: #99a2aa;
  padding-top: 9px;
}

.tab {
  border-top: 1px solid #ddd;
}

.tab-item {
  margin: 16px auto;
  padding: 0 0 0 16px;
  overflow: visible;
}

.tab-item.on a{
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
  color:#999;
}

.tab-item a svg {
  color: #3a9bd9;
}

.tab-item.on a svg {
  color: pink;
}
</style>