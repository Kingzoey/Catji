//
// 导航栏 - Home页专用
//
<template>
  <div class="header-wrap">
    <div class="grad">
      <router-link to="/" class="head-logo">
        <img src="../assets/logo_demo2_00.png" />
      </router-link>
    </div>
    <div class="header">
      <ul class="nav">
        <li v-if="!this.$store.state.user.usid">
          <router-link to="/login">登录</router-link>
        </li>
        <li v-if="!this.$store.state.user.usid">
          <router-link to="/register">注册</router-link>
        </li>
        <li>
          <router-link to="/search">
            <font-awesome-icon :icon="['fas', 'search']" />
          </router-link>
        </li>
      </ul>
      <ul class="nav">
        <li>
          <router-link to="/space">
            <template v-if="this.$store.state.user.usid">{{this.$store.state.user.nickname}}</template>
            <font-awesome-icon v-else :icon="['fas', 'user']" />
          </router-link>
        </li>
        <li v-if="this.$store.state.user.usid">
          <router-link :to="{path:'/logout',query:{src:'/'}}">注销</router-link>
        </li>
        <!-- <li>
            <router-link to="/message">消息</router-link>
        </li>-->
        <li>
          <router-link to="/blog">动态</router-link>
        </li>
        <li>
          <router-link to="/space/favorite">收藏</router-link>
        </li>
        <li>
          <router-link to="/space/history">历史</router-link>
        </li>
        <li class="upload">
          <router-link to="/upload">投稿</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.header-wrap {
  width: 100%;
  min-width: 1200px;
  height: 100px;
  background: url("../assets/Nav11.jpg");
  min-height: 155px;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
}
.header {
  width: 1100px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0);
  position: relative;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.grad {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
}
.nav {
  display: flex;
  align-items: center;
  height: 48px;
}

.nav li a {
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  color: #fff;
  display: block;
}

.nav li a:hover {
  color: cornflowerblue;
}

.nav li {
  height: 48px;
  float: left;
  line-height: 48px;
  text-align: center;
  font-size: 16px;
  font-family: 微软雅黑;
  font-weight: 100px;
}

.nav li header {
  text-decoration: none;
  width: 50px;
  height: 48px;
  display: block;
  color: aliceblue;
}

.nav li.upload {
  height: 55px;
  background: pink;
  border-radius: 0 0 15px 15px;
}

.upload a {
  color: #fff !important;
}
</style>