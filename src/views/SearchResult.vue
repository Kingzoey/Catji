<template>
  <div class="SearchResult">
    <NavBar />
     <div class="bg" :style="{'background-position-x': tx+'px'}"></div>
    <div class="logo">
      <div class="grad">
        <router-link to="/" class="head-logo">
          <img src="../assets/logo_demo2_00.png" title style: width="30%" />
        </router-link>
      </div>
    </div>
        <div class="search-wrap">
        <div class="search-bar clearfix">
          <div class="input-warp">
            <input type="text" v-model="query" placeholder="请输入关键字" autocomplete="off" />
          </div>
          <div class="search-btn">
            <router-link :to="{path:'/searchResult',query:{q:query}}">
              <button class="searchButton">
                <font-awesome-icon :icon="['fas', 'search']" />&nbsp;搜索
              </button>
            </router-link>
          </div>
        </div>
      </div>
    <div class="container">
      <span class="name"></span>
      <div class="nav">
        <ul class="nav-switch" >
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
      <component :is="tabs[on].component"></component>
    </div>
  </div>
</template>

<script>
// import SearchResultBar from "@/components/SearchResultBar.vue";
// 这里的切换栏不单独分成组件了, 不然页面和组件之间的数据传递不好弄
import NavBar from "@/components/NavBar.vue";
export default {
  name: "SearchResult",
  components: {
    NavBar,
  },
  computed: {
    anthorx() {
      return 100 + this.hover * 250;
    },
  },
  data() {
    return {
      on: 0,
      hover: 0,
      tabs: [
        { name: "视频", component: () => import("../components/VideoListtSearchResult.vue") },
        { name: "用户", component: () => import("../components/ListView.vue") },
        { name: "猫咪", component: () => import("../components/ListView.vue") },
        { name: "标签", component: () => import("../components/TagList.vue") },
      ],
    };
  },
  mounted() {
    this.hover = this.on;
  },
  methods: {},
};
</script>

<style scoped>
.logo
{
  margin-left: 0%;
}
.SearchResult component
{
  display: inline;
}
.container {
  width: 1000px;
  margin: 0 auto;
}

.name {
  display: inline-block;
  color:#00a1d6;
  vertical-align: bottom;
  font-size: 25px;
  line-height: 80px;
  margin-bottom: 20px;
}

.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  margin-bottom: 16px;
  background: url("../assets/backgroundd.jpg");
}

.nav-switch {
  position: relative;
  
}

.nav-switch-item {
  display: inline-block;
  height: 56px;
  line-height: 56px;
  width: 25%;
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
  width: 50px;
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
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 18px;
}





/*****************************/
.search-bar {
  width: 430px;
  font-size: 14px;
  margin: 0 auto;
}
.input-warp {
  position: relative;
  background: #fff;
  border-radius: 4px;
  float: left;
  margin-right: 10px;
}
input {
  height: 18px;
  box-sizing: content-box;
  box-shadow: none;
  padding: 11px 15px;
  background: transparent;
  width: 296px;
  border: 2px solid #ccd0d7;
  border-radius: 4px;
  font-size: 16px;
  color: #222;
}
.searchButton {
  cursor: pointer;
  float: left;
  color: #fff;
  background: #00a1d6;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 42px;
  text-align: center;
  width: 90px;
  border-radius: 4px;
}
.bg {
  position: absolute;
  top: 0;
  background: url("../assets/test1.png") repeat;
  height: 200%;
  width: 100%;
  filter: blur(3px) ;
  background-size: cover;
  z-index: -1;
}
.container {
  width: 1000px;
  margin: 0 auto;
}
.body {
  display: flex;
  justify-content: space-between;
  margin: 50px 200px;
}
.search-wrap {
  padding-top: 180px;
}
.rank-wrap {
  margin-bottom: 15px;
}
.name {
  display: block;
  color: #212121;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 20px;
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
  vertical-align: top;
}
.number.on {
  color: #fff;
  background: #00a1d6;
}
.link {
  margin-left: 5px;
  display: inline-block;
  vertical-align: top;
}
.title {
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.searchButton:hover {
  background: #00b5e5;
}

.grad {
  pointer-events: none;
  text-align:center;
  position: absolute;
  top: 20px;
  z-index: 0;
  width: 100%;
  height: 100%;
}

.rank-wrap :hover {
  color:#00a1d6;
}

</style>