<template>
  <div class="cat">
    <NavBar />
    <div class="container">
      <div class="intro">
        <div class="intro-mid">
          <div class="pic">
            <img :src="cat.banner" width="300" height="300" />
          </div>
          <div class="info">
            <div class="name">
              <span>{{cat.name}}</span>
              <el-button type="primary" size="medium" @click="toUserSpace">猫咪账号</el-button>
            </div>
            <p>{{cat.description}}</p>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="nav">
          <ul class="nav-switch">
            <li
              v-for="(item, index) in tabs"
              :key="item.name"
              class="nav-switch-item"
              :class="{on : on == index}"
              @click="on = index"
              @mouseenter="hover = index"
              @mouseleave="hover = on"
            >{{item.name}}</li>
            <li class="nav-switch-anchor" :style="{transform: 'translateX('+anthorx+'px)'}" />
          </ul>
        </div>
        <component :is="tabs[on].component" :cat_id="cat_id"></component>
      </div>
      <br />
    </div>
    <br />
  </div>
</template>

<script>
import { catInfo } from "../api";
import NavBar from "@/components/NavBar.vue";
import SearchResultVideo from "@/components/SearchResultVideo.vue";
import BlogCard from "@/components/BlogCard.vue";
import CatIntroduction from "@/components/CatIntroduction.vue";
export default {
  beforeCreate() {
    this.cat_id = this.$route.params.cat_id;
  },
  methods: {
    toUserSpace() {
      this.$router.push({ path: "/space/ + cat.usid" });
    },
  },
  mounted() {
    this.hover = this.on;
    catInfo(this.cat_id)
      .then((res) => {
        this.cat = res.data.data;
      })
      .catch((err) => {
        this.$message.error("网络错误: " + err.response.data.status);
      });
  },
  computed: {
    anthorx() {
      return 160 + this.hover * 400;
    },
  },
  data() {
    return {
      cat_id: 0,
      cat: {
        cat_id: 0,
        name: "获取中...",
        description: "获取中...",
        banner: "",
        usid: 0,
      },
      on: 0,
      hover: 0,
      tabs: [
        {
          name: "猫咪介绍",
          component: CatIntroduction,
        },
        {
          name: "猫咪视频",
          component: SearchResultVideo,
        },
        {
          name: "猫咪动态",
          component: BlogCard,
        },
      ],
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}

.name {
  font-size: 30px;
}

.nav-switch {
  position: relative;
}

.nav-switch-item {
  display: inline-block;
  height: 56px;
  line-height: 56px;
  width: 33.3%;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  border-bottom: 1px solid #ccd0d7;
}

.nav-switch-item:hover {
  color: #00a1d6;
}

.nav-switch-item.on {
  color: #00a1d6;
}

.nav-switch-anchor {
  background-color: #00a1d6;
  height: 2px;
  width: 80px;
  display: block;
  position: absolute;
  left: 0;
  top: 54px;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-property: width, height, transform;
  will-change: transform;
  pointer-events: none;
  transition-duration: 200ms;
}

.nav-wrap {
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 18px;
}

.intro {
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.intro-mid {
  padding: 20px;
  background-color: rgb(134, 170, 238);
  border-color: rgb(134, 170, 238);
  border-radius: 8px;
  display: flex;
  justify-content: center;
}

.pic img {
  border-radius: 8px;
}

.info {
  margin-left: 30px;
  margin-right: 30px;
}

.body {
  margin-top: 20px;
}

.name {
  display: inline-block;
}
.name > * {
  vertical-align: middle;
}
</style>