<template>
  <div @mousemove="parallax">
    <NavBar />
    <div class="bg" :style="{'background-position-x': tx+'px'}"></div>
    <div class="logo">
      <div class="grad">
        <router-link to="/" class="head-logo">
          <img src="../assets/logo_demo2_00.png" title style: width="30%" />
        </router-link>
      </div>
    </div>
    <div class="container">
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
      <div class="body">
        <div class="rank-list">
          <span class="name">
            <font-awesome-icon :icon="['fas', 'history']" />&nbsp;搜索历史
          </span>
          <div class="rank-wrap" v-for="(item, index) in history" :key="item">
            <span class="number" :class="{on : index < 3}">{{index + 1}}</span>
            <router-link :to="{path:'/searchResult',query:{q:item}}" class="link">
              <p :title="item" class="title">{{item}}</p>
            </router-link>
          </div>
        </div>
        <div class="rank-list">
          <span class="name">
            <font-awesome-icon :icon="['fas', 'fire-alt']" />&nbsp;热搜榜
          </span>
          <div class="rank-wrap" v-for="(item, index) in hotlist" :key="item">
            <span class="number" :class="{on : index < 3}">{{index + 1}}</span>
            <router-link :to="{path:'/searchResult',query:{q:item}}" class="link">
              <p :title="item" class="title">{{item}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Search",
  components: {
    NavBar,
  },
  methods: {
    parallax(e) {
      this.tx =
        ((e.pageX - window.screen.width / 2) * 20) / window.screen.width;
    },
  },
  data() {
    return {
      tx: 0,
      query: "",
      hotlist: [
        "吃饭1",
        "吃饭吃饭2",
        "吃饭吃饭吃饭3",
        "吃饭吃饭4",
        "吃饭吃饭吃饭吃饭5",
        "吃饭吃饭吃饭吃饭吃饭吃饭6",
        "吃饭吃饭吃饭吃饭7",
        "吃饭吃饭吃饭8",
        "吃饭吃饭吃饭9",
      ],
      history: [
        "睡觉睡觉睡觉睡觉1",
        "睡觉睡觉睡觉睡觉2",
        "睡觉睡觉睡觉睡觉3",
        "睡觉睡觉睡觉睡觉4",
        "睡觉睡觉睡觉睡觉5",
        "睡觉睡觉睡觉睡觉6",
        "睡觉睡觉睡觉睡觉7",
        "睡觉睡觉睡觉睡觉8",
        "睡觉睡觉睡觉睡觉9",
      ],
    };
  },
};
</script>

<style scoped>
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
  background: url("../assets/test3.png") repeat;
  height: 110%;
  width: 100%;
  filter: blur(2px);
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

/*
.rank-list{
	width:250px;
	background-color:rgba(255, 255, 255, 0.5);
  opacity:0.5;
}
*/
</style>