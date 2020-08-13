//
// 导航栏 - Home页专用
//
<template>
  <div class="header-box">
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
            <router-link to="/mine">
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
  background: url(../assets/Nav.png);
}

.header {
  width: 100%;
  height: 38px;
  background: rgba(255, 255, 255, 0);
  position: relative;
  z-index: 999;
}

.nav {
  width: 1000px;
  height: 38px;
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
  height: 38px;
  float: left;
  list-style: none;
  line-height: 38px;
  text-align: center;
  font-size: 16px;
  font-family: 微软雅黑;
  font-weight: 100px;
}

.nav ul li header {
  text-decoration: none;
  width: 50px;
  height: 38px;
  display: block;
  color: aliceblue;
}

.nav ul li.tougao {
  height: 55px;
  background: pink;
  border-radius: 0 0 15px 15px;
}
</style>