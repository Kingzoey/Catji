//
// 导航栏 - Home页专用
//
<template>
  <div class="header-box">
    <div class="grad">
      <router-link to="/" class="head-logo">
        <img src="../assets/logo_demo2_00.png" title style />
      </router-link>
    </div>
    <div class="header">
      <div class="nav">
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/login">登录</router-link>
          </li>
          <li>
            <router-link to="/register">注册</router-link>
          </li>
          <li>
            <router-link to="/search">
              <font-awesome-icon :icon="['fas', 'search']" />
            </router-link>
          </li>
        </ul>

        <ul style="float: right;">
          <li>
            <router-link to="/space">
              <font-awesome-icon :icon="['fas', 'user']" />
            </router-link>
          </li>
          <li>
            <router-link to="/message">消息</router-link>
          </li>
          <li>
            <router-link to="/blog">动态</router-link>
          </li>
          <li>
            <router-link to="/favorite">收藏</router-link>
          </li>
          <li class="tougao">
            <router-link to="/upload">投稿</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.header-box {
  width: 100%;
  height: 100px;
  background: url("../assets/Nav11.jpg");
  min-height: 155px;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
}
.header {
  width: 100%;
  height: 48px;
  background: rgba(255, 255, 255, 0);
  position: relative;
  z-index: 999;
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
  width: 1000px;
  height: 48px;
  margin: 0 auto;
}

.nav li a {
  color: #fff;
  display: block;
}

.nav li a:hover {
  color: cornflowerblue;
}

.nav ul li {
  width: 50px;
  height: 48px;
  float: left;
  list-style: none;
  line-height: 48px;
  text-align: center;
  font-size: 16px;
  font-family: 微软雅黑;
  font-weight: 100px;
}

.nav ul li header {
  text-decoration: none;
  width: 50px;
  height: 48px;
  display: block;
  color: aliceblue;
}

.nav ul li.tougao {
  height: 55px;
  background: pink;
  border-radius: 0 0 15px 15px;
}
</style>